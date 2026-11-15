#!/usr/bin/env python3
"""Trace the original PugliAI brand artwork, without font substitution.

Authoring dependencies: Pillow and Potrace 1.16. No browser/runtime dependency.
The SVGs contain paths only, never an embedded bitmap or external font.
"""
from copy import deepcopy
from pathlib import Path
import subprocess
import tempfile
import xml.etree.ElementTree as ET

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'src/assets/img/pugliai_logo.png'
OUTPUT = ROOT / 'src/assets/img/brand'
NS = 'http://www.w3.org/2000/svg'
ET.register_namespace('', NS)
COLORS = {'branches': (0, 0, 0), 'green': (27, 144, 50), 'blue': (19, 92, 169)}


def trace(image, color, temporary, region=None, silhouette=False, cutoff=None):
    alpha = Image.new('L', image.size)
    # Antialiasing blends blue/black at branch joints. Assign those pixels to
    # the nearest original ink, so tracing does not leave gaps at the nodes.
    def ink(pixel):
        return min(COLORS.values(), key=lambda candidate:
                   sum((pixel[i] - candidate[i]) ** 2 for i in range(3)))
    alpha.putdata([pixel[3] if pixel[3] and (silhouette or ink(pixel) == color) else 0
                   for pixel in image.getdata()])
    if region:
        restricted = Image.new('L', image.size)
        restricted.paste(alpha.crop(region), region[:2])
        alpha = restricted
    # Trace at four times the source resolution to retain subpixel contours.
    mask = alpha.resize((image.width * 4, image.height * 4), Image.Resampling.LANCZOS)
    bitmap = temporary / 'layer.pbm'
    threshold = cutoff if cutoff is not None else 96
    mask.point(lambda value: 0 if value >= threshold else 255, mode='1').save(bitmap)
    vector = temporary / 'layer.svg'
    subprocess.run(['potrace', str(bitmap), '--svg', '--output', str(vector),
                    '--turdsize', '0', '--opttolerance', '0.08', '--unit', '10'], check=True)
    group = ET.parse(vector).getroot().find(f'{{{NS}}}g')
    # Potrace emits coordinates in a bottom-left system; wrap to source pixels.
    wrapper = ET.Element(f'{{{NS}}}g', {'transform': 'scale(.25)'})
    wrapper.append(group)
    group.set('fill', '#%02x%02x%02x' % color)
    return wrapper


def svg(name, viewbox, groups, title, style=None):
    root = ET.Element(f'{{{NS}}}svg', {'viewBox': viewbox, 'fill': 'none'})
    ET.SubElement(root, f'{{{NS}}}title').text = title
    if style:
        ET.SubElement(root, f'{{{NS}}}style').text = style
    for group in groups:
        root.append(deepcopy(group))
    ET.indent(root)
    ET.ElementTree(root).write(OUTPUT / name, encoding='unicode', xml_declaration=False)


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    original = Image.open(SOURCE).convert('RGBA')
    with tempfile.TemporaryDirectory() as directory:
        temporary = Path(directory)
        # A continuous silhouette beneath the blue ink preserves hairline
        # branch/node joins in the small raster source.
        tree = [trace(original, COLORS['branches'], temporary, (70, 10, 236, 167),
                      silhouette=True, cutoff=32),
                trace(original, COLORS['blue'], temporary, (70, 10, 236, 167), cutoff=32)]
        lettering = [trace(original, color, temporary, (0, 167, 316, 268))
                     for color in (COLORS['green'], COLORS['blue'])]
    svg('pugliai-logo.svg', '2 10 306 258', tree + lettering, 'PugliAI')
    svg('pugliai-symbol.svg', '70 10 166 160', tree, 'PugliAI — tree symbol',
        '@media(prefers-color-scheme:dark){path{fill:#f8f8f8}}')
    horizontal = []
    horizontal_white = []
    for transform, groups in [('translate(-74 -12)', tree), ('translate(172 -138)', lettering)]:
        group = ET.Element(f'{{{NS}}}g', {'transform': transform})
        for layer in groups:
            group.append(deepcopy(layer))
        horizontal.append(group)
        group = ET.Element(f'{{{NS}}}g', {'transform': transform})
        for layer in groups:
            white = deepcopy(layer)
            for element in white.iter():
                if 'fill' in element.attrib:
                    element.set('fill', '#f8f8f8')
            group.append(white)
        horizontal_white.append(group)
    svg('pugliai-logo-horizontal.svg', '0 0 480 156', horizontal, 'PugliAI')
    svg('pugliai-logo-white-horizontal.svg', '0 0 480 156', horizontal_white, 'PugliAI')
    for path in sorted(OUTPUT.glob('*.svg')):
        print(path.relative_to(ROOT), path.stat().st_size, 'bytes')


if __name__ == '__main__':
    main()
