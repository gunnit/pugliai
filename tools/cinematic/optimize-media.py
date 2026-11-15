#!/usr/bin/env python3
"""Rebuild committed responsive photos and the mobile Higgsfield renditions.

Requires Pillow and ffmpeg. Run explicitly when the source media changes;
normal site builds consume the committed files and manifest.
"""
from pathlib import Path
import json
import subprocess
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[2]
IMAGES = ROOT / 'src/assets/img'
OUT = IMAGES / 'responsive'
OUT.mkdir(exist_ok=True)
SOURCES = [*(IMAGES / '2026').glob('*.jpg'), *[
    IMAGES / 'cinematic' / f'{name}.webp'
    for name in ('scrivania', 'officina', 'founder-stage')]]
manifest = {}
for source in sorted(SOURCES):
    if source.stem.startswith('og-'):
        continue
    image = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
    widths = sorted({w for w in (480, 800, 1200, 1600) if w < image.width} | {min(image.width, 1600)})
    variants = []
    for width in widths:
        path = OUT / f'{source.parent.name}-{source.stem}-{width}.webp'
        height = round(image.height * width / image.width)
        image.resize((width, height), Image.Resampling.LANCZOS).save(path, 'WEBP', quality=76, method=6)
        variants.append({'url': '/' + str(path.relative_to(ROOT)), 'width': width})
    manifest['/' + str(source.relative_to(ROOT))] = variants
(OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
light = Image.open(IMAGES / 'cinematic/hero-light.webp')
light.resize((960, round(light.height * 960 / light.width)), Image.Resampling.LANCZOS).save(
    IMAGES / 'cinematic/hero-light-960.webp', 'WEBP', quality=64, method=6)
video = ROOT / 'src/assets/video'
common = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(video / 'hero-higgsfield.mp4'),
          '-vf', 'crop=ih*9/16:ih:(iw-ow)*0.68:0,scale=432:768,fps=24', '-an']
for codec, suffix in [(['-c:v', 'libvpx-vp9', '-crf', '35', '-b:v', '0', '-row-mt', '1'], 'webm'),
                      (['-c:v', 'libx264', '-crf', '27', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart'], 'mp4')]:
    subprocess.run(common + codec + [str(video / f'hero-higgsfield-mobile.{suffix}')], check=True)
print(f'Built responsive variants for {len(manifest)} photos and two mobile video formats.')
