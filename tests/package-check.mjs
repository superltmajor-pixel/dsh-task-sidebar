// Check package metadata, loader IDs and exported resource paths in the prepared directory.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const manifest = JSON.parse(read('package.json'));
assert.equal(manifest.name, 'dsh-task-sidebar');
assert.match(manifest.version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/, 'package version must be a valid semver');
assert.notEqual(manifest.private, true, 'publication must not be blocked by the private flag');
assert.equal(manifest.publishConfig?.access, 'public', 'publication must target the public registry');
assert.equal(manifest.license, 'MIT');
assert.equal(manifest.engines.dsh, '0.2.2-rc.5');
assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml');
assert.equal(manifest.dsh.client.platform, 'web');
assert.deepEqual(manifest.dsh.client.inject, [
  '@deepseek-ai/dsh-client-ui-sidebar-right',
  '@deepseek-ai/dsh-client-ui-conversation',
]);
assert.equal(manifest.dependencies.zod, '4.6.6');
assert.match(read('cordis.patch.yml'), /name:\s*['"]?dsh-task-sidebar['"]?(?:\s|$)/);
assert.match(read('cordis.patch.yml'), /id:\s*['"]?task-sidebar['"]?(?:\s|$)/);
assert.match(read('client.js'), /id:\s*'dsh-task-sidebar'/);
assert.doesNotMatch(read('client.js'), /@local\//, 'the public build must not reference the local package scope');
assert.doesNotMatch(read('index.js'), /@local\//);
assert.match(read('LICENSE'), /Permission is hereby granted, free of charge/);
for (const locale of ['en', 'zh']) {
  assert.ok(JSON.parse(read(`locale/${locale}.json`)));
  assert.ok(fileURLToPath(import.meta.resolve(`dsh-task-sidebar/locale/${locale}.json`)).endsWith(`${locale}.json`));
}
assert.ok(fileURLToPath(import.meta.resolve('dsh-task-sidebar/client')).endsWith('client.js'));
assert.ok(fileURLToPath(import.meta.resolve('dsh-task-sidebar/icon')).endsWith('icon.svg'));
const projectionKeys = [...read('index.js').matchAll(/const \w+Key = '([^']+)'/g)].map((match) => match[1]);
assert.equal(projectionKeys.length, 3, 'the host registers three session projections');
for (const key of projectionKeys) {
  assert.ok(read('client.js').includes(`useProjection('${key}')`), `client.js must read the ${key} projection`);
}
const host = await import('dsh-task-sidebar');
assert.equal(host.name, 'task-sidebar');
assert.equal(typeof host.apply, 'function');
assert.deepEqual(host.inject, ['sessionProjections']);
console.log('Package metadata, loader names, resources and host export: passed.');
