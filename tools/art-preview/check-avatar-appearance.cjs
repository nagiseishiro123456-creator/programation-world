// Optional: node tools/art-preview/check-avatar-appearance.cjs
// Node built-ins only. Checks RGBA transformations and config; not browser UI.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const core = require('./avatar-appearance-core.js');
const root = path.resolve(__dirname, '../..');
const digest = value => crypto.createHash('sha256').update(value).digest('hex');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'avatar-appearance-data.js'), 'utf8'), context);
const data = context.window.AVATAR_APPEARANCE_DATA, catalog = data.catalog;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'art/concepts/avatars/avatar-base-01-walk-v01.json')));
const source = core.decodeSource(data.source, value => Buffer.from(value, 'base64').toString('latin1'));
const original = Buffer.from(source), checks = [], stats = [];
function check(name, run) { run(); checks.push(name); }
check('JavaScript syntax, catalog snapshot and source integrity', () => {
  for (const name of ['avatar-appearance-core.js', 'avatar-appearance-data.js', 'avatar-customization-studio.js']) new vm.Script(fs.readFileSync(path.join(__dirname, name), 'utf8'));
  assert.equal(JSON.stringify(catalog), JSON.stringify(JSON.parse(fs.readFileSync(path.join(root, 'art/exports/avatars/avatar-appearance-v01.json')))));
  assert.equal(digest(fs.readFileSync(path.join(root, catalog.source.path))), catalog.source.sha256);
  assert.equal(digest(source), data.source.sha256Rgba);
  assert.equal(source.length, 160 * 192 * 4);
});
check('Green default is byte-for-byte identical and transformations do not mutate it', () => {
  const result = core.recolorAtlas(source, 160, 192, catalog, catalog.defaults);
  assert.deepEqual(Buffer.from(result), original); assert.notEqual(result, source);
  for (const jacket of catalog.jackets) core.recolorAtlas(source, 160, 192, catalog, { ...catalog.defaults, jacketId: jacket.id });
  assert.deepEqual(Buffer.from(source), original);
});
check('All 60 frames preserve transparency, head, eyes, boots and non-green materials', () => {
  for (const jacket of catalog.jackets) {
    const output = core.recolorAtlas(source, 160, 192, catalog, { ...catalog.defaults, jacketId: jacket.id });
    const frames = [];
    for (const entry of manifest.nativeExport.frames) {
      let changed = 0;
      for (let y = 0; y < 48; y++) for (let x = 0; x < 32; x++) {
        const i = ((entry.frame.y + y) * 160 + entry.frame.x + x) * 4;
        assert.equal(output[i + 3], source[i + 3], 'Alpha: ' + entry.id);
        const differs = output[i] !== source[i] || output[i + 1] !== source[i + 1] || output[i + 2] !== source[i + 2];
        if (y < 19 || y > 33 || source[i + 1] <= source[i] || source[i + 1] <= source[i + 2]) assert(!differs, 'Protected pixel: ' + entry.id);
        // Neutral gray shirt/backpack and near-black outlines must keep their color.
        const channels = [...source.subarray(i, i + 3)], highest = Math.max(...channels), lowest = Math.min(...channels);
        if (highest < 12 || highest - lowest <= highest * 0.2) assert(!differs, 'Neutral material: ' + entry.id);
        if (differs) {
          changed++;
          assert.equal(Math.max(...output.subarray(i, i + 3)), highest, 'Value/shading');
          assert.equal(Math.min(...output.subarray(i, i + 3)), lowest, 'Saturation/shading');
          if (jacket.id === 'blue') assert(output[i + 2] > output[i + 1] && output[i + 1] > output[i]);
          if (jacket.id === 'terracotta') assert(output[i] > output[i + 1] && output[i + 1] > output[i + 2]);
        }
      }
      if (jacket.id === 'green') assert.equal(changed, 0); else assert(changed > 40, entry.id + ': jacket must change');
      if (entry.direction === 'front') for (const y of [15, 16]) {
        const at = x => [...output.subarray(((entry.frame.y + y) * 160 + entry.frame.x + x) * 4, ((entry.frame.y + y) * 160 + entry.frame.x + x) * 4 + 3)];
        for (const x of [12, 19]) assert(at(x).every(value => value > 180), 'Outer white of approved eyes');
        for (const x of [13, 14, 17, 18]) assert(at(x).every(value => value < 80), 'Solid inward pupils');
      }
      frames.push({ id: entry.id, changedPixels: changed });
    }
    stats.push({ jacketId: jacket.id, frames });
  }
});
check('Appearance JSON round-trip and rejection of unsupported or oversized input', () => {
  for (const option of catalog.jackets) {
    const value = { ...catalog.defaults, jacketId: option.id };
    assert.equal(JSON.stringify(core.parseAppearance(core.serializeAppearance(value, catalog), catalog)), JSON.stringify(value));
  }
  for (const value of [null, [], {}, { ...catalog.defaults, jacketId: 'unknown' }, { ...catalog.defaults, avatarId: 'other' }, { ...catalog.defaults, schemaVersion: 2 }, { ...catalog.defaults, unexpected: true }]) assert.throws(() => core.validateAppearance(value, catalog));
  for (const text of ['not json', '{', ' '.repeat(4097)]) assert.throws(() => core.parseAppearance(text, catalog));
  assert.throws(() => core.recolorAtlas(source, 32, 48, catalog, catalog.defaults));
});
console.log(JSON.stringify({ passed: true, checks, frameCount: 60, variants: stats, browserExecuted: false, phaserIntegrated: false,
  visualApproval: catalog.reviewStatus, approval: catalog.approval,
  manualChecksPending: ['Color selection and direction controls in browser', 'Walking, idle and manual frame stepping in browser', 'Download and reimport appearance JSON', 'Invalid import feedback', 'Keyboard focus and desktop layouts']
}, null, 2));
