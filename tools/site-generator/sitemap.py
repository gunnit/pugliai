"""Regenerate sitemap.xml from the generator's page list.

    python3 tools/site-generator/sitemap.py

Pages flagged noindex are skipped. lastmod is today's date for every page (the
whole site is regenerated together); articles keep their own dateModified when
their Article JSON-LD carries one.
"""
import datetime
import importlib
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
sys.path.insert(0, HERE)

from build import MODULES  # noqa: E402

TODAY = datetime.date.today().isoformat()


def priority(path):
    if path in ('index.html', 'en/index.html'):
        return '1.0', 'weekly'
    if path.startswith('guida-ai/'):
        return '0.6', 'monthly'
    if any(path.endswith(x) for x in ('privacy.html', 'cookie.html', 'termini.html', 'terms.html', 'success.html', 'accelerator-success.html', 'acceleratore-success.html')):
        return '0.3', 'yearly'
    return '0.8', 'monthly'


def main():
    entries = []
    for name in MODULES:
        mod = importlib.import_module('gen.' + name)
        pages = mod.build_all() if hasattr(mod, 'build_all') else (mod.build(lang) for lang in ('it', 'en'))
        for page, _body in pages:
            if page.noindex:
                continue
            lastmod = TODAY
            for d in page.jsonld or []:
                if isinstance(d, dict) and d.get('@type') == 'Article' and d.get('dateModified'):
                    lastmod = d['dateModified']
            pr, freq = priority(page.path)
            entries.append((page.url, lastmod, freq, pr))
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url, lastmod, freq, pr in entries:
        out.append(f'  <url><loc>{url}</loc><lastmod>{lastmod}</lastmod><changefreq>{freq}</changefreq><priority>{pr}</priority></url>')
    out.append('</urlset>')
    with open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(out) + '\n')
    print(f'sitemap.xml: {len(entries)} URLs')


if __name__ == '__main__':
    main()
