// Controller flow under a minimal DOM/Canvas adapter; not a browser test.
// node tools/art-preview/check-avatar-head-controller.cjs
'use strict';
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), assert = require('node:assert/strict');
class Element {
  constructor(tag, id) { Object.assign(this, { tagName: tag, id, children: [], dataset: {}, attributes: {}, listeners: {}, style: {}, checked: false, disabled: false, hidden: false, textContent: '' }); }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children = items; }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(name, listener) { this.listeners[name] = listener; }
  click() { return this.listeners.click?.({ target: this }); }
}
class Canvas extends Element {
  constructor() { super('canvas'); this.width = 32; this.height = 48; }
  getContext() { return { clearRect() {}, drawImage() {}, putImageData() {}, createImageData(width, height) { return { data: new Uint8ClampedArray(width * height * 4) }; } }; }
}
const html = fs.readFileSync(path.join(__dirname, 'avatar-head-lab.html'), 'utf8'), elements = new Map(), all = [], callbacks = [];
for (const match of html.matchAll(/<(\w+)\b[^>]*\bid="([^"]+)"[^>]*>/g)) {
  const [, tag, id] = match, element = tag === 'canvas' ? new Canvas() : new Element(tag, id);
  element.checked = /\bchecked\b/.test(match[0]); element.hidden = /\bhidden\b/.test(match[0]); elements.set(id, element); all.push(element);
}
const document = {
  hidden: false,
  getElementById(id) { assert(elements.has(id), 'Missing HTML element ' + id); return elements.get(id); },
  createElement(tag) { const element = tag === 'canvas' ? new Canvas() : new Element(tag); all.push(element); return element; },
  querySelectorAll(selector) { return all.filter(element => selector === 'button,input' ? ['button', 'input'].includes(element.tagName) : selector === '[data-direction]' ? element.dataset.direction : selector === '[data-jacket]' ? element.dataset.jacket : false); },
  addEventListener() {}
};
const sandbox = { document, console, Uint8ClampedArray, Map, JSON, Math, atob: value => Buffer.from(value, 'base64').toString('latin1'), requestAnimationFrame: callback => callbacks.push(callback) };
sandbox.window = sandbox; vm.createContext(sandbox);
for (const file of ['avatar-walk-core.js', 'avatar-walk-data.js', 'avatar-appearance-core.js', 'avatar-appearance-data.js', 'avatar-head-core.js', 'avatar-head-data.js', 'avatar-head-lab.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), sandbox, { filename: file });
const state = () => sandbox.avatarHeadLabState;
assert(state().ready); assert.equal(state().jacketId, 'green'); assert.equal(state().frameIndex, null); assert(state().showHead && state().showHair);
assert.equal(elements.get('directions').children.length, 4); assert.equal(elements.get('colors').children.length, 3);
elements.get('directions').children[3].click(); assert.equal(state().direction, 'back');
elements.get('colors').children[1].click(); assert.equal(state().jacketId, 'blue');
elements.get('motion').click(); callbacks.shift()(0); callbacks.shift()(75); callbacks.shift()(150); assert.equal(state().frameIndex, 1);
elements.get('step').click(); assert.equal(state().frameIndex, 2); assert(!state().walking);
elements.get('step').click(); elements.get('step').click(); assert.equal(state().frameIndex, 0);
for (const id of ['head-layer', 'hair-layer']) { const element = elements.get(id); element.checked = false; element.listeners.change({ target: element }); }
assert(!state().showHead && !state().showHair);
elements.get('restore').click(); assert(state().showHead && state().showHair);
elements.get('motion').click(); elements.get('motion').click(); assert.equal(state().frameIndex, null); assert(!state().walking);
assert.equal(elements.get('error').hidden, true);
console.log(JSON.stringify({ passed: true, environment: 'Node VM with minimal DOM/Canvas adapter', checks: ['Startup with original data and both layers', 'Four directions and three jacket choices', 'Walking playback and manual frame wrap', 'Layer toggles and restore', 'Return to idle'], browserExecuted: false, layoutTested: false, canvasPixelsTested: false, pixelCheckCompanion: 'tools/art-preview/check-avatar-head.cjs' }, null, 2));
