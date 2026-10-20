(function () {
  'use strict';
  const data = window.AVATAR_WALK_DATA, core = window.AvatarWalkCore;
  const labels = { front: 'Frente', left: 'Izquierda', right: 'Derecha', back: 'Espalda' };
  const $ = id => document.getElementById(id);
  const images = new Map(), keys = new Set(), cards = new Map();
  let frames, ready = false, direction = 'front', mode = 'walk', paused = false;
  let elapsed = 0, lastTime = null, fps = data.walk.playback.defaultFps;
  let point = { x: 160, y: 144 }, moving = false;
  const createCanvas = (width, height) => Object.assign(document.createElement('canvas'), { width, height });
  const imagePaths = new Set([data.walk.nativeExport.path]);
  function fail(error) { $('error').hidden = false; $('error').textContent = 'No se pudo abrir la prueba. Conserva las rutas del ZIP dentro de programation-world. ' + error.message; $('status').textContent = 'Revisa que estén el atlas exportado y los scripts del visor.'; }
  function draw(canvas, image) { const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.imageSmoothingEnabled = false; ctx.drawImage(image, 0, 0); }
  function makeStrip() {
    $('strip').replaceChildren();
    for (let index = -1; index < 4; index++) {
      const figure = document.createElement('figure'), canvas = createCanvas(32, 48), caption = document.createElement('figcaption');
      canvas.className = 'checker'; caption.textContent = index < 0 ? 'Reposo v04' : 'Marcha ' + (index + 1);
      canvas.setAttribute('aria-label', labels[direction] + ': ' + caption.textContent);
      draw(canvas, core.getFrame(frames, data.walk, direction, index >= 0, Math.max(0, index)));
      figure.append(canvas, caption); $('strip').append(figure);
    }
  }
  function render() {
    if (!ready) return;
    const index = core.frameIndex(elapsed, fps, 4), walking = mode === 'walk' || moving;
    const frame = core.getFrame(frames, data.walk, direction, walking, index);
    draw($('selected'), frame);
    const zoom = Number($('zoom').value); $('selected').style.width = 32 * zoom + 'px'; $('selected').style.height = 48 * zoom + 'px';
    const ctx = $('stage').getContext('2d'); ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#eef1e8'; ctx.fillRect(0, 0, 320, 192); ctx.strokeStyle = '#c9d0c1'; ctx.lineWidth = 1;
    for (let x = 0; x <= 320; x += 32) { ctx.beginPath(); ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, 192); ctx.stroke(); }
    for (let y = 0; y <= 192; y += 32) { ctx.beginPath(); ctx.moveTo(0, y + .5); ctx.lineTo(320, y + .5); ctx.stroke(); }
    const ax = Math.round(point.x), ay = Math.round(point.y); ctx.drawImage(frame, ax - 16, ay - 46);
    ctx.strokeStyle = '#9c3d3d'; ctx.beginPath(); ctx.moveTo(ax - 4, ay + .5); ctx.lineTo(ax + 5, ay + .5); ctx.moveTo(ax + .5, ay - 3); ctx.lineTo(ax + .5, ay + 4); ctx.stroke();
    for (const [id, canvases] of cards) for (const canvas of canvases) draw(canvas, core.getFrame(frames, data.walk, id, true, index));
    document.querySelectorAll('[data-direction]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.direction === direction)));
    document.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
    $('play').textContent = paused ? 'Reanudar' : 'Pausar'; $('play').setAttribute('aria-pressed', String(paused));
    $('frame-label').textContent = labels[direction] + ' · ' + (walking ? 'marcha ' + (index + 1) + ' de 4' : 'reposo aprobado') + ' · ' + fps + ' cuadros/s' + (paused ? ' · pausado' : '');
    $('status').textContent = $('movement').checked ? 'Teclado activo · haz clic en la pista para mover el avatar' : 'Fuentes cargadas · marcha aprobada visualmente';
    window.avatarWalkPreviewState = { ready: true, direction, walking, paused, frameIndex: walking ? index : null, fps, position: { x: ax, y: ay }, logicalFrame: [32, 48] };
  }
  function step(amount) { paused = true; mode = 'walk'; moving = false; keys.clear(); const index = core.frameIndex(elapsed, fps, 4); elapsed = ((index + amount + 4) % 4) * 1000 / fps; render(); }
  for (const view of data.walk.views) {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.direction = view.id; button.textContent = labels[view.id]; button.disabled = true;
    button.addEventListener('click', () => { direction = view.id; makeStrip(); render(); }); $('directions').append(button);
    const card = document.createElement('article'), title = document.createElement('h3'), samples = document.createElement('div'), note = document.createElement('p');
    card.className = 'card'; title.textContent = labels[view.id]; samples.className = 'samples';
    const canvases = ['native', 'enlarged'].map(kind => { const canvas = createCanvas(32, 48); canvas.className = kind + ' checker'; canvas.setAttribute('aria-label', 'Marcha ' + labels[view.id] + (kind === 'native' ? ' a tamaño real' : ' ampliada tres veces')); samples.append(canvas); return canvas; });
    cards.set(view.id, canvases); note.className = 'small muted'; note.textContent = '32 × 48 px · ampliación 3×'; card.append(title, samples, note); $('gallery').append(card);
  }
  $('play').addEventListener('click', () => { paused = !paused; keys.clear(); moving = false; render(); });
  $('previous').addEventListener('click', () => step(-1)); $('next').addEventListener('click', () => step(1));
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => { mode = button.dataset.mode; elapsed = 0; moving = false; keys.clear(); render(); }));
  $('fps').addEventListener('change', () => { const index = core.frameIndex(elapsed, fps, 4); fps = Number($('fps').value); elapsed = index * 1000 / fps; render(); });
  $('zoom').addEventListener('change', render);
  $('movement').addEventListener('change', () => { mode = 'idle'; keys.clear(); moving = false; elapsed = 0; if ($('movement').checked) $('stage').focus(); render(); });
  $('reset').addEventListener('click', () => { point = { x: 160, y: 144 }; keys.clear(); moving = false; render(); });
  const normalize = key => key.length === 1 ? key.toLowerCase() : key;
  const controlKeys = new Set(['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
  $('stage').addEventListener('keydown', event => { const key = normalize(event.key); if (!ready || !$('movement').checked || !controlKeys.has(key)) return; event.preventDefault(); keys.add(key); });
  $('stage').addEventListener('keyup', event => { const key = normalize(event.key); if (!controlKeys.has(key)) return; event.preventDefault(); keys.delete(key); });
  $('stage').addEventListener('blur', () => { keys.clear(); moving = false; });
  document.addEventListener('visibilitychange', () => { lastTime = null; keys.clear(); moving = false; });
  function tick(now) {
    const delta = lastTime === null ? 0 : Math.max(0, Math.min(100, now - lastTime)); lastTime = now;
    if (!paused) {
      let nextMoving = false;
      if ($('movement').checked) {
        const next = core.movePoint(point, keys, delta, 64, { minX: 16, maxX: 304, minY: 46, maxY: 190 });
        point = { x: next.x, y: next.y }; nextMoving = next.moving;
        if (next.direction && next.direction !== direction) { direction = next.direction; makeStrip(); }
      }
      moving = nextMoving;
      if (mode === 'walk' || moving) elapsed += delta; else elapsed = 0;
    }
    render(); requestAnimationFrame(tick);
  }
  Promise.all([...imagePaths].map(path => new Promise((resolve, reject) => {
    const image = new Image(); image.onload = () => { images.set(path, image); resolve(); }; image.onerror = () => reject(new Error('No se encontró ' + path)); image.src = '../../' + path;
  }))).then(() => {
    frames = core.framesFromAtlas(data.walk, images.get(data.walk.nativeExport.path), createCanvas); ready = true;
    document.querySelectorAll('button,select,input').forEach(element => { element.disabled = false; });
    $('source').src = '../../' + data.walk.source.path; makeStrip(); render(); requestAnimationFrame(tick);
  }).catch(fail);
})();
