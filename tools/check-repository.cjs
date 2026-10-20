// node tools/check-repository.cjs — Node built-ins only.
'use strict';

function normalize(parts) {
  const output = [];
  for (const part of parts.join('/').split('/')) {
    if (!part || part === '.') continue;
    if (part === '..') {
      if (!output.length) return null;
      output.pop();
    } else output.push(part);
  }
  return output.join('/');
}

function auditFiles(files) {
  const known = new Set(files.map(file => file.path)), directories = new Set(['']);
  const errors = [];
  let jsonFiles = 0, internalLinks = 0;
  for (const file of files) {
    const parts = file.path.split('/');
    for (let n = 1; n < parts.length; n++) directories.add(parts.slice(0, n).join('/'));
  }
  for (const required of ['README.md', 'CONTRIBUTING.md', '.gitignore', '.gitattributes',
    'docs/00-project-charter.md', 'tools/art-preview/avatar-head-lab.html',
    'art/exports/avatars/avatar-base-01-walk-v01.png',
    'art/exports/avatars/avatar-head-layers-a-v01.json']) {
    if (!known.has(required)) errors.push('Falta en la raíz del proyecto: ' + required);
  }
  for (const file of files) {
    if (typeof file.text !== 'string') continue;
    if (file.path.endsWith('.json')) {
      jsonFiles++;
      try { JSON.parse(file.text); } catch (error) { errors.push(file.path + ': JSON inválido: ' + error.message); }
    }
    let refs = [];
    if (file.path.endsWith('.md')) {
      const text = file.text.replace(/```[\s\S]*?```/g, '');
      refs = [...text.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map(match => match[1]);
    } else if (file.path.endsWith('.html')) {
      refs = [...file.text.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)].map(match => match[1]);
    }
    for (const ref of refs) {
      if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(ref)) continue;
      let target;
      try { target = decodeURIComponent(ref.split(/[?#]/)[0]); }
      catch (_) { errors.push(file.path + ': URL local inválida: ' + ref); continue; }
      if (!target) continue;
      internalLinks++;
      const parent = target.startsWith('/') ? [] : file.path.split('/').slice(0, -1);
      const resolved = normalize([...parent, target]);
      if (resolved === null || (!known.has(resolved) && !directories.has(resolved))) errors.push(file.path + ' -> ' + ref);
    }
  }
  return { passed: errors.length === 0, files: files.length, jsonFiles, internalLinks, errors };
}

module.exports = { auditFiles };

if (require.main === module) {
  const fs = require('node:fs'), path = require('node:path');
  const root = path.resolve(__dirname, '..');
  const excluded = new Set(['.git', 'node_modules', '__pycache__', '.venv', 'dist', 'coverage']);
  const files = [];
  function visit(relative) {
    for (const item of fs.readdirSync(path.join(root, relative), { withFileTypes: true })) {
      const name = relative ? relative + '/' + item.name : item.name;
      if (item.isDirectory()) { if (!excluded.has(item.name)) visit(name); }
      else if (item.isFile()) files.push({ path: name,
        text: /\.(md|html|json)$/.test(name) ? fs.readFileSync(path.join(root, name), 'utf8') : undefined });
    }
  }
  visit('');
  const result = auditFiles(files);
  console.log(JSON.stringify(result, null, 2));
  if (!result.passed) process.exitCode = 1;
}
