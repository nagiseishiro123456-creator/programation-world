"""Bundle native head layers for file:// preview. Python 3 standard library only."""
import argparse
import base64
import hashlib
import json
import runpy
from pathlib import Path

DIRECTORY = Path(__file__).resolve().parent
ROOT = DIRECTORY.parents[1]
MANIFEST = ROOT / 'art/exports/avatars/avatar-head-layers-a-v01.json'
OUTPUT = DIRECTORY / 'avatar-head-data.js'
decode_png = runpy.run_path(str(DIRECTORY / 'build-avatar-appearance-data.py'))['decode_png']


def build():
    manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
    layers = {}
    for name, key in [('neutral', 'neutral'), ('hair', 'hairA')]:
        raw = (ROOT / manifest['exports'][key]).read_bytes()
        if hashlib.sha256(raw).hexdigest() != manifest['exportHashes'][name]:
            raise ValueError('Layer PNG hash mismatch: ' + name)
        width, height, pixels = decode_png(raw)
        if [width, height] != [manifest['layerStrip']['width'], manifest['layerStrip']['height']]:
            raise ValueError('Layer dimensions do not match the manifest')
        layers[name] = {'encoding': 'rgba8-base64', 'width': width, 'height': height,
                        'sha256Rgba': hashlib.sha256(pixels).hexdigest(),
                        'pixelsBase64': base64.b64encode(pixels).decode('ascii')}
    return 'window.AVATAR_HEAD_DATA = ' + json.dumps({'manifest': manifest, 'layers': layers}, ensure_ascii=False, indent=2) + ';\n'


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    content = build()
    if args.check:
        if OUTPUT.read_text(encoding='utf-8') != content:
            raise SystemExit('Head layer data is out of date')
        print('OK: head layer data matches PNG exports and manifest')
    else:
        OUTPUT.write_text(content, encoding='utf-8')
        print('Wrote ' + str(OUTPUT.relative_to(ROOT)))
