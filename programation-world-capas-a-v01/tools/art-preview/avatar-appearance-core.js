(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AvatarAppearanceCore = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function validateAppearance(value, catalog) {
    const expectedKeys = ['avatarId', 'jacketId', 'schemaVersion'];
    if (!value || typeof value !== 'object' || Array.isArray(value) ||
        Object.keys(value).sort().join('|') !== expectedKeys.join('|')) {
      throw new Error('El archivo debe contener solo schemaVersion, avatarId y jacketId.');
    }
    if (value.schemaVersion !== 1 || value.avatarId !== catalog.avatarId ||
        !catalog.jackets.some(option => option.id === value.jacketId)) {
      throw new Error('Esta apariencia no pertenece al catálogo de prueba v01.');
    }
    return { schemaVersion: 1, avatarId: value.avatarId, jacketId: value.jacketId };
  }

  function parseAppearance(text, catalog) {
    if (typeof text !== 'string' || text.length > 4096) throw new Error('El archivo de apariencia debe ser un JSON pequeño, de hasta 4 KB.');
    let value;
    try { value = JSON.parse(text); } catch (_) { throw new Error('El archivo no contiene un JSON válido.'); }
    return validateAppearance(value, catalog);
  }

  function serializeAppearance(value, catalog) {
    return JSON.stringify(validateAppearance(value, catalog), null, 2) + '\n';
  }

  // RGBA bytes are bundled so the preview can open with file:// without reading
  // pixels from a local <img>, which can taint a browser canvas.
  function decodeSource(source, decodeBase64) {
    const binary = decodeBase64(source.pixelsBase64);
    if (binary.length !== source.width * source.height * 4) throw new Error('Los datos del atlas están incompletos.');
    return Uint8ClampedArray.from(binary, character => character.charCodeAt(0));
  }

  function isJacketPixel(r, g, b, a, localY, mask) {
    return a > 0 && localY >= mask.minLocalY && localY <= mask.maxLocalY &&
      g - r >= mask.minGreenOverRed && g - b >= mask.minGreenOverBlue &&
      (g - Math.min(r, b)) / Math.max(1, g) >= mask.minSaturation;
  }

  function rgbWithHue(r, g, b, hueDegrees) {
    // Preserve HSV value and saturation, replacing only the hue. The original
    // jacket's highlights and shadows stay distinct; alpha is handled separately.
    const maximum = Math.max(r, g, b), minimum = Math.min(r, g, b);
    const chroma = maximum - minimum, hue = hueDegrees / 60;
    const middle = chroma * (1 - Math.abs(hue % 2 - 1));
    const sectors = [[chroma, middle, 0], [middle, chroma, 0], [0, chroma, middle],
      [0, middle, chroma], [middle, 0, chroma], [chroma, 0, middle]];
    return sectors[Math.floor(hue) % 6].map(channel => Math.round(channel + minimum));
  }

  function recolorAtlas(source, width, height, catalog, appearance) {
    const clean = validateAppearance(appearance, catalog);
    if (width !== catalog.atlas.width || height !== catalog.atlas.height || source.length !== width * height * 4) {
      throw new Error('El atlas no cumple el contrato del avatar.');
    }
    const option = catalog.jackets.find(item => item.id === clean.jacketId);
    const pixels = new Uint8ClampedArray(source);
    if (option.hueDegrees === null) return pixels;
    for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4;
      const [r, g, b, a] = source.subarray(offset, offset + 4);
      if (!isJacketPixel(r, g, b, a, y % catalog.atlas.frameHeight, catalog.mask)) continue;
      pixels.set(rgbWithHue(r, g, b, option.hueDegrees), offset);
    }
    return pixels;
  }

  return { validateAppearance, parseAppearance, serializeAppearance, decodeSource, isJacketPixel, recolorAtlas };
});
