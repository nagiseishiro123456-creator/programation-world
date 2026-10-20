// node tools/art-preview/check-avatar-head.cjs — Node built-ins only.
'use strict';
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), crypto = require('node:crypto'), assert = require('node:assert/strict');
const ac = require('./avatar-appearance-core.js'), hc = require('./avatar-head-core.js');
const root = path.resolve(__dirname, '../..'), context = { window: {} }, checks = [];
for (const name of ['avatar-walk-data.js', 'avatar-appearance-data.js', 'avatar-head-data.js']) vm.runInNewContext(fs.readFileSync(path.join(__dirname, name), 'utf8'), context);
const data = context.window.AVATAR_HEAD_DATA, manifest = data.manifest, appearance = context.window.AVATAR_APPEARANCE_DATA, catalog = appearance.catalog;
const entries = context.window.AVATAR_WALK_DATA.walk.nativeExport.frames, decode = value => Buffer.from(value, 'base64').toString('latin1');
const source = ac.decodeSource(appearance.source, decode), neutral = ac.decodeSource(data.layers.neutral, decode), hair = ac.decodeSource(data.layers.hair, decode);
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
function check(name, fn) { fn(); checks.push(name); }
check('Syntax, manifest snapshot and all source/export hashes', () => {
  for (const name of ['avatar-head-core.js', 'avatar-head-lab.js', 'avatar-head-data.js', 'export-avatar-head-layers.cjs', 'export-avatar-front-v02.cjs']) new vm.Script(fs.readFileSync(path.join(__dirname, name), 'utf8'));
  const manifestPath = data.manifestPath || 'art/exports/avatars/avatar-head-layers-a-v01.json';
  assert.equal(JSON.stringify(manifest), JSON.stringify(JSON.parse(fs.readFileSync(path.join(root, manifestPath)))));
  for (const step of manifest.provenance.steps) assert.equal(hash(fs.readFileSync(path.join(root, step.sourcePath))), step.sha256);
  assert.equal(hash(fs.readFileSync(path.join(root, manifest.exports.neutral))), manifest.exportHashes.neutral);
  assert.equal(hash(fs.readFileSync(path.join(root, manifest.exports.hairA))), manifest.exportHashes.hair);
  assert.equal(hash(neutral), data.layers.neutral.sha256Rgba); assert.equal(hash(hair), data.layers.hair.sha256Rgba);
});
check('Front revision keeps neutral head and left/right/back hair byte-identical', () => {
  assert.equal(manifest.version, '0.2');
  assert.equal(manifest.revision.changedDirection, 'front');
  const previous = JSON.parse(fs.readFileSync(path.join(root, manifest.revision.previousManifest), 'utf8'));
  assert.equal(manifest.exports.neutral, previous.exports.neutral);
  assert.equal(manifest.exportHashes.neutral, previous.exportHashes.neutral);
  assert.equal(hash(fs.readFileSync(path.join(root, manifest.revision.previousHairExport))), manifest.revision.previousHairPngSha256);
  for (const view of manifest.views) {
    const pixels = hc.region(hair, 128, { x: view.column * 32, y: 0, width: 32, height: 48 });
    const actual = hash(pixels), baseline = manifest.revision.baselineViewRgbaHashes[view.id];
    if (view.id === 'front') assert.notEqual(actual, baseline, 'Front hair must change');
    else assert.equal(actual, baseline, view.id + ': protected hair pixels');
  }
});
check('Native layer bounds leave the body and feet untouched', () => {
  assert.deepEqual(JSON.parse(JSON.stringify(manifest.frame)), { width: 32, height: 48, anchor: { x: 16, y: 46 } });
  for (const layer of [neutral, hair]) for (let y = 22; y < 48; y++) for (let x = 0; x < 128; x++) assert.equal(layer[(y * 128 + x) * 4 + 3], 0);
  for (const view of manifest.views) {
    const rect = { x: view.column * 32, y: 0, width: 32, height: 48 };
    for (const layer of [neutral, hair]) {
      const pixels = hc.region(layer, 128, rect);
      assert(pixels.some((value, i) => i % 4 === 3 && value > 200));
      for (let x = 0; x < 32; x++) assert.equal(pixels[x * 4 + 3], 0);
    }
  }
});
let testedFrames = 0;
check('120 compositions: original identity, exact eyes, stable body and consistent walking heads', () => {
  for (const jacket of catalog.jackets) {
    const colored = ac.recolorAtlas(source, 160, 192, catalog, { ...catalog.defaults, jacketId: jacket.id });
    const previous = Buffer.from(colored);
    const original = hc.composeAtlas(colored, neutral, hair, manifest, entries, { style: 'original' });
    assert.deepEqual(Buffer.from(original), previous);
    const layered = hc.composeAtlas(colored, neutral, hair, manifest, entries, { style: 'a' });
    const heads = new Map();
    for (const entry of entries) {
      const before = hc.region(colored, 160, entry.frame), after = hc.region(layered, 160, entry.frame);
      assert.deepEqual(Buffer.from(after.subarray(22 * 32 * 4)), Buffer.from(before.subarray(22 * 32 * 4)), entry.id + ': body/feet');
      const view = manifest.views.find(item => item.id === entry.direction);
      for (const rect of view.eyePatches) assert.deepEqual(Buffer.from(hc.region(after, 32, rect)), Buffer.from(hc.region(before, 32, rect)), entry.id + ': eyes');
      assert.notDeepEqual(Buffer.from(after.subarray(0, 20 * 32 * 4)), Buffer.from(before.subarray(0, 20 * 32 * 4)), entry.id + ': hairstyle changes');
      const head = Buffer.from(after.subarray(0, 20 * 32 * 4));
      if (heads.has(entry.direction)) assert.deepEqual(head, heads.get(entry.direction), entry.id + ': walking head consistency'); else heads.set(entry.direction, head);
      if (entry.direction === 'front') for (const y of [15, 16]) {
        for (const x of [12, 19]) assert([...after.subarray((y * 32 + x) * 4, (y * 32 + x) * 4 + 3)].every(value => value > 180));
        for (const x of [13, 14, 17, 18]) assert([...after.subarray((y * 32 + x) * 4, (y * 32 + x) * 4 + 3)].every(value => value < 80));
      }
      testedFrames += 2;
    }
    assert.deepEqual(Buffer.from(colored), previous, 'input atlas must stay immutable');
  }
});
check('Layer toggles do not restore the old hairstyle and preserve the body', () => {
  const entry = entries[0], original = hc.region(source, 160, entry.frame), view = manifest.views[0], rect = { x: 0, y: 0, width: 32, height: 48 };
  const n = hc.region(neutral, 128, rect), h = hc.region(hair, 128, rect);
  const bare = hc.composeFrame(original, n, h, view, manifest, { style: 'a', showHead: false, showHair: false });
  assert(bare.subarray(0, 20 * 32 * 4).every(value => value === 0));
  for (const showHead of [false, true]) for (const showHair of [false, true]) {
    const output = hc.composeFrame(original, n, h, view, manifest, { style: 'a', showHead, showHair });
    assert.deepEqual(Buffer.from(output.subarray(22 * 32 * 4)), Buffer.from(original.subarray(22 * 32 * 4)));
  }
  assert.throws(() => hc.composeFrame(original, n, h, view, manifest, { style: 'b' }));
});
console.log(JSON.stringify({ passed: true, date: '2026-10-20', layerVersion: manifest.version, changedDirection: manifest.revision.changedDirection, checks, testedFrames, eyePixelsExactlyPreserved: true, bodyUnchangedFromRow: 22, otherHairViewsByteIdentical: true, conceptsApproved: ['original', 'A', 'B'], nativeStyleBProduced: false, nativeAVisualApproval: 'pending_product_owner_review', browserExecuted: false, manualChecksPending: ['Direction, jacket and layer controls in browser', 'Idle, playback and manual frame stepping in browser', 'Native A face/hair seams, collar and backpack at real scale', 'Desktop layouts and keyboard focus'] }, null, 2));
