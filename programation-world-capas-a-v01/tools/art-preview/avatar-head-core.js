(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AvatarHeadCore = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function region(source, width, rect) {
    const result = new Uint8ClampedArray(rect.width * rect.height * 4);
    for (let y = 0; y < rect.height; y++) {
      const start = ((rect.y + y) * width + rect.x) * 4;
      result.set(source.subarray(start, start + rect.width * 4), y * rect.width * 4);
    }
    return result;
  }

  function replaceRegion(target, source, rect, width) {
    for (let y = rect.y; y < rect.y + rect.height; y++) for (let x = rect.x; x < rect.x + rect.width; x++) {
      const offset = (y * width + x) * 4;
      target.set(source.subarray(offset, offset + 4), offset);
    }
  }

  function over(target, source) {
    for (let i = 0; i < target.length; i += 4) {
      const alpha = source[i + 3] / 255;
      if (!alpha) continue;
      const destinationAlpha = target[i + 3] / 255;
      const outputAlpha = alpha + destinationAlpha * (1 - alpha);
      for (let channel = 0; channel < 3; channel++) target[i + channel] = Math.round((source[i + channel] * alpha + target[i + channel] * destinationAlpha * (1 - alpha)) / outputAlpha);
      target[i + 3] = Math.round(outputAlpha * 255);
    }
  }

  function composeFrame(original, neutral, hair, view, manifest, options) {
    if (original.length !== manifest.frame.width * manifest.frame.height * 4 || neutral.length !== original.length || hair.length !== original.length) throw new Error('Las capas no cumplen el cuadro 32 × 48.');
    const result = new Uint8ClampedArray(original);
    if (options.style === 'original') return result;
    if (options.style !== 'a') throw new Error('Este laboratorio admite la base y el primer peinado A.');
    result.fill(0, 0, manifest.replaceAboveY * manifest.frame.width * 4);
    if (options.showHead !== false) {
      over(result, neutral);
      for (const rect of view.facePatches) replaceRegion(result, original, rect, manifest.frame.width);
    }
    if (options.showHair !== false) over(result, hair);
    // These rectangles are replaced, not alpha-blended: approved eye RGB and
    // alpha must remain exactly equal to the existing native frame.
    if (options.showHead !== false) for (const rect of view.eyePatches) replaceRegion(result, original, rect, manifest.frame.width);
    return result;
  }

  function composeAtlas(original, headStrip, hairStrip, manifest, entries, options) {
    const result = new Uint8ClampedArray(original.length);
    for (const entry of entries) {
      const view = manifest.views.find(item => item.id === entry.direction);
      if (!view) throw new Error('Dirección sin contrato de capas.');
      const frame = region(original, manifest.atlas.width, entry.frame);
      const rect = { x: view.column * manifest.frame.width, y: 0, width: manifest.frame.width, height: manifest.frame.height };
      const composed = composeFrame(frame, region(headStrip, manifest.layerStrip.width, rect), region(hairStrip, manifest.layerStrip.width, rect), view, manifest, options);
      for (let y = 0; y < manifest.frame.height; y++) {
        result.set(composed.subarray(y * manifest.frame.width * 4, (y + 1) * manifest.frame.width * 4), ((entry.frame.y + y) * manifest.atlas.width + entry.frame.x) * 4);
      }
    }
    return result;
  }

  return { region, composeFrame, composeAtlas };
});
