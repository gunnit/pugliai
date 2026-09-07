"""Blog articles (guida-ai/*.html): re-wrap the existing article bodies in the 2026 shell.

The Italian articles have no English mirrors. Their copy lives only in the HTML
files themselves, so this module is idempotent: it parses whatever is on disk
(the old navy/gold pages or pages it generated earlier), keeps the <article>
block verbatim and rebuilds everything around it (head, chrome, scripts).

What is preserved: <title>, meta description, the three article:* meta tags,
every JSON-LD block (Article / FAQPage / BreadcrumbList / HowTo / ItemList),
the article body including breadcrumb, FAQ, CTA box and prev/next nav.

What changes: the per-article <style> block, the Google Fonts link, the old GA
snippet and the nav/footer loader scripts are dropped (shell() provides them);
inline colour declarations of the old theme are removed from style="" attributes;
tables are wrapped in <div class="table-wrap"> so they scroll on narrow screens;
JSON-LD images that point to files missing from the repo fall back to the site
OG image / logo.
"""
import glob
import html
import json
import os
import re

from .html import esc
from .site import LOGO_URL, OG_IMAGE, SITE, Page

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
ART_DIR = os.path.join(ROOT, 'guida-ai')

# Inline-style properties that carried the old navy/gold palette. Everything
# else (margins, widths, font sizes) is layout and is left alone.
COLOR_PROPS = {'color', 'background', 'background-color', 'border-color'}

_META_RE = re.compile(r'<meta\b[^>]*>', re.I)
_ATTR_RE = re.compile(r'([a-zA-Z:_-]+)\s*=\s*"([^"]*)"')
_LD_RE = re.compile(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', re.S | re.I)
_ARTICLE_RE = re.compile(r'<article\b[^>]*>.*?</article>', re.S | re.I)
_TABLE_RE = re.compile(r'<table\b.*?</table>', re.S | re.I)
_STYLE_ATTR_RE = re.compile(r'\s+style="([^"]*)"')


# ---------- parsing ----------

def _metas(src):
    """All <meta> tags as a list of attribute dicts."""
    out = []
    for m in _META_RE.finditer(src):
        out.append({k.lower(): v for k, v in _ATTR_RE.findall(m.group(0))})
    return out


def _meta(metas, key, value):
    for m in metas:
        if m.get(key) == value:
            return html.unescape(m.get('content', ''))
    return None


def _title(src):
    m = re.search(r'<title>(.*?)</title>', src, re.S | re.I)
    return html.unescape(' '.join(m.group(1).split())) if m else ''


def _jsonld(src):
    return [json.loads(block) for block in _LD_RE.findall(src)]


def _local_path(url):
    """Repo path for a URL under the site origin, else None."""
    if url.startswith(SITE + '/'):
        return os.path.join(ROOT, url[len(SITE) + 1:].split('?')[0].split('#')[0])
    if url.startswith('/'):
        return os.path.join(ROOT, url.lstrip('/'))
    return None


def _exists(url):
    p = _local_path(url)
    return p is None or os.path.isfile(p)   # external URLs are left alone


def _fix_images(node):
    """Replace image/logo URLs that point to files missing from the repo."""
    if isinstance(node, list):
        for item in node:
            _fix_images(item)
        return
    if not isinstance(node, dict):
        return
    for key, val in list(node.items()):
        if key == 'image':
            if isinstance(val, str) and not _exists(val):
                node[key] = OG_IMAGE
            elif isinstance(val, list):
                node[key] = [OG_IMAGE if isinstance(v, str) and not _exists(v) else v for v in val]
                for v in node[key]:
                    _fix_images(v)
            elif isinstance(val, dict):
                if isinstance(val.get('url'), str) and not _exists(val['url']):
                    val['url'] = OG_IMAGE
                _fix_images(val)
        elif key == 'logo':
            if isinstance(val, str) and not _exists(val):
                node[key] = LOGO_URL
            elif isinstance(val, dict):
                if isinstance(val.get('url'), str) and not _exists(val['url']):
                    val['url'] = LOGO_URL
                _fix_images(val)
        else:
            _fix_images(val)


def _first(lds, typ):
    for d in lds:
        if d.get('@type') == typ:
            return d
    return None


# ---------- body clean-up ----------

def _strip_theme_colors(body):
    """Drop colour declarations from inline styles; keep layout declarations."""
    def repl(m):
        kept = []
        for decl in m.group(1).split(';'):
            if ':' not in decl:
                continue
            prop = decl.split(':', 1)[0].strip().lower()
            if prop in COLOR_PROPS:
                continue
            kept.append(' '.join(decl.split()))
        return f' style="{"; ".join(kept)};"' if kept else ''
    return _STYLE_ATTR_RE.sub(repl, body)


def _columns(table_html):
    best = 0
    for row in re.findall(r'<tr\b.*?</tr>', table_html, re.S | re.I):
        best = max(best, len(re.findall(r'<t[dh]\b', row, re.I)))
    return best


def _wrap_tables(body):
    """Wrap every table in .table-wrap (horizontal scroll on phones)."""
    out, pos = [], 0
    for m in _TABLE_RE.finditer(body):
        before = body[pos:m.start()]
        if re.search(r'<div class="table-wrap"[^>]*>\s*$', before):
            out.append(before + m.group(0))      # already wrapped
        else:
            line_start = body.rfind('\n', 0, m.start()) + 1
            indent = body[line_start:m.start()]
            indent = indent if indent.strip() == '' else ''
            out.append(before + f'<div class="table-wrap" data-cols="{_columns(m.group(0))}">\n'
                       f'{indent}{m.group(0)}\n{indent}</div>')
        pos = m.end()
    out.append(body[pos:])
    return ''.join(out)


def _body(src):
    m = _ARTICLE_RE.search(src)
    if not m:
        raise ValueError('no <article> block')
    body = _wrap_tables(_strip_theme_colors(m.group(0)))
    return '    ' + body


# ---------- pages ----------

def build_one(filename):
    path = os.path.join(ART_DIR, filename)
    with open(path, encoding='utf-8') as f:
        src = f.read()
    metas = _metas(src)
    lds = _jsonld(src)
    for d in lds:
        _fix_images(d)
    article = _first(lds, 'Article') or {}

    published = _meta(metas, 'property', 'article:published_time') or article.get('datePublished', '')
    modified = (_meta(metas, 'property', 'article:modified_time') or article.get('dateModified') or published)
    section = _meta(metas, 'property', 'article:section')
    if not section:
        cat = re.search(r'class="article-category"[^>]*>(.*?)</', src, re.S)
        section = html.unescape(' '.join(cat.group(1).split())) if cat else (article.get('articleSection') or '')

    extra_head = ''.join(f'\n    <meta property="{prop}" content="{esc(val)}">' for prop, val in (
        ('article:published_time', published),
        ('article:modified_time', modified),
        ('article:section', section)) if val)

    page = Page(
        lang='it',
        path='guida-ai/' + filename,
        title=_title(src),
        description=_meta(metas, 'name', 'description') or '',
        alt=None,
        og_type='article',
        og_image=OG_IMAGE,
        jsonld=lds,
        extra_head=extra_head,
    )
    return page, _body(src)


def build_all():
    for path in sorted(glob.glob(os.path.join(ART_DIR, '*.html'))):
        yield build_one(os.path.basename(path))
