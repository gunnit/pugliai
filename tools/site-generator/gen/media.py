"""Use the committed photo renditions without changing content or aspect ratio."""
from functools import lru_cache
from html import escape, unescape
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[3]


@lru_cache(maxsize=1)
def renditions():
    return json.loads((ROOT / 'src/assets/img/responsive/manifest.json').read_text())


def responsive_images(body):
    def replace(match):
        tag = match.group(0)
        source = re.search(r'\bsrc="([^"]+)"', tag)
        if not source or 'srcset=' in tag:
            return tag
        url = unescape(source.group(1))
        # Page.asset() emits /, ../ or ../../ paths depending on the route.
        canonical = '/' + url[url.index('src/assets/'):] if 'src/assets/' in url else url
        variants = renditions().get(canonical)
        if not variants:
            return tag
        tag = tag[:source.start(1)] + escape(variants[-1]['url'], quote=True) + tag[source.end(1):]
        srcset = ', '.join(f"{v['url']} {v['width']}w" for v in variants)
        sizes = '100vw' if 'fetchpriority="high"' in tag else '(max-width: 719px) 100vw, 80vw'
        attributes = f' srcset="{srcset}" sizes="{sizes}"'
        if 'loading="lazy"' in tag:
            attributes += ' decoding="async"'
        return re.sub(r'\s*/?>$', attributes + '>', tag)
    return re.sub(r'<img\b[^>]*>', replace, body)
