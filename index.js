import { z } from 'zod';

export const name = 'task-sidebar';
export const inject = ['sessionProjections'];

const MAX_FILES = 60;
const projectionKey = 'taskSidebarOutputs';
const viewSchema = z.object({
  files: z.array(z.object({
    path: z.string().min(1),
    description: z.string().max(180).optional(),
  })).max(MAX_FILES),
  more: z.boolean(),
});
const stateSchema = z.object({
  firstOwnSeq: z.number().int().nonnegative(),
  outputs: viewSchema,
});

const MAX_INPUT_ATTACHMENTS = 20;
const MAX_INPUT_REFERENCES = 30;
const inputsKey = 'taskSidebarInputs';
const imageMediaType = z.enum(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);
const imageRefSchema = z.object({
  attachmentId: z.string().min(1).max(128),
  mediaType: imageMediaType,
  bytes: z.number().int().nonnegative(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});
const attachmentSchema = z.object({
  key: z.string().min(1),
  kind: z.enum(['file', 'image']),
  name: z.string().min(1).max(120),
  bytes: z.number().int().nonnegative().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  imageRef: imageRefSchema.optional(),
});
const inputsViewSchema = z.object({
  attachments: z.array(attachmentSchema).max(MAX_INPUT_ATTACHMENTS),
  moreAttachments: z.boolean(),
  references: z.array(z.object({ path: z.string().min(1).max(400) })).max(MAX_INPUT_REFERENCES),
  moreReferences: z.boolean(),
});
const inputsStateSchema = z.object({
  firstOwnSeq: z.number().int().nonnegative(),
  inputs: inputsViewSchema,
});

const MAX_SKILLS = 20;
const MAX_CONNECTORS = 12;
const capabilitiesKey = 'taskSidebarCapabilities';
const MAX_CONNECTOR_TOOLS = 16;
const MAX_SKILL_DESCRIPTION = 200;
const MAX_CATALOG_ENTRIES = 1024;
const useSchema = z.object({ name: z.string().min(1).max(80), count: z.number().int().positive() });
const skillDescriptionSchema = z.string().min(1).max(MAX_SKILL_DESCRIPTION);
const capabilitiesViewSchema = z.object({
  skills: z.array(useSchema.extend({ description: skillDescriptionSchema.optional() })).max(MAX_SKILLS),
  connectors: z.array(useSchema.extend({
    tools: z.array(useSchema).max(MAX_CONNECTOR_TOOLS),
    moreTools: z.boolean(),
  })).max(MAX_CONNECTORS),
  moreSkills: z.boolean(),
  moreConnectors: z.boolean(),
});
const capabilitiesStateSchema = z.object({
  firstOwnSeq: z.number().int().nonnegative(),
  capabilities: capabilitiesViewSchema,
  catalog: z.array(z.object({ name: useSchema.shape.name, description: skillDescriptionSchema })).max(MAX_CATALOG_ENTRIES),
});

// A `skill` call names the skill, and an MCP tool arrives as `mcp__<server>__<tool>`.
// Skill descriptions come from the structured catalog recorded in the same transcript.
function invokedName(event) {
  const call = event.data;
  if (typeof call?.name !== 'string') return {};
  if (call.name === 'skill') {
    let parsed;
    try { parsed = JSON.parse(call.arguments ?? '{}'); } catch { return {}; }
    const skill = typeof parsed?.name === 'string' ? parsed.name.trim().slice(0, 80) : '';
    return skill ? { skill } : {};
  }
  if (call.name.startsWith('mcp__')) {
    const rest = call.name.slice(5);
    const cut = rest.indexOf('__');
    const server = (cut === -1 ? rest : rest.slice(0, cut)).trim().slice(0, 80);
    const tool = cut === -1 ? '' : rest.slice(cut + 2).trim().slice(0, 80);
    return server ? { connector: server, tool } : {};
  }
  return {};
}

function countUse(list, name, limit, update = item => item) {
  const index = list.findIndex(item => item.name === name);
  if (index >= 0) {
    const next = [...list];
    next[index] = update({ ...next[index], count: next[index].count + 1 });
    return { list: next, overflow: false };
  }
  if (list.length >= limit) return { list, overflow: true };
  return { list: [...list, update({ name, count: 1 })], overflow: false };
}

function skillCatalog(event) {
  if (event.type !== 'user/message' || event.surfaceOp !== 'append') return;
  const { source } = event.data ?? {};
  if (source?.kind !== 'skill-catalog' || source.form !== 'catalog' || !Array.isArray(source.entries)) return;
  const entries = new Map();
  for (const item of source.entries) {
    if (!useSchema.shape.name.safeParse(item?.name).success || typeof item?.description !== 'string') continue;
    const text = item.description.replace(/\s+/gu, ' ').trim();
    if (!text) continue;
    const description = text.length > MAX_SKILL_DESCRIPTION
      ? `${text.slice(0, MAX_SKILL_DESCRIPTION - 1).trimEnd()}…` : text;
    entries.set(item.name, { name: item.name, description });
    if (entries.size === MAX_CATALOG_ENTRIES) break;
  }
  return [...entries.values()];
}

function applyCapabilities(state, event) {
  if (!Number.isSafeInteger(event.seq)) return state;
  // An inherited catalog can describe a new call, but inherited calls never count.
  const catalog = skillCatalog(event);
  if (catalog) return { ...state, catalog };
  if (event.seq < state.firstOwnSeq || event.type !== 'tool/call') return state;
  const { capabilities } = state;
  const { skill, connector, tool } = invokedName(event);
  if (skill) {
    const description = state.catalog.find(item => item.name === skill)?.description;
    const next = countUse(capabilities.skills, skill, MAX_SKILLS,
      item => description ? { ...item, description } : item);
    return {
      ...state,
      capabilities: { ...capabilities, skills: next.list, moreSkills: capabilities.moreSkills || next.overflow },
    };
  }
  if (connector) {
    const next = countUse(capabilities.connectors, connector, MAX_CONNECTORS, item => {
      const { tools = [], moreTools = false } = item;
      const observed = tool ? countUse(tools, tool, MAX_CONNECTOR_TOOLS) : { list: tools, overflow: false };
      return { ...item, tools: observed.list, moreTools: moreTools || observed.overflow };
    });
    return { ...state, capabilities: { ...capabilities, connectors: next.list, moreConnectors: capabilities.moreConnectors || next.overflow } };
  }
  return state;
}

function applyDelivery(state, event) {
  // A fork inherits transcript history, but only its own declarations belong in its outputs.
  if (event.type !== 'deliverables/presented' || !Array.isArray(event.data?.files)
    || !Number.isSafeInteger(event.seq) || event.seq < state.firstOwnSeq) return state;

  const declared = new Map();
  for (const file of event.data.files) {
    if (typeof file?.path !== 'string' || file.path.trim() === '') continue;
    const description = typeof file.description === 'string' ? file.description.trim().slice(0, 180) : '';
    declared.set(file.path, { path: file.path, ...(description ? { description } : {}) });
  }
  if (declared.size === 0) return state;

  const { files, more } = state.outputs;
  const newest = [...declared.values(), ...files.filter(file => !declared.has(file.path))];
  return {
    firstOwnSeq: state.firstOwnSeq,
    outputs: { files: newest.slice(0, MAX_FILES), more: more || newest.length > MAX_FILES },
  };
}

// A referenced path arrives as plain text: `@path` or `@"quoted path"`. Only the
// user's own tokens count, and only tokens shaped like a path (separator or
// extension) so an `@name` mention is not reported as a file. A bare token stops
// at whitespace and sentence punctuation but keeps `:` for Windows drive paths.
const REFERENCE_PATTERN = /(?:^|[\s\u3000(（【"'`])@(?:"([^"\n]{1,380})"|([^\s\u3000"'`，。；：、,;!?！？（）()【】[\]<>]+))/gu;

function looksLikePath(token) {
  return token.includes('/') || token.includes('\\') || /\.[A-Za-z0-9]{1,8}$/u.test(token);
}

function referencesOf(text) {
  const found = [];
  for (const match of text.matchAll(REFERENCE_PATTERN)) {
    const token = (match[1] ?? match[2] ?? '').trim().replace(/[.,;:]+$/u, '');
    if (token && token.length <= 400 && looksLikePath(token)) found.push(token);
  }
  return found;
}

function attachmentOf(block) {
  if (block?.type === 'file' && block.attachment) {
    const name = typeof block.attachment.name === 'string' && block.attachment.name.trim()
      ? block.attachment.name.trim().slice(0, 120) : 'attachment';
    const bytes = Number.isSafeInteger(block.attachment.bytes) ? block.attachment.bytes : undefined;
    return { kind: 'file', name, ...(bytes === undefined ? {} : { bytes }) };
  }
  if (block?.type === 'image' && block.attachment) {
    const name = typeof block.attachment.name === 'string' && block.attachment.name.trim()
      ? block.attachment.name.trim().slice(0, 120) : '';
    const bytes = Number.isSafeInteger(block.attachment.bytes) ? block.attachment.bytes : undefined;
    const width = Number.isSafeInteger(block.attachment.width) ? block.attachment.width : undefined;
    const height = Number.isSafeInteger(block.attachment.height) ? block.attachment.height : undefined;
    const imageRef = imageRefSchema.safeParse(block.attachment);
    return {
      kind: 'image', name: name || 'image',
      ...(bytes === undefined ? {} : { bytes }),
      ...(width === undefined || height === undefined ? {} : { width, height }),
      ...(imageRef.success ? { imageRef: imageRef.data } : {}),
    };
  }
  return undefined;
}

function applyInputs(state, event) {
  if (!Number.isSafeInteger(event.seq) || event.seq < state.firstOwnSeq) return state;

  // Fold only material in direct user messages. Turn boundaries and plain text leave history intact.
  if (event.type !== 'user/message' || event.data?.source?.kind !== 'user'
    || !Array.isArray(event.data.content)) return state;

  const submittedAttachments = new Map();
  const submittedPaths = new Set();
  for (const [index, block] of event.data.content.entries()) {
    const attachment = attachmentOf(block);
    if (attachment) {
      const id = block.attachment.attachmentId;
      const key = typeof id === 'string' && id
        ? `${attachment.kind}:${id}`
        : `event:${event.seq}:${index}`;
      submittedAttachments.set(key, { key, ...attachment });
      continue;
    }
    if (block?.type !== 'text' || typeof block.text !== 'string') continue;
    for (const path of referencesOf(block.text)) submittedPaths.add(path);
  }
  if (!submittedAttachments.size && !submittedPaths.size) return state;

  const attachments = [...submittedAttachments.values(),
    ...state.inputs.attachments.filter(item => !submittedAttachments.has(item.key))];
  const references = [...Array.from(submittedPaths, path => ({ path })),
    ...state.inputs.references.filter(item => !submittedPaths.has(item.path))];
  return {
    firstOwnSeq: state.firstOwnSeq,
    inputs: {
      attachments: attachments.slice(0, MAX_INPUT_ATTACHMENTS),
      moreAttachments: state.inputs.moreAttachments || attachments.length > MAX_INPUT_ATTACHMENTS,
      references: references.slice(0, MAX_INPUT_REFERENCES),
      moreReferences: state.inputs.moreReferences || references.length > MAX_INPUT_REFERENCES,
    },
  };
}

export async function apply(ctx) {
  // No workspace scan. Fold successful, explicit declarations from the owning session.
  // Keep the wire value out of the closed-session list and bound the stored history per session.
  await ctx.sessionProjections.register({
    key: projectionKey,
    stateVersion: 1,
    stateSchema,
    init: (_header, inheritedEventCount) => ({
      firstOwnSeq: inheritedEventCount,
      outputs: { files: [], more: false },
    }),
    apply: applyDelivery,
    wire: { viewSchema, view: state => state.outputs, summary: false },
  });

  // Recent direct inputs, rebuilt from the session log whenever the fold version changes.
  await ctx.sessionProjections.register({
    key: inputsKey,
    stateVersion: 5,
    stateSchema: inputsStateSchema,
    init: (_header, inheritedEventCount) => ({
      firstOwnSeq: inheritedEventCount,
      inputs: { attachments: [], moreAttachments: false, references: [], moreReferences: false },
    }),
    apply: applyInputs,
    wire: { viewSchema: inputsViewSchema, view: state => state.inputs, summary: false },
  });

  // Skills and connectors this session actually used, folded from tool calls.
  await ctx.sessionProjections.register({
    key: capabilitiesKey,
    stateVersion: 3,
    stateSchema: capabilitiesStateSchema,
    init: (_header, inheritedEventCount) => ({
      firstOwnSeq: inheritedEventCount,
      capabilities: { skills: [], connectors: [], moreSkills: false, moreConnectors: false },
      catalog: [],
    }),
    apply: applyCapabilities,
    wire: { viewSchema: capabilitiesViewSchema, view: state => state.capabilities, summary: false },
  });
}
