#!/usr/bin/env python3
"""Generate the PugliAI static pages (2026 design).

Usage:  python3 tools/site-generator/build.py [page-module ...]

Writes plain HTML into the repository root / en/ / guida-ai/. The generated
files are the deliverable served by GitHub Pages; this tool only keeps the
bilingual pages and their shared chrome consistent. If you edit a generated
HTML file by hand, port the change here before regenerating.
"""
import importlib, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from gen.site import shell  # noqa: E402

MODULES = ['pages_home', 'pages_services', 'pages_products', 'pages_sectors', 'pages_about', 'pages_contact', 'pages_accelerator', 'pages_resources', 'pages_roi', 'pages_legal', 'articles']


def write(page, body):
    out = os.path.join(ROOT, page.path)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, 'w', encoding='utf-8') as f:
        f.write(shell(page, body))
    return out


def main(argv):
    mods = argv or MODULES
    written = []
    for name in mods:
        mod = importlib.import_module('gen.' + name)
        if hasattr(mod, 'build_all'):
            for page, body in mod.build_all():
                written.append(write(page, body))
        else:
            for lang in ('it', 'en'):
                page, body = mod.build(lang)
                written.append(write(page, body))
    for w in written:
        print('wrote', os.path.relpath(w, ROOT), os.path.getsize(w) // 1024, 'KB')


if __name__ == '__main__':
    main(sys.argv[1:])
