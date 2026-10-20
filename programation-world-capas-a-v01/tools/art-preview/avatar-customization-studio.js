(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const labels = { front: 'Frente', left: 'Izquierda', right: 'Derecha', back: 'Espalda' };
  const walkCore = window.AvatarWalkCore, core = window.AvatarAppearanceCore;
  const data = window.AVATAR_APPEARANCE_DATA, walk = window.AVATAR_WALK_DATA.walk;
  const catalog = data.catalog, cache = new Map(), cards = new Map(), options = new Map();
  const createCanvas = (width, height) => Object.assign(document.createElement('canvas'), { width, height });
  let appearance = core.validateAppearance(catalog.defaults, catalog), direction = 'front';
  let walking = false, manualFrame = null, elapsed = 0, lastTime = null, ready = false, importRequest = 0;
  const fps = walk.playback.defaultFps;
  const pixels = core.decodeSource(data.source, value => window.atob(value));
  function getFrames(jacketId) {
    if (!cache.has(jacketId)) {
      const selected = { schemaVersion: 1, avatarId: catalog.avatarId, jacketId };
      const atlas = createCanvas(data.source.width, data.source.height), ctx = atlas.getContext('2d');
      const rgba = ctx.createImageData(atlas.width, atlas.height);
      rgba.data.set(core.recolorAtlas(pixels, atlas.width, atlas.height, catalog, selected));
      ctx.putImageData(rgba, 0, 0);
      cache.set(jacketId, walkCore.framesFromAtlas(walk, atlas, createCanvas));
    }
    return cache.get(jacketId);
  }
  function draw(canvas, frame) {
    const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false; ctx.drawImage(frame, 0, 0);
  }
  function makeStrip() {
    $('strip').replaceChildren();
    for (let index = -1; index < 4; index++) {
      const figure = document.createElement('figure'), canvas = createCanvas(32, 48), caption = document.createElement('figcaption');
      canvas.className = 'checker'; caption.textContent = index < 0 ? 'Reposo' : 'Marcha ' + (index + 1);
      canvas.setAttribute('aria-label', labels[direction] + ': ' + caption.textContent);
      draw(canvas, walkCore.getFrame(getFrames(appearance.jacketId), walk, direction, index >= 0, Math.max(0, index)));
      figure.append(canvas, caption); $('strip').append(figure);
    }
  }
  function render() {
    if (!ready) return;
    const index = manualFrame === null ? walkCore.frameIndex(elapsed, fps, 4) : manualFrame;
    const showWalk = walking || manualFrame !== null, frames = getFrames(appearance.jacketId);
    draw($('selected'), walkCore.getFrame(frames, walk, direction, showWalk, index));
    for (const [id, canvases] of cards) for (const canvas of canvases) draw(canvas, walkCore.getFrame(frames, walk, id, showWalk, index));
    for (const [id, item] of options) {
      draw(item.canvas, walkCore.getFrame(getFrames(id), walk, direction, showWalk, index));
      item.button.setAttribute('aria-pressed', String(id === appearance.jacketId));
    }
    document.querySelectorAll('[data-direction]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.direction === direction)));
    $('motion').textContent = walking ? 'Volver al reposo' : 'Ver caminando'; $('motion').setAttribute('aria-pressed', String(walking));
    $('frame-label').textContent = labels[direction] + ' · ' + (showWalk ? 'marcha ' + (index + 1) + ' de 4' + (walking ? ' · 8 cuadros/s' : ' · pausada') : 'reposo');
    $('selection-label').textContent = catalog.jackets.find(item => item.id === appearance.jacketId).label;
    window.avatarCustomizationPreviewState = { ready, appearance: { ...appearance }, direction, walking, frameIndex: showWalk ? index : null };
  }
  function select(value, message) {
    appearance = core.validateAppearance(value, catalog); $('error').hidden = true;
    makeStrip(); render(); $('status').textContent = message;
  }
  for (const view of walk.views) {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.direction = view.id; button.textContent = labels[view.id];
    button.addEventListener('click', () => { direction = view.id; makeStrip(); render(); }); $('directions').append(button);
    const card = document.createElement('article'), title = document.createElement('h3'), samples = document.createElement('div'), note = document.createElement('p');
    card.className = 'view-card'; title.textContent = labels[view.id]; samples.className = 'samples';
    const canvases = ['native', 'enlarged'].map(kind => { const canvas = createCanvas(32, 48); canvas.className = kind + ' checker'; canvas.setAttribute('aria-label', labels[view.id] + (kind === 'native' ? ' a tamaño real' : ' ampliado tres veces')); samples.append(canvas); return canvas; });
    cards.set(view.id, canvases); note.className = 'small muted'; note.textContent = '32 × 48 px · 3×'; card.append(title, samples, note); $('gallery').append(card);
  }
  for (const option of catalog.jackets) {
    const button = document.createElement('button'), canvas = createCanvas(32, 48), label = document.createElement('span'), swatch = document.createElement('span');
    button.type = 'button'; button.className = 'option'; button.setAttribute('aria-pressed', String(option.id === appearance.jacketId));
    canvas.setAttribute('aria-hidden', 'true'); label.className = 'option-label'; swatch.className = 'swatch'; swatch.style.backgroundColor = option.swatch; swatch.setAttribute('aria-hidden', 'true');
    label.append(swatch, document.createTextNode(option.label)); button.append(canvas, label);
    button.addEventListener('click', () => select({ ...appearance, jacketId: option.id }, 'Color actualizado en las cuatro direcciones. Guarda el archivo para conservar esta elección.'));
    options.set(option.id, { button, canvas }); $('options').append(button);
  }
  $('motion').addEventListener('click', () => { walking = !walking; manualFrame = null; elapsed = 0; lastTime = null; render(); });
  $('step').addEventListener('click', () => {
    const index = walking ? walkCore.frameIndex(elapsed, fps, 4) : (manualFrame === null ? -1 : manualFrame);
    walking = false; manualFrame = (index + 1) % 4; render();
  });
  $('reset').addEventListener('click', () => select(catalog.defaults, 'Restaurado el abrigo verde original.'));
  $('save').addEventListener('click', () => {
    const blob = new Blob([core.serializeAppearance(appearance, catalog)], { type: 'application/json' });
    const url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = 'programation-world-avatar.json'; document.body.append(link); link.click(); link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('status').textContent = 'Se solicitó la descarga de programation-world-avatar.json. Puedes cargarlo aquí para recuperar este color.';
  });
  $('load').addEventListener('click', () => { $('import-file').value = ''; $('import-file').click(); });
  $('import-file').addEventListener('change', async event => {
    const file = event.target.files[0]; if (!file) return;
    const request = ++importRequest;
    try {
      if (file.size > 4096) throw new Error('El archivo debe pesar como máximo 4 KB.');
      const text = await file.text(); if (request !== importRequest) return;
      select(core.parseAppearance(text, catalog), 'Apariencia recuperada del archivo local.');
    } catch (error) {
      if (request !== importRequest) return;
      $('error').hidden = false; $('error').textContent = error.message;
      $('status').textContent = 'La selección anterior se conserva. Revisa el archivo e inténtalo de nuevo.';
    }
  });
  document.addEventListener('visibilitychange', () => { lastTime = null; });
  function tick(now) {
    const delta = lastTime === null ? 0 : Math.max(0, Math.min(100, now - lastTime)); lastTime = now;
    if (walking && !document.hidden) elapsed += delta;
    if (walking) render(); requestAnimationFrame(tick);
  }
  try {
    for (const option of catalog.jackets) getFrames(option.id);
    ready = true; document.querySelectorAll('button').forEach(button => { button.disabled = false; });
    select(catalog.defaults, 'Elige un color y compruébalo en reposo o caminando.');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) $('status').textContent += ' La animación comienza detenida.';
    requestAnimationFrame(tick);
  } catch (error) { $('error').hidden = false; $('error').textContent = 'No se pudo preparar el avatar. ' + error.message; }
})();
