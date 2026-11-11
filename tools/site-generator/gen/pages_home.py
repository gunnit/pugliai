"""Approved cinematic homepage, kept bilingual and reproducible.

The editable body templates live in gen/cinematic/. Shared head, consent,
attribution and company data continue to come from site.py.
"""
from pathlib import Path
import re
from html import unescape
from .html import esc
from .site import Page, FOOTER, ORG, ld_org, ld_website, ld_webpage, ld_faq, SITE, navigation_fallback

TEMPLATES = Path(__file__).with_name('cinematic')
META = {
    'it': ('PugliAI — Consulenza AI, agenti e soluzioni on-premise',
           'L’intelligenza artificiale al lavoro nella tua impresa. Consulenza, agenti AI e soluzioni sui tuoi server. Partiamo da un processo concreto.'),
    'en': ('PugliAI — AI consulting, agents and on-premise solutions',
           'Put artificial intelligence to work in your business. Consulting, AI agents and solutions on your own servers. Start with one real process.'),
}


def footer_directory(lang):
    prefix = '/' if lang == 'it' else '/en/'
    columns = []
    for title, links in FOOTER[lang]['cols']:
        items = ''.join(f'<a href="{prefix}{href}">{esc(label)}</a>' for label, href in links)
        columns.append(f'<div><h2>{esc(title)}</h2>{items}</div>')
    return f'<nav class="footer-directory" aria-label="{esc(FOOTER[lang]["nav_label"])}">' + ''.join(columns) + '</nav>'


def legal_links(lang):
    prefix = '/' if lang == 'it' else '/en/'
    f = FOOTER[lang]
    links = ''.join(f'<a href="{prefix}{href}">{esc(label)}</a>' for label, href in f['legal'])
    return f'<div>{links}<a href="{prefix}cookie.html" data-cookie-prefs>{esc(f["prefs"])}</a></div>'


def company_details(lang):
    f = FOOTER[lang]
    addresses = ' · '.join(f'{a[0]}, {a[3]} {a[1]} ({a[2]})' for a in (ORG['addr1'], ORG['addr2']))
    return (f'<p class="company-details">{esc(ORG["legal"])} · {f["vat_label"]} {ORG["vat"]} · '
            f'REA {ORG["rea"]} · {f["capital_label"]} {esc(f["capital"])}<br>{esc(addresses)}</p>')


def visible_faq(body):
    """Derive structured answers from the same visible template, not a second copy."""
    rows = re.findall(r'<details>\s*<summary>(.*?)<span[^>]*>.*?</span></summary>\s*<div class="answer"><p>(.*?)</p>', body, re.S)
    if len(rows) != 4:
        raise ValueError('Cinematic homepage must expose its four FAQ answers.')
    return [(unescape(re.sub(r'<[^>]+>', '', q)), unescape(a)) for q, a in rows]


def build(lang):
    path, alt = ('index.html', 'en/index.html') if lang == 'it' else ('en/index.html', 'index.html')
    title, description = META[lang]
    page = Page(lang=lang, path=path, title=title, description=description, alt=alt,
                chat=True, own_header=True, standalone_body=True,
                body_class='cinematic-home', stylesheet='src/assets/css/cinematic.css', theme_color='#080d13',
                extra_head='\n    <link rel="stylesheet" href="/src/assets/css/cinematic-navigation.css">\n    <link rel="preload" href="/src/assets/img/cinematic/hero-light.webp" as="image" fetchpriority="high">',
                extra_scripts='<script src="/src/assets/js/navigation.js" defer></script>\n    <script type="module" src="/src/assets/js/cinematic/home.js"></script>')
    body = (TEMPLATES / f'home-{lang}.html').read_text(encoding='utf-8')
    body = body.replace('{{NAVIGATION}}', navigation_fallback(page, 'main'))
    body = body.replace('{{FOOTER_DIRECTORY}}', footer_directory(lang))
    body = body.replace('{{LEGAL_LINKS}}', legal_links(lang))
    body = body.replace('{{COMPANY_DETAILS}}', company_details(lang))
    products = ([('Agenti AI', '/agenti-ai.html'), ('KnowledgeAI', '/knowledgeai-enterprise.html'),
                 ('VoiceAI', '/voiceai-on-premise.html'), ('Hosting MCP', '/hosting-mcp.html')]
                if lang == 'it' else
                [('AI agents', '/en/ai-agents.html'), ('KnowledgeAI', '/en/knowledgeai-enterprise.html'),
                 ('VoiceAI', '/en/voiceai-on-premise.html'), ('MCP Hosting', '/en/mcp-hosting.html')])
    product_list = {'@context': 'https://schema.org', '@type': 'ItemList',
                    'name': 'Soluzioni PugliAI' if lang == 'it' else 'PugliAI solutions',
                    'numberOfItems': len(products), 'itemListElement': [
                        {'@type': 'ListItem', 'position': i + 1, 'name': name, 'url': SITE + href}
                        for i, (name, href) in enumerate(products)]}
    page.jsonld = [ld_website(lang), ld_org(lang), ld_webpage(page, title), product_list, ld_faq(visible_faq(body))]
    return page, body
