(function () {
  'use strict';
  const $ = id => document.getElementById(id), data = window.AVATAR_HEAD_DATA;
  const manifest = data.manifest, appearanceData = window.AVATAR_APPEARANCE_DATA, catalog = appearanceData.catalog;
  const walk = window.AVATAR_WALK_DATA.walk, wc = window.AvatarWalkCore, ac = window.AvatarAppearanceCore, hc = window.AvatarHeadCore;
  const labels = { front: 'Frente', left: 'Izquierda', right: 'Derecha', back: 'Espalda' };
  const createCanvas = (width, height) => Object.assign(document.createElement('canvas'), { width, height });
  const source = ac.decodeSource(appearanceData.source, window.atob), neutral = ac.decodeSource(data.layers.neutral, window.atob), hair = ac.decodeSource(data.layers.hair, window.atob);
  const originals = new Map(), composed = new Map(), cards = new Map();
  let jacketId = 'green', direction = 'front', walking = false, manualFrame = null, elapsed = 0, previousTime = null, ready = false;
  function framesFromPixels(pixels) {
    const atlas = createCanvas(160, 192), ctx = atlas.getContext('2d'), rgba = ctx.createImageData(160, 192);
    rgba.data.set(pixels); ctx.putImageData(rgba, 0, 0); return wc.framesFromAtlas(walk, atlas, createCanvas);
  }
  function frames() {
    if (!originals.has(jacketId)) {
      const pixels = ac.recolorAtlas(source, 160, 192, catalog, { ...catalog.defaults, jacketId });
      originals.set(jacketId, { pixels, frames: framesFromPixels(pixels) });
    }
    const key = jacketId + ':' + $('head-layer').checked + ':' + $('hair-layer').checked;
    if (!composed.has(key)) composed.set(key, framesFromPixels(hc.composeAtlas(originals.get(jacketId).pixels, neutral, hair, manifest, walk.nativeExport.frames, { style: 'a', showHead: $('head-layer').checked, showHair: $('hair-layer').checked })));
    return { original: originals.get(jacketId).frames, layered: composed.get(key) };
  }
  function draw(canvas, image) { const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.imageSmoothingEnabled = false; ctx.drawImage(image, 0, 0); }
  function makeStrip() {
    if (!ready) return; const set = frames().layered; $('strip').replaceChildren();
    for (let index = -1; index < 4; index++) {
      const figure = document.createElement('figure'), canvas = createCanvas(32, 48), caption = document.createElement('figcaption');
      canvas.className = 'checker'; caption.textContent = index < 0 ? 'Reposo' : 'Marcha ' + (index + 1);
      canvas.setAttribute('aria-label', labels[direction] + ': ' + caption.textContent);
      draw(canvas, wc.getFrame(set, walk, direction, index >= 0, Math.max(0, index))); figure.append(canvas, caption); $('strip').append(figure);
    }
  }
  function render() {
    if (!ready) return;
    const set = frames(), index = manualFrame === null ? wc.frameIndex(elapsed, 8, 4) : manualFrame, showWalk = walking || manualFrame !== null;
    draw($('original'), wc.getFrame(set.original, walk, direction, showWalk, index)); draw($('composed'), wc.getFrame(set.layered, walk, direction, showWalk, index));
    for (const [id, canvases] of cards) for (const canvas of canvases) draw(canvas, wc.getFrame(set.layered, walk, id, showWalk, index));
    document.querySelectorAll('[data-direction]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.direction === direction)));
    document.querySelectorAll('[data-jacket]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.jacket === jacketId)));
    $('motion').textContent = walking ? 'Volver al reposo' : 'Ver caminando'; $('motion').setAttribute('aria-pressed', String(walking));
    $('frame-label').textContent = labels[direction] + ' · ' + (showWalk ? 'marcha ' + (index + 1) + ' de 4' + (walking ? ' · 8 cuadros/s' : ' · pausada') : 'reposo');
    $('status').textContent = $('head-layer').checked && $('hair-layer').checked ? 'Composición completa de A' : 'Inspección de capas · activa ambas para revisar el resultado completo';
    window.avatarHeadLabState = { ready, jacketId, direction, walking, frameIndex: showWalk ? index : null, showHead: $('head-layer').checked, showHair: $('hair-layer').checked };
  }
  for (const view of manifest.views) {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.direction = view.id; button.textContent = labels[view.id];
    button.addEventListener('click', () => { direction = view.id; makeStrip(); render(); }); $('directions').append(button);
    const card = document.createElement('article'), title = document.createElement('h3'), samples = document.createElement('div'), note = document.createElement('p');
    card.className = 'card'; title.textContent = labels[view.id]; samples.className = 'samples';
    const canvases = ['native', 'enlarged'].map(kind => { const canvas = createCanvas(32, 48); canvas.className = kind + ' checker'; canvas.setAttribute('aria-label', 'A: ' + labels[view.id] + (kind === 'native' ? ' a tamaño real' : ' ampliado tres veces')); samples.append(canvas); return canvas; });
    cards.set(view.id, canvases); note.className = 'small muted'; note.textContent = '32 × 48 px · 3×'; card.append(title, samples, note); $('gallery').append(card);
  }
  for (const option of catalog.jackets) {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.jacket = option.id; button.textContent = option.label;
    button.addEventListener('click', () => { jacketId = option.id; makeStrip(); render(); }); $('colors').append(button);
  }
  $('motion').addEventListener('click', () => { walking = !walking; manualFrame = null; elapsed = 0; previousTime = null; render(); });
  $('step').addEventListener('click', () => { const index = walking ? wc.frameIndex(elapsed, 8, 4) : (manualFrame === null ? -1 : manualFrame); walking = false; manualFrame = (index + 1) % 4; render(); });
  for (const id of ['head-layer', 'hair-layer']) $(id).addEventListener('change', () => { makeStrip(); render(); });
  $('restore').addEventListener('click', () => { $('head-layer').checked = true; $('hair-layer').checked = true; makeStrip(); render(); });
  document.addEventListener('visibilitychange', () => { previousTime = null; });
  function tick(now) { const delta = previousTime === null ? 0 : Math.max(0, Math.min(100, now - previousTime)); previousTime = now; if (walking && !document.hidden) { elapsed += delta; render(); } requestAnimationFrame(tick); }
  try {
    frames(); ready = true; document.querySelectorAll('button,input').forEach(element => { element.disabled = false; });
    makeStrip(); render(); requestAnimationFrame(tick);
  } catch (error) { $('error').hidden = false; $('error').textContent = 'No se pudo componer el avatar. ' + error.message; }
})();
