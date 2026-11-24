// Render a delivered-file row and check the inline failure, copy and manual fallback.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const client = await readFile(new URL('../client.js', import.meta.url), 'utf8');
const source = client.slice(client.indexOf('    function FileRow('), client.indexOf('    function Inputs('));
const props = {icon: () => {}, name: 'a', path: 'a.txt', open: async () => 'fileUnavailable', t: String};
const h = (type, attributes, ...children) => ({type, attributes, children});
const state = [];
let index = 0;
const React = {useId: () => 'message', useState: () => { const i = index++; return [state[i], value => state[i] = value]; }};
const render = () => { index = 0; return vm.runInNewContext(`${source}\nFileRow(props)`, {h, React, props}); };
const flatten = node => node && typeof node === 'object' ? [node, ...node.children.flatMap(flatten)] : [];
const activate = render().children[0].attributes.onClick;
await activate({currentTarget: {}});
const button = flatten(render()).find(node => node.children.includes('copyPath'));
assert.ok(button);
assert.ok(flatten(render()).some(node => node.children.includes('fileUnavailable')));
let copied;
const event = writeText => ({currentTarget: {ownerDocument: {defaultView: {navigator: {clipboard: {writeText}}}}}});
await button.attributes.onClick(event(async path => { copied = path; }));
assert.equal(copied, props.path);
assert.ok(flatten(render()).some(node => node.children.includes('pathCopied')));
await button.attributes.onClick(event(async () => { throw Error('Denied'); }));
assert.ok(flatten(render()).some(node => node.type === 'code' && node.children.includes(props.path)));
console.log('Inline error, copy, and manual fallback passed.');
