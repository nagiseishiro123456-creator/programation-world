"""Rebuild the local RGBA snapshot with Python 3 standard-library modules only.

Decodes the project's non-interlaced RGBA8 PNG; does not alter any PNG source.
Run from any directory. --check verifies the snapshot instead of writing it.
"""
import argparse
import base64
import hashlib
import json
import struct
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CATALOG_PATH = ROOT / 'art/exports/avatars/avatar-appearance-v01.json'
OUTPUT_PATH = ROOT / 'tools/art-preview/avatar-appearance-data.js'


def decode_png(raw):
    if raw[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('PNG signature mismatch')
    offset, packed, width, height = 8, bytearray(), None, None
    while offset < len(raw):
        length = struct.unpack_from('>I', raw, offset)[0]
        kind = raw[offset + 4:offset + 8]
        body = raw[offset + 8:offset + 8 + length]
        crc = struct.unpack_from('>I', raw, offset + 8 + length)[0]
        if zlib.crc32(kind + body) != crc:
            raise ValueError('PNG chunk CRC mismatch')
        if kind == b'IHDR':
            width, height, depth, color, compression, filtering, interlace = struct.unpack('>IIBBBBB', body)
            if (depth, color, compression, filtering, interlace) != (8, 6, 0, 0, 0):
                raise ValueError('This decoder requires non-interlaced RGBA8 PNG')
        elif kind == b'IDAT':
            packed.extend(body)
        elif kind == b'IEND':
            break
        offset += length + 12
    if not width or not height:
        raise ValueError('PNG dimensions missing')
    filtered = zlib.decompress(packed)
    stride = width * 4
    if len(filtered) != height * (stride + 1):
        raise ValueError('PNG byte length mismatch')
    result, previous = bytearray(), bytearray(stride)
    for y in range(height):
        start = y * (stride + 1)
        mode = filtered[start]
        row = bytearray(filtered[start + 1:start + 1 + stride])
        for x in range(stride):
            left, above = row[x - 4] if x >= 4 else 0, previous[x]
            corner = previous[x - 4] if x >= 4 else 0
            if mode == 0:
                predictor = 0
            elif mode == 1:
                predictor = left
            elif mode == 2:
                predictor = above
            elif mode == 3:
                predictor = (left + above) // 2
            elif mode == 4:
                prediction = left + above - corner
                distances = [abs(prediction - value) for value in (left, above, corner)]
                predictor = (left, above, corner)[distances.index(min(distances))]
            else:
                raise ValueError('Unknown PNG row filter')
            row[x] = (row[x] + predictor) % 256
        result.extend(row)
        previous = row
    return width, height, bytes(result)


def build():
    catalog = json.loads(CATALOG_PATH.read_text())
    png = (ROOT / catalog['source']['path']).read_bytes()
    if hashlib.sha256(png).hexdigest() != catalog['source']['sha256']:
        raise ValueError('Atlas changed: review the catalog source hash first')
    width, height, pixels = decode_png(png)
    if [width, height] != [catalog['atlas']['width'], catalog['atlas']['height']]:
        raise ValueError('Atlas dimensions changed')
    source = {'encoding': 'rgba8-base64', 'width': width, 'height': height,
              'sha256Rgba': hashlib.sha256(pixels).hexdigest(),
              'pixelsBase64': base64.b64encode(pixels).decode('ascii')}
    return 'window.AVATAR_APPEARANCE_DATA = ' + json.dumps({'catalog': catalog, 'source': source}, ensure_ascii=False, indent=2) + ';\n'


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    output = build()
    if args.check:
        if OUTPUT_PATH.read_text() != output:
            raise SystemExit('Appearance snapshot is out of date')
        print('OK: appearance snapshot matches the PNG and catalog')
    else:
        OUTPUT_PATH.write_text(output)
        print('Wrote ' + str(OUTPUT_PATH.relative_to(ROOT)))
