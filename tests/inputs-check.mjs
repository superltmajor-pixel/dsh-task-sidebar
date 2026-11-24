// Replay user messages through the input projection and render the panel rows.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const routes = new Map();
const root = new URL('../', import.meta.url);
const host = await import(new URL('index.js', root));
await host.apply({sessionProjections: {register: async route => routes.set(route.key, route)}});
const input = routes.get('taskSidebarInputs');
assert.equal(input.stateVersion, 5);
const image = {attachmentId: 'image', name: 'photo.png', mediaType: 'image/png', bytes: 20, width: 2, height: 5};
const event = (seq, kind = 'user') => ({seq, type: 'user/message', data: {source: {kind}, content: [
  {type: 'file', attachment: {attachmentId: 'same', name: 'report.pdf', bytes: 12}},
  {type: 'image', attachment: image},
  {type: 'text', text: '@"notes.txt"'},
]}});
let state = input.init({}, 3);
assert.equal(input.apply(state, event(2)), state);
assert.equal(input.apply(state, event(5, 'retry')), state);
state = input.apply(state, event(6));
state = input.apply(state, event(9));
const wire = input.wire.viewSchema.parse(input.wire.view(state));
assert.deepEqual(wire.attachments.find(item => item.kind === 'file'), {key: 'file:same', kind: 'file', name: 'report.pdf', bytes: 12});
assert.equal(wire.attachments.length, 2);
assert.equal(wire.attachments.find(item => item.kind === 'image').imageRef.attachmentId, 'image');
assert.deepEqual(wire.references, [{path: 'notes.txt'}]);
const pkg = JSON.parse(await readFile(new URL('package.json', root)));
assert.equal(pkg.version, '0.10.6');

const client = await readFile(new URL('client.js', root), 'utf8');
assert.doesNotMatch(client, /openSource|sourceUnavailable|uiConversation|loadThrough/);
const h = (type, props, ...children) => ({type, props, children});
const Inputs = vm.runInNewContext(client.slice(client.indexOf('    function Inputs('),
  client.indexOf('    function connectorSettings(')) + '\nInputs', {
  h, Section: 'Section', ItemDetails: 'ItemDetails', ImagePreview: 'ImagePreview',
  FileRow: 'FileRow', ImageIcon: 'ImageIcon', FileIcon: 'FileIcon', LinkIcon: 'LinkIcon', formatBytes: String,
});
const flatten = node => node && typeof node === 'object'
  ? Array.isArray(node) ? node.flatMap(flatten) : [node, ...node.children.flatMap(flatten)] : [];
const opened = [];
const nodes = flatten(Inputs({value: wire, t: String,
  openFile: path => opened.push(path), openImage: item => opened.push(item.name)}));
const file = nodes.find(node => node.props?.title === 'report.pdf');
assert.equal(file.type, 'li');
assert.equal(file.props.onClick, undefined);
nodes.find(node => node.props?.path === 'notes.txt').props.open({});
nodes.find(node => node.type === 'ImagePreview').props.open();
assert.deepEqual(opened, ['notes.txt', 'photo.png']);

const source = client.slice(client.indexOf('          async function openFile('), client.indexOf('          async function openSkill('));
for (const [options, expected] of [[{}, undefined], [{outside: true}, 'outsideFolder'],
  [{missing: true}, 'fileUnavailable'], [{changed: true}, 'otherSession']]) {
  let previews = 0;
  const ctx = {get: () => ({stat: async () => ({ok: !options.missing})}),
    uiSession: {adapter: {current: {getSnapshot: () => ({key: options.changed ? 'other' : 's'})}}}};
  const openFile = vm.runInNewContext(source + '\nopenFile', {ctx, sessionId: 's', cwd: '/work',
    activeInSidebar: true, isOpen: () => true, openInSidebar: () => { previews++; },
    fileAddress: () => `dsh-resource://file/${options.outside ? 'absolute/a' : 'session/s/a'}`});
  assert.equal(await openFile('a', {isConnected: true}), expected);
  assert.equal(previews, expected ? 0 : 1);
}
console.log('Input replay, passive file row, image and reference actions, and file preview branches passed.');
