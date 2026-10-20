// Authoring QA: requires @napi-rs/canvas 0.1.100 and pngjs 7.0.0.
'use strict';
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), assert = require('node:assert/strict');
const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { PNG } = require('pngjs');
const ac = require('./avatar-appearance-core.js'), hc = require('./avatar-head-core.js');
const root = path.resolve(__dirname, '../..'), context = { window: {} };
for (const file of ['avatar-walk-data.js', 'avatar-appearance-data.js', 'avatar-head-data.js']) vm.runInNewContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), context);
const data = context.window.AVATAR_HEAD_DATA, appearance = context.window.AVATAR_APPEARANCE_DATA, walk = context.window.AVATAR_WALK_DATA.walk;
const decode = value => Buffer.from(value, 'base64').toString('latin1');
const source = ac.decodeSource(appearance.source, decode), neutral = ac.decodeSource(data.layers.neutral, decode), hair = ac.decodeSource(data.layers.hair, decode);
const oldManifest = JSON.parse(fs.readFileSync(path.join(root, data.manifest.revision.previousManifest), 'utf8'));
const oldHair = PNG.sync.read(fs.readFileSync(path.join(root, data.manifest.revision.previousHairExport))).data;
const entries = walk.nativeExport.frames.filter(entry => entry.direction === 'front');
const frames = new Map(); let renderedFrames = 0;
for (const option of appearance.catalog.jackets) {
  const colored = ac.recolorAtlas(source, 160, 192, appearance.catalog, { ...appearance.catalog.defaults, jacketId: option.id });
  for (const [version, layer, manifest] of [['v01', oldHair, oldManifest], ['v02', hair, data.manifest]]) {
    const atlas = hc.composeAtlas(colored, neutral, layer, manifest, walk.nativeExport.frames, { style: 'a' });
    for (const entry of entries) {
      const rgba = hc.region(atlas, 160, entry.frame), before = hc.region(colored, 160, entry.frame);
      const canvas = createCanvas(32, 48), ctx = canvas.getContext('2d'), image = ctx.createImageData(32, 48);
      image.data.set(rgba); ctx.putImageData(image, 0, 0);
      const actual = ctx.getImageData(0, 0, 32, 48).data;
      // Compare both sides through the same renderer: premultiplied alpha can
      // round RGB on translucent pixels during put/getImageData.
      const baseline = createCanvas(32, 48).getContext('2d'), baselineImage = baseline.createImageData(32, 48);
      baselineImage.data.set(before); baseline.putImageData(baselineImage, 0, 0);
      const expected = baseline.getImageData(0, 0, 32, 48).data;
      for (const rect of manifest.views[0].eyePatches) assert.deepEqual(Buffer.from(hc.region(actual, 32, rect)), Buffer.from(hc.region(expected, 32, rect)));
      assert.deepEqual(Buffer.from(actual.subarray(22 * 32 * 4)), Buffer.from(expected.subarray(22 * 32 * 4)));
      frames.set(version + ':' + option.id + ':' + entry.id, canvas); renderedFrames++;
    }
  }
}
function board(width, height, title, subtitle) {
  const canvas = createCanvas(width, height), ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fffaf1'; ctx.fillRect(0, 0, width, height); ctx.fillStyle = '#24342b';
  ctx.font = 'bold 30px sans-serif'; ctx.fillText(title, 36, 46); ctx.font = '16px sans-serif'; ctx.fillStyle = '#53615a'; ctx.fillText(subtitle, 36, 77);
  ctx.imageSmoothingEnabled = false; return { canvas, ctx };
}
const get = (version, color, entry = entries[0]) => frames.get(version + ':' + color + ':' + entry.id);
(async () => {
  const { canvas, ctx } = board(960, 830, 'A · Frente con más definición', 'Mismo cuadro de 32 × 48 · ojos y cuerpo conservados');
  for (const [label, version, x] of [['Anterior · v01', 'v01', 55], ['Revisión · v02', 'v02', 365]]) {
    ctx.fillStyle = '#24342b'; ctx.font = 'bold 22px sans-serif'; ctx.fillText(label, x, 123);
    ctx.drawImage(get(version, 'green'), x, 143, 224, 336); ctx.drawImage(get(version, 'green'), x + 96, 496);
  }
  const reference = await loadImage(path.join(root, 'art/references/reviews/hair-a-front-reference-v02.png'));
  ctx.font = 'bold 22px sans-serif'; ctx.fillText('Referencia', 695, 123);
  ctx.drawImage(reference, 0, 20, 130, 232, 692, 143, 184, 328);
  ctx.font = '15px sans-serif'; ctx.fillStyle = '#53615a'; ctx.fillText('Concepto aportado', 695, 505);
  ctx.fillStyle = '#e6dbc5'; ctx.fillRect(36, 565, 888, 1); ctx.fillStyle = '#24342b'; ctx.font = 'bold 20px sans-serif'; ctx.fillText('La revisión en los tres colores aprobados', 36, 601);
  for (const [i, option] of appearance.catalog.jackets.entries()) {
    const x = 74 + i * 294; ctx.drawImage(get('v02', option.id), x, 625, 96, 144);
    ctx.font = '16px sans-serif'; ctx.fillText(option.label, x + 112, 686);
  }
  ctx.font = '13px sans-serif'; ctx.fillStyle = '#53615a'; ctx.fillText('Renderizado de referencia · revisión visual pendiente · perfiles y espalda conservan sus píxeles', 36, 810);
  fs.writeFileSync(path.join(root, 'docs/qa/avatar-front-v02-comparison.png'), canvas.toBuffer('image/png'));
  const sheet = board(920, 660, 'A v02 · Reposo y marcha', 'Frente · tres colores · cinco poses por fila');
  for (const [row, option] of appearance.catalog.jackets.entries()) {
    const y = 115 + row * 172; sheet.ctx.font = 'bold 18px sans-serif'; sheet.ctx.fillStyle = '#24342b'; sheet.ctx.fillText(option.label, 24, y + 78);
    for (const [column, entry] of entries.entries()) {
      const x = 180 + column * 145; sheet.ctx.drawImage(get('v02', option.id, entry), x, y, 96, 144);
      sheet.ctx.font = '13px sans-serif'; sheet.ctx.fillText(entry.state === 'idle' ? 'Reposo' : 'Pose ' + (entry.poseIndex + 1), x, y + 160);
    }
  }
  fs.writeFileSync(path.join(root, 'docs/qa/avatar-front-v02-walk.png'), sheet.canvas.toBuffer('image/png'));
  const checks = { passed: true, date: '2026-10-20', renderedFrames, scope: 'Front A v01/v02, three colors, idle plus four walking poses', comparison: 'Both original body and composed frame use the same Canvas put/getImageData round-trip', eyePatchesEqualAfterCanvas: true, bodyRows22Through47EqualAfterCanvas: true, browserExecuted: false, referenceRenderer: '@napi-rs/canvas 0.1.100', nativePngCodec: 'pngjs 7.0.0' };
  fs.writeFileSync(path.join(root, 'docs/qa/avatar-front-v02-render-checks.json'), JSON.stringify(checks, null, 2) + '\n');
  console.log(JSON.stringify(checks, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
