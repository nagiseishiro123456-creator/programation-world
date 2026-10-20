(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AvatarWalkCore = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Clip the source explicitly so file-based browsers and the reference renderer
  // agree when foot alignment places a transparent margin outside the source.
  function drawRegion(ctx, image, source, target) {
    const sx = Math.max(0, source.x), sy = Math.max(0, source.y);
    const ex = Math.min(image.width, source.x + source.width);
    const ey = Math.min(image.height, source.y + source.height);
    if (ex <= sx || ey <= sy) return;
    const scaleX = target.width / source.width, scaleY = target.height / source.height;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(image, sx, sy, ex - sx, ey - sy,
      target.x + (sx - source.x) * scaleX, target.y + (sy - source.y) * scaleY,
      (ex - sx) * scaleX, (ey - sy) * scaleY);
  }

  function drawIdle(ctx, asset, images, direction) {
    const view = asset.views.find(item => item.id === direction);
    if (!view) throw new Error('Dirección desconocida: ' + direction);
    const source = view.sourceOverride || asset.source;
    const image = images.get(source.path);
    if (!image) throw new Error('Falta la fuente: ' + source.path);
    drawRegion(ctx, image, view.sourceRect, { x: 0, y: 0, width: asset.frame.width, height: asset.frame.height });
    if (view.nativeEyeSampling) for (const patch of view.nativeEyeSampling.patches) {
      const d = patch.destinationRect;
      ctx.clearRect(d.x, d.y, d.width, d.height);
      drawRegion(ctx, image, patch.sourceRect, d);
    }
  }

  function buildFrames(data, images, createCanvas) {
    const idle = new Map(), walk = new Map();
    const { width, height } = data.walk.frame;
    const upperBand = data.walk.composition.approvedUpperBandHeight;
    const image = images.get(data.walk.source.path);
    if (!image) throw new Error('Falta la lámina de marcha.');
    for (const view of data.walk.views) {
      const still = createCanvas(width, height);
      drawIdle(still.getContext('2d'), data.idle, images, view.id);
      idle.set(view.id, still);
      walk.set(view.id, view.poses.map(pose => {
        const frame = createCanvas(width, height), ctx = frame.getContext('2d');
        drawRegion(ctx, image, pose.sourceRect, { x: 0, y: 0, width, height });
        ctx.clearRect(0, 0, width, upperBand);
        ctx.drawImage(still, 0, 0, width, upperBand, 0, 0, width, upperBand);
        return frame;
      }));
    }
    return { idle, walk };
  }

  function frameIndex(elapsedMs, fps, count) {
    if (!Number.isFinite(fps) || fps <= 0 || !Number.isInteger(count) || count < 1) throw new Error('Parámetros de reproducción inválidos.');
    return Math.floor(Math.max(0, elapsedMs) * fps / 1000 + 1e-9) % count;
  }

  function framesFromAtlas(manifest, image, createCanvas) {
    const idle = new Map(), walk = new Map();
    for (const view of manifest.views) walk.set(view.id, new Array(4));
    for (const entry of manifest.nativeExport.frames) {
      const canvas = createCanvas(manifest.frame.width, manifest.frame.height);
      drawRegion(canvas.getContext('2d'), image, entry.frame, { x: 0, y: 0, width: manifest.frame.width, height: manifest.frame.height });
      if (entry.state === 'idle') idle.set(entry.direction, canvas);
      else walk.get(entry.direction)[entry.poseIndex] = canvas;
    }
    return { idle, walk };
  }

  function getFrame(frames, manifest, direction, walking, index) {
    if (!walking) return frames.idle.get(direction);
    const view = manifest.views.find(item => item.id === direction);
    return frames.walk.get(direction)[view.sequence[index % view.sequence.length]];
  }

  function movement(keys) {
    const has = (...names) => names.some(name => keys.has(name));
    const dx = Number(has('ArrowRight', 'd')) - Number(has('ArrowLeft', 'a'));
    const dy = Number(has('ArrowDown', 's')) - Number(has('ArrowUp', 'w'));
    // The art contract has four directions. Horizontal input takes priority
    // when two axes are pressed; diagonal movement is not part of this test.
    if (dx) return { dx, dy: 0, direction: dx < 0 ? 'left' : 'right' };
    if (dy) return { dx: 0, dy, direction: dy < 0 ? 'back' : 'front' };
    return { dx: 0, dy: 0, direction: null };
  }

  function movePoint(point, keys, deltaMs, speed, bounds) {
    const input = movement(keys);
    const seconds = Math.max(0, Math.min(250, deltaMs)) / 1000;
    const x = Math.max(bounds.minX, Math.min(bounds.maxX, point.x + input.dx * speed * seconds));
    const y = Math.max(bounds.minY, Math.min(bounds.maxY, point.y + input.dy * speed * seconds));
    return { x, y, direction: input.direction, moving: x !== point.x || y !== point.y };
  }

  return { drawRegion, drawIdle, buildFrames, framesFromAtlas, frameIndex, getFrame, movement, movePoint };
});
