"""Recover legacy URLs reported by Search Console on 13 November 2026.

GitHub Pages cannot configure per-path HTTP 301s. Google recognizes immediate
meta refresh as a permanent redirect; the canonical and visible link use the
same destination. These aliases are not content pages or sitemap entries.
"""
from pathlib import Path
from .html import esc
from .site import SITE

REDIRECTS = {
    'technical-architecture.html': '/en/technical-architecture.html',
    'case-studies.html': '/en/case-studies.html',
    'guida-ai/index.html': '/',
    'guida-ai/guida-ai-ceo-2025.html': '/guida-ai-ceo-2025.html',
    'guida-ai/servizi.html': '/servizi.html',
    'guida-ai/chi-siamo.html': '/chi-siamo.html',
}


def render(destination):
    target = SITE + destination
    english = destination.startswith('/en/')
    title = 'Page moved | PugliAI' if english else 'Pagina spostata | PugliAI'
    message = 'Continue to the page' if english else 'Continua alla pagina'
    return f'''<!doctype html>
<!-- legacy-redirect: generated from gen/redirects.py -->
<html lang="{'en' if english else 'it'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{title}</title>
  <link rel="canonical" href="{esc(target)}">
  <meta http-equiv="refresh" content="0; url={esc(target)}">
</head>
<body><main><h1>{title.split(' | ')[0]}</h1><p><a href="{esc(target)}">{message}</a></p></main></body>
</html>
'''


def write_all(root):
    written = []
    for path, destination in REDIRECTS.items():
        output = Path(root) / path
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(render(destination), encoding='utf-8')
        written.append(str(output))
    return written
