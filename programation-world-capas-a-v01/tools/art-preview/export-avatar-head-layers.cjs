// Optional asset-authoring export. Requires @napi-rs/canvas in Node's module
// search path; the HTML preview and built-in-only checks do not need it.
'use strict';
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const { createCanvas, loadImage } = require('@napi-rs/canvas');
const root = path.resolve(__dirname, '../..');
const manifestPath = path.join(root, 'art/exports/avatars/avatar-head-layers-a-v01.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath));
const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
(async function () {
  const sourcePath = path.join(root, manifest.source.path);
  if (digest(fs.readFileSync(sourcePath)) !== manifest.source.sha256) throw new Error('Cambió la fuente: revisar el manifiesto antes de exportar.');
  const image = await loadImage(sourcePath);
  manifest.exportHashes = {};
  for (const type of ['neutral', 'hair']) {
    const canvas = createCanvas(manifest.layerStrip.width, manifest.layerStrip.height), ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    for (const view of manifest.views) {
      const s = view[type + 'Source'], d = view[type + 'Destination'];
      ctx.drawImage(image, s.x, s.y, s.width, s.height, view.column * manifest.frame.width + d.x, d.y, d.width, d.height);
    }
    const destination = type === 'neutral' ? manifest.exports.neutral : manifest.exports.hairA;
    const bytes = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(root, destination), bytes); manifest.exportHashes[type] = digest(bytes);
  }
  manifest.exportTool = { name: '@napi-rs/canvas', version: require('@napi-rs/canvas/package.json').version, smoothing: false };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log('Exportadas dos tiras nativas de 128 × 48; las fuentes no se modificaron.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
