"""Approved cinematic homepage, kept bilingual and reproducible.

The editable body templates live in gen/cinematic/. Shared head, consent,
attribution and company data continue to come from site.py.
"""
from pathlib import Path
import re
from html import unescape
from .html import esc
from .site import Page, FOOTER, ORG, ld_org, ld_website, ld_webpage, ld_faq, SITE, navigation_fallback, versioned_asset, stylesheet_markup

TEMPLATES = Path(__file__).with_name('cinematic')


META = {
    'it': ('PugliAI — Consulenza AI, agenti e soluzioni on-premise',
           'L’intelligenza artificiale al lavoro nella tua impresa. Consulenza, agenti AI e soluzioni sui tuoi server. Partiamo da un processo concreto.'),
    'en': ('PugliAI — AI consulting, agents and on-premise solutions',
           'Put artificial intelligence to work in your business. Consulting, AI agents and solutions on your own servers. Start with one real process.'),
}


COMPANY_LOGOS = [
    ('MyCIA', 'mycia_logo.svg', 793, 223, 134),
    ('Tiledesk', 'tiledesk-logo.png', 1000, 237, 150),
    ('bebit', 'bebit-home.webp', 320, 170, 118),
    ('Maxlube', 'maxlube_logo300.png', 300, 132, 130),
    ('DBridge', 'dbridge_logo.svg', 138, 24, 120),
    ('BCC Studio', 'bcc_studio_logo.png', 768, 219, 154),
]
PARTNER_LOGOS = [
    ('Assist Digital', 'assist_digital_logo.png', 456, 260, 220),
    ('Merantix', 'merantix_partner_logo.png', 457, 260, 220),
    ('Plug and Play', 'plug_and_play_logo.png', 456, 260, 220),
    ('Puglia Women Lead', 'puglia_woman_lead_logo.png', 457, 260, 220),
    ('Politecnico di Bari', 'universita_bari_logo.png', 456, 260, 220),
    ('Università del Salento', 'universita_salento_logo.png', 457, 260, 220),
]


def logo_strip(lang, partners=False):
    """Use the same existing marks and accessible names in both languages."""
    kind = 'partners' if partners else 'companies'
    folder = 'partners' if partners else 'clients'
    title = ({'it': 'Il nostro ecosistema', 'en': 'Our ecosystem'} if partners else
             {'it': 'Alcune delle realtà con cui lavoriamo', 'en': 'Some of the companies we work with'})[lang]
    logos = PARTNER_LOGOS if partners else COMPANY_LOGOS
    items = ''.join(
        f'<li style="--logo-width:{size}px"><img src="/src/assets/img/{folder}/{filename}" '
        f'width="{width}" height="{height}" alt="{esc(name)}" loading="lazy" decoding="async"></li>'
        for name, filename, width, height, size in logos)
    shell = '' if partners else ' section-shell'
    return (f'<section class="logo-strip logo-strip--{kind}{shell}" aria-labelledby="{kind}-title">'
            f'<div class="logo-strip-content reveal"><h2 class="logo-strip-title" id="{kind}-title">{title}</h2>'
            f'<ul class="logo-grid">{items}</ul></div></section>')


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


def motion_preloads():
    """Discover the built entry's shared dependency while parsing the HTML."""
    root = Path(__file__).resolve().parents[3]
    entry = root / 'src/assets/js/cinematic/home.js'
    imports = re.findall(r'from\s+["\']\./(motion-[\w-]+\.js)["\']', entry.read_text())
    return ''.join(f'\n    <link rel="modulepreload" href="/src/assets/js/cinematic/{name}">' for name in imports)


def build(lang):
    path, alt = ('index.html', 'en/index.html') if lang == 'it' else ('en/index.html', 'index.html')
    title, description = META[lang]
    stylesheet = versioned_asset('src/assets/css/cinematic.css')
    home_script = versioned_asset('/src/assets/js/cinematic/home.js')
    page = Page(lang=lang, path=path, title=title, description=description, alt=alt,
                chat=True, own_header=True, standalone_body=True, inline_styles=True, consent_analytics=True,
                body_class='cinematic-home', stylesheet=stylesheet, theme_color='#080d13',
                early_head='\n    <link rel="preload" href="/src/assets/img/cinematic/hero-higgsfield-mobile-poster.webp" as="image" fetchpriority="high" media="(max-width: 700px)">\n    <link rel="preload" href="/src/assets/img/cinematic/hero-higgsfield-poster.webp" as="image" fetchpriority="high" media="(min-width: 701px)">' + f'\n    <link rel="modulepreload" href="{home_script}">' + motion_preloads(),
                extra_head='\n    ' + stylesheet_markup(versioned_asset('/src/assets/css/cinematic-navigation.css'), True),
                extra_scripts=f'<script src="{versioned_asset("/src/assets/js/navigation.js")}" defer></script>\n    <script type="module" src="{home_script}" async fetchpriority="high"></script>')
    body = (TEMPLATES / f'home-{lang}.html').read_text(encoding='utf-8')
    body = body.replace('{{NAVIGATION}}', navigation_fallback(page, 'main'))
    body = body.replace('{{COMPANY_LOGOS}}', logo_strip(lang))
    body = body.replace('{{PARTNER_LOGOS}}', logo_strip(lang, partners=True))
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
