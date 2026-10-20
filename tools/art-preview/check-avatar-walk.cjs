// Optional local verification: node tools/art-preview/check-avatar-walk.cjs
// Uses Node built-ins only. Canvas/browser checks are recorded separately.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const core = require('./avatar-walk-core.js');
const root = path.resolve(__dirname, '../..');
const read = relative => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const idle = read('art/concepts/avatars/avatar-base-01-v04.json');
const walk = read('art/concepts/avatars/avatar-base-01-walk-v01.json');
const checks = [];
function check(name, run) { run(); checks.push(name); }
check('JavaScript syntax and local data snapshot', () => {
  for (const file of ['avatar-walk-core.js', 'avatar-walk-data.js', 'avatar-walk-studio.js']) new vm.Script(fs.readFileSync(path.join(__dirname, file), 'utf8'));
  const context = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'avatar-walk-data.js'), 'utf8'), context);
  assert.equal(JSON.stringify(context.window.AVATAR_WALK_DATA), JSON.stringify({ idle, walk }));
});
check('Source and native atlas SHA-256', () => {
  for (const source of [idle.source, ...idle.views.filter(view => view.sourceOverride).map(view => view.sourceOverride), walk.source, walk.nativeExport]) {
    const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, source.path))).digest('hex');
    assert.equal(actual, source.sha256, source.path);
  }
});
check('20 native frames and four complete cycles', () => {
  assert.equal(walk.nativeExport.frames.length, 20); assert.equal(new Set(walk.nativeExport.frames.map(frame => frame.id)).size, 20);
  assert.deepEqual(walk.frame, { width: 32, height: 48, anchor: { x: 16, y: 46 } });
  for (const view of walk.views) {
    assert.equal(view.poses.length, 4); assert.deepEqual([...view.sequence].sort(), [0, 1, 2, 3]);
    const entries = walk.nativeExport.frames.filter(frame => frame.direction === view.id);
    assert.equal(entries.filter(frame => frame.state === 'idle').length, 1); assert.equal(entries.filter(frame => frame.state === 'walk').length, 4);
  }
  for (const entry of walk.nativeExport.frames) {
    const r = entry.frame; assert(r.x >= 0 && r.y >= 0 && r.x + r.width <= 160 && r.y + r.height <= 192);
    assert.equal(r.width, 32); assert.equal(r.height, 48);
  }
  const png = fs.readFileSync(path.join(root, walk.nativeExport.path));
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a'); assert.equal(png.readUInt32BE(16), 160); assert.equal(png.readUInt32BE(20), 192);
});
check('Frame timing and loop boundaries', () => {
  for (const fps of [4, 6, 8, 10, 12]) {
    assert.equal(core.frameIndex(0, fps, 4), 0); assert.equal(core.frameIndex(1000 / fps, fps, 4), 1);
    assert.equal(core.frameIndex(3000 / fps, fps, 4), 3); assert.equal(core.frameIndex(4000 / fps, fps, 4), 0);
  }
});
check('Idle selection and per-direction cycle order', () => {
  const frames = { idle: new Map(), walk: new Map() };
  for (const view of walk.views) { frames.idle.set(view.id, view.id + '-idle'); frames.walk.set(view.id, view.poses.map(pose => pose.id)); }
  for (const view of walk.views) {
    assert.equal(core.getFrame(frames, walk, view.id, false, 3), view.id + '-idle');
    for (let index = 0; index < 4; index++) assert.equal(core.getFrame(frames, walk, view.id, true, index), view.poses[view.sequence[index]].id);
  }
});
check('Input directions, key release and stage bounds', () => {
  for (const [key, direction] of [['w', 'back'], ['a', 'left'], ['s', 'front'], ['d', 'right'], ['ArrowUp', 'back']]) assert.equal(core.movement(new Set([key])).direction, direction);
  assert.equal(core.movement(new Set(['w', 's'])).direction, null);
  const bounds = { minX: 16, maxX: 304, minY: 46, maxY: 190 }, start = { x: 160, y: 144 };
  const next = core.movePoint(start, new Set(['d']), 100, 64, bounds); assert.equal(next.x, 166.4); assert.equal(next.y, 144); assert(next.moving);
  assert(!core.movePoint(next, new Set(), 100, 64, bounds).moving);
  assert.equal(core.movePoint({ x: 303, y: 144 }, new Set(['d']), 250, 64, bounds).x, 304);
});
console.log(JSON.stringify({ passed: true, checks, browserExecuted: false }, null, 2));
