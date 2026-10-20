// Authoring only: node tools/art-preview/export-avatar-front-v02.cjs
// Requires pngjs 7.0.0. Browser/runtime checks do not need this dependency.
'use strict';
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const { PNG } = require('pngjs');
const root = path.resolve(__dirname, '../..');
const manifestPath = path.join(root, 'art/exports/avatars/avatar-head-layers-a-v02.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
function verifiedPng(relative, expected) {
  const bytes = fs.readFileSync(path.join(root, relative));
  if (digest(bytes) !== expected) throw new Error('Cambió la fuente: ' + relative);
  return PNG.sync.read(bytes);
}
function columnPixels(pixels, width, column) {
  const result = Buffer.alloc(32 * 48 * 4);
  for (let y = 0; y < 48; y++) pixels.copy(result, y * 32 * 4, (y * width + column * 32) * 4, (y * width + column * 32 + 32) * 4);
  return result;
}
const previous = verifiedPng(manifest.revision.previousHairExport, manifest.revision.previousHairPngSha256);
const view = manifest.views.find(view => view.id === 'front'), override = view.hairSourceOverride;
const source = verifiedPng(override.path, override.sha256), s = view.hairSource, d = view.hairDestination;
if (previous.width !== 128 || previous.height !== 48 || source.width !== override.size[0] || source.height !== override.size[1]) throw new Error('Dimensiones fuera del contrato.');
if (s.x < 0 || s.y < 0 || s.x + s.width > source.width || s.y + s.height > source.height || d.y + d.height > 20 || d.x < 0 || d.x + d.width > 32) throw new Error('Recorte fuera del contrato.');
const pixels = Buffer.from(previous.data);
for (let y = 0; y < 48; y++) pixels.fill(0, y * 128 * 4, (y * 128 + 32) * 4);
for (let y = 0; y < d.height; y++) for (let x = 0; x < d.width; x++) {
  const sx = s.x + Math.min(s.width - 1, Math.floor((x + 0.5) * s.width / d.width));
  const sy = s.y + Math.min(s.height - 1, Math.floor((y + 0.5) * s.height / d.height));
  const from = (sy * source.width + sx) * 4, to = ((d.y + y) * 128 + d.x + x) * 4;
  source.data.copy(pixels, to, from, from + 4);
}
manifest.revision.baselineViewRgbaHashes = {};
for (const view of manifest.views) {
  const before = columnPixels(previous.data, 128, view.column), after = columnPixels(pixels, 128, view.column);
  manifest.revision.baselineViewRgbaHashes[view.id] = digest(before);
  if (view.id !== 'front' && !before.equals(after)) throw new Error('Se modificó una vista protegida: ' + view.id);
  if (view.id === 'front' && before.equals(after)) throw new Error('El frente no cambió.');
}
const bytes = PNG.sync.write({ width: 128, height: 48, data: pixels }, { colorType: 6, inputColorType: 6 });
if (!PNG.sync.read(bytes).data.equals(pixels)) throw new Error('El PNG alteró los bytes RGBA.');
fs.writeFileSync(path.join(root, manifest.exports.hairA), bytes);
manifest.exportHashes.hair = digest(bytes);
manifest.exportTool = { name: 'pngjs', version: require('pngjs/package.json').version, sampling: 'nearest neighbor at pixel centers', smoothing: false, previousColumnsReusedExactly: true };
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log('Exportado A v02: cambia el frente; perfiles y espalda idénticos.');
