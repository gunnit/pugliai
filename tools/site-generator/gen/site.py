"""Page shell: <head> with SEO/JSON-LD, footer, scripts. Language-aware paths."""
import json
from dataclasses import dataclass, field
from .html import esc, icon

SITE = 'https://pugliai.com'
GA_ID = 'G-L7711R1PDP'
FORMCARRY = 'https://formcarry.com/s/xWKwXtJvS4C'
FORMCARRY_ACCELERATOR = 'https://formcarry.com/s/accelerator-pugliai'
CHAT_WIDGET = '<script src="https://chatniuexa.onrender.com/widget.js" data-chatbot-id="cmm7mojtm0001fzrkekjpfh84"></script>'
OG_IMAGE = SITE + '/src/assets/img/2026/og-pugliai-2026.jpg'
LOGO_URL = SITE + '/src/assets/img/pugliai_pittogramma.png'
UPDATED = '2026-09-07'
UPDATED_IT = '7 settembre 2026'
UPDATED_EN = '7 September 2026'

ORG = {
    'name': 'PugliAI', 'legal': 'PugliAI S.r.l.', 'vat': 'IT02735920742', 'rea': 'BR-170874',
    'email': 'sales@pugliai.com', 'founded': '2023',
    'addr1': ('Via Giovanni Forleo 45', 'Latiano', 'BR', '72022'),
    'addr2': ('Via Angelo Maj 16', 'Bergamo', 'BG', '24121'),
    'linkedin': 'https://www.linkedin.com/company/pugliai',
    'twitter': 'https://twitter.com/pugliai',
    'founder_linkedin': 'https://www.linkedin.com/in/maricgregor',
}


@dataclass
class Page:
    lang: str                 # 'it' | 'en'
    path: str                 # 'servizi.html', 'en/services.html', 'guida-ai/x.html'
    title: str
    description: str
    alt: str | None = None    # path of the other-language mirror
    og_image: str = OG_IMAGE
    og_type: str = 'website'
    jsonld: list = field(default_factory=list)
    noindex: bool = False
    chat: bool = False
    form_source: str | None = None   # when set, form-security.js + lead observer are included
    body_class: str = ''
    extra_head: str = ''
    extra_scripts: str = ''
    own_header: bool = False  # funnel landings render their own minimal header
    sticky_cta: str = ''      # html for the mobile sticky CTA (landings)
    main_class: str = ''

    @property
    def depth(self):
        return self.path.count('/')

    @property
    def prefix(self):
        return '../' * self.depth

    @property
    def url(self):
        if self.path == 'index.html':
            return SITE + '/'
        if self.path == 'en/index.html':
            return SITE + '/en/'
        return SITE + '/' + self.path

    def asset(self, rel):
        return self.prefix + rel

    def href(self, target):
        """Link to a site-root-relative page from this page (same language directory assumed for bare names)."""
        if target.startswith(('http', '#', 'mailto:')):
            return target
        if self.lang == 'en' and not target.startswith('en/') and not target.startswith('guida-ai/') and not target.startswith('src/'):
            return target  # bare EN filename, same directory
        if self.lang == 'en' and target.startswith('en/'):
            return target[3:]
        return self.prefix + target


def url_of(path):
    if path == 'index.html':
        return SITE + '/'
    if path == 'en/index.html':
        return SITE + '/en/'
    return SITE + '/' + path


# ---------- JSON-LD ----------

def ld_org(lang='it'):
    return {
        '@context': 'https://schema.org', '@type': 'Organization', '@id': SITE + '/#organization',
        'name': 'PugliAI', 'alternateName': 'PugliAI S.r.l.', 'legalName': 'PugliAI S.r.l.', 'vatID': ORG['vat'],
        'url': SITE, 'logo': LOGO_URL, 'image': OG_IMAGE, 'foundingDate': ORG['founded'], 'email': ORG['email'],
        'description': ('Società di consulenza AI per le piccole e medie imprese italiane: consulenza strategica, agenti AI, '
                        'infrastrutture e prodotti on-premise.' if lang == 'it' else
                        'AI consulting firm for Italian small and mid-sized companies: strategic consulting, AI agents, '
                        'infrastructure and on-premise products.'),
        'address': [
            {'@type': 'PostalAddress', 'streetAddress': ORG['addr1'][0], 'addressLocality': ORG['addr1'][1], 'addressRegion': ORG['addr1'][2], 'postalCode': ORG['addr1'][3], 'addressCountry': 'IT'},
            {'@type': 'PostalAddress', 'streetAddress': ORG['addr2'][0], 'addressLocality': ORG['addr2'][1], 'addressRegion': ORG['addr2'][2], 'postalCode': ORG['addr2'][3], 'addressCountry': 'IT'},
        ],
        'contactPoint': [{'@type': 'ContactPoint', 'email': ORG['email'], 'contactType': 'sales', 'areaServed': 'IT', 'availableLanguage': ['Italian', 'English']}],
        'sameAs': [ORG['linkedin'], ORG['twitter']],
        'founder': {'@type': 'Person', '@id': SITE + '/gregor-maric.html#person', 'name': 'Gregor Marić', 'jobTitle': 'CEO & Founder', 'sameAs': ORG['founder_linkedin']},
        'areaServed': {'@type': 'Country', 'name': 'Italy'},
        'knowsAbout': ['Intelligenza artificiale', 'Agenti AI', 'Model Context Protocol', 'Automazione dei processi', 'AI on-premise', 'Consulenza AI per PMI'],
    }


def ld_website(lang='it'):
    return {'@context': 'https://schema.org', '@type': 'WebSite', 'name': 'PugliAI', 'url': SITE,
            'inLanguage': ['it-IT', 'en'], 'publisher': {'@id': SITE + '/#organization'}}


def ld_breadcrumb(items):
    return {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': i + 1, 'name': name, 'item': url} for i, (name, url) in enumerate(items)]}


def ld_webpage(page, name, types=None, extra=None, date_modified=UPDATED):
    d = {'@context': 'https://schema.org', '@type': types or 'WebPage', 'name': name, 'url': page.url,
         'description': page.description, 'inLanguage': 'it-IT' if page.lang == 'it' else 'en',
         'dateModified': date_modified, 'isPartOf': {'@type': 'WebSite', 'url': SITE, 'name': 'PugliAI'},
         'publisher': {'@id': SITE + '/#organization'}}
    if extra:
        d.update(extra)
    return d


def ld_faq(items):
    return {'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': _strip(a)}} for q, a in items]}


def _strip(html_text):
    import re
    return re.sub(r'<[^>]+>', '', html_text).strip()


def ld_service(page, name, desc, service_type, offers=None, area='IT'):
    d = {'@context': 'https://schema.org', '@type': 'Service', 'name': name, 'description': desc, 'serviceType': service_type,
         'url': page.url, 'provider': {'@id': SITE + '/#organization'}, 'areaServed': {'@type': 'Country', 'name': 'Italy'},
         'audience': {'@type': 'BusinessAudience', 'name': 'PMI italiane' if page.lang == 'it' else 'Italian SMEs'}}
    if offers:
        d['offers'] = offers
    return d


def offer(price=None, low=None, high=None, unit=None, desc=None):
    if low is not None and high is not None:
        o = {'@type': 'AggregateOffer', 'priceCurrency': 'EUR', 'lowPrice': str(low), 'highPrice': str(high)}
    else:
        o = {'@type': 'Offer', 'priceCurrency': 'EUR', 'price': str(price)}
        if unit:
            o['priceSpecification'] = {'@type': 'UnitPriceSpecification', 'price': str(price), 'priceCurrency': 'EUR', 'unitText': unit}
    if desc:
        o['description'] = desc
    o['availability'] = 'https://schema.org/InStock'
    return o


def ld_product(page, name, desc, offers, category, image=OG_IMAGE):
    return {'@context': 'https://schema.org', '@type': 'Product', 'name': name, 'description': desc, 'url': page.url, 'image': image,
            'brand': {'@type': 'Brand', 'name': 'PugliAI'}, 'category': category, 'offers': offers,
            'audience': {'@type': 'BusinessAudience', 'name': 'PMI italiane' if page.lang == 'it' else 'Italian SMEs'}}


def ld_person():
    return {'@context': 'https://schema.org', '@type': 'Person', '@id': SITE + '/gregor-maric.html#person', 'name': 'Gregor Marić',
            'jobTitle': 'CEO & Founder', 'url': SITE + '/gregor-maric.html', 'worksFor': {'@id': SITE + '/#organization'},
            'sameAs': [ORG['founder_linkedin']], 'knowsAbout': ['Intelligenza artificiale', 'RPA', 'Automazione dei processi', 'Agenti AI'],
            'alumniOf': {'@type': 'CollegeOrUniversity', 'name': 'American University of Paris'}}


def ld_article(page, headline, date_published, date_modified, section, image=OG_IMAGE, keywords=None, author_person=True):
    d = {'@context': 'https://schema.org', '@type': 'Article', 'headline': headline, 'description': page.description, 'image': image,
         'author': ({'@type': 'Person', 'name': 'Gregor Marić', 'url': SITE + '/gregor-maric.html'} if author_person else {'@type': 'Organization', 'name': 'PugliAI', 'url': SITE}),
         'publisher': {'@type': 'Organization', 'name': 'PugliAI', 'logo': {'@type': 'ImageObject', 'url': LOGO_URL}},
         'datePublished': date_published, 'dateModified': date_modified, 'mainEntityOfPage': {'@type': 'WebPage', '@id': page.url},
         'articleSection': section, 'inLanguage': 'it-IT' if page.lang == 'it' else 'en'}
    if keywords:
        d['keywords'] = keywords
    return d


# ---------- Footer ----------

FOOTER = {
    'it': {
        'cols': [
            ('Servizi', [('Consulenza strategica', 'consulenza-strategica.html'), ('Agenti AI', 'agenti-ai.html'), ('Infrastrutture AI', 'infrastrutture-ai.html'), ('POC Framework', 'poc-framework.html'), ('PugliAI Accelerator', 'acceleratore.html')]),
            ('Prodotti', [('VoiceAI On-Premise', 'voiceai-on-premise.html'), ('KnowledgeAI Enterprise', 'knowledgeai-enterprise.html'), ('Hosting MCP', 'hosting-mcp.html'), ('Architettura tecnica', 'architettura-tecnica.html')]),
            ('Settori', [('Manifatturiero', 'manifatturiero.html'), ('Moda e lusso', 'moda-lusso.html'), ('Servizi finanziari', 'servizi-finanziari.html'), ('Tutti i settori', 'settori.html')]),
            ('Risorse', [('Guida AI per CEO', 'guida-ai-ceo-2025.html'), ('Casi studio', 'casi-studio.html'), ('Calcolatore ROI', 'roi-calculator.html'), ('Risorse formative', 'risorse-formative.html'), ('Chi siamo', 'chi-siamo.html'), ('Contatti', 'contatti.html')]),
        ],
        'tagline': 'Consulenza AI per le PMI italiane, dal 2023. Operiamo in conformità con il GDPR e l’AI Act europeo.',
        'legal': [('Privacy', 'privacy.html'), ('Cookie', 'cookie.html'), ('Termini', 'termini.html')],
        'prefs': 'Preferenze cookie',
        'reply': 'Risposta entro 2 ore lavorative, lun–ven 9:00–18:00',
        'nav_label': 'Link del footer',
    },
    'en': {
        'cols': [
            ('Services', [('Strategic consulting', 'strategic-consulting.html'), ('AI agents', 'ai-agents.html'), ('AI infrastructure', 'ai-infrastructure.html'), ('POC Framework', 'poc-framework.html'), ('PugliAI Accelerator', 'accelerator.html')]),
            ('Products', [('VoiceAI On-Premise', 'voiceai-on-premise.html'), ('KnowledgeAI Enterprise', 'knowledgeai-enterprise.html'), ('MCP Hosting', 'mcp-hosting.html'), ('Technical architecture', 'technical-architecture.html')]),
            ('Sectors', [('Manufacturing', 'manufacturing.html'), ('Fashion & luxury', 'fashion-luxury.html'), ('Financial services', 'financial-services.html'), ('All sectors', 'sectors.html')]),
            ('Resources', [('CEO AI guide', 'ceo-ai-guide-2025.html'), ('Case studies', 'case-studies.html'), ('ROI calculator', 'roi-calculator.html'), ('Training resources', 'training-resources.html'), ('About us', 'about-us.html'), ('Contact', 'contact.html')]),
        ],
        'tagline': 'AI consulting for Italian SMEs since 2023. We operate in compliance with GDPR and the EU AI Act.',
        'legal': [('Privacy', 'privacy.html'), ('Cookies', 'cookie.html'), ('Terms', 'terms.html')],
        'prefs': 'Cookie preferences',
        'reply': 'Reply within 2 business hours, Mon–Fri 9:00–18:00 CET',
        'nav_label': 'Footer links',
    },
}


def footer(page):
    f = FOOTER[page.lang]
    p = page.prefix                                   # assets: relative to the site root
    lp = page.prefix if page.lang == 'it' else ''     # page links: IT pages live at the root, EN pages in en/
    cols = ''.join(
        f'<div class="footer__col"><h2>{esc(title)}</h2>' + ''.join(f'<a href="{lp + href}">{esc(label)}</a>' for label, href in links) + '</div>'
        for title, links in f['cols'])
    legal = ''.join(f'<a href="{lp + href}">{esc(label)}</a>' for label, href in f['legal'])
    legal += f'<a href="{lp}cookie.html" data-cookie-prefs>{esc(f["prefs"])}</a>'
    a1, a2 = ORG['addr1'], ORG['addr2']
    return (f'<footer class="footer" role="contentinfo"><div class="container"><div class="footer__top">'
            f'<div class="footer__brand"><a class="footer__wordmark" href="{lp}index.html"><img src="{p}src/assets/img/2026/mark.png" alt="" width="157" height="152">PugliAI</a>'
            f'<p class="footer__tagline">{esc(f["tagline"])}</p></div>'
            f'<nav class="footer__cols" aria-label="{esc(f["nav_label"])}">{cols}</nav></div>'
            f'<div class="footer__bottom"><div class="footer__legal">'
            f'<p>© 2026 {ORG["legal"]} · P.IVA {ORG["vat"]}</p>'
            f'<p>{a1[0]}, {a1[3]} {a1[1]} ({a1[2]}) · {a2[0]}, {a2[3]} {a2[1]} ({a2[2]})</p>'
            f'<p><a href="mailto:{ORG["email"]}">{ORG["email"]}</a> · {esc(f["reply"])}</p></div>'
            f'<div class="footer__links">{legal}</div></div></div></footer>')


# ---------- Head & shell ----------

def ga_snippet():
    return f'''<script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      (function(){{var c=null;try{{c=JSON.parse(localStorage.getItem('cookieConsent')||'null');}}catch(e){{}}
      var a=(c&&c.analytics)?'granted':'denied', m=(c&&c.marketing)?'granted':'denied';
      gtag('consent','default',{{analytics_storage:a,ad_storage:m,ad_user_data:m,ad_personalization:m,wait_for_update:500}});}})();
      gtag('js', new Date());
      gtag('config', '{GA_ID}', {{ anonymize_ip: true }});
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>'''


def head(page):
    it_path = page.path if page.lang == 'it' else page.alt
    en_path = page.alt if page.lang == 'it' else page.path
    hreflang = ''
    if it_path:
        hreflang += f'\n    <link rel="alternate" hreflang="it-IT" href="{url_of(it_path)}">'
    if en_path:
        hreflang += f'\n    <link rel="alternate" hreflang="en" href="{url_of(en_path)}">'
    x_default = url_of(it_path) if it_path else page.url
    hreflang += f'\n    <link rel="alternate" hreflang="x-default" href="{x_default}">'
    locale = 'it_IT' if page.lang == 'it' else 'en_US'
    alt_locale = 'en_US' if page.lang == 'it' else 'it_IT'
    robots = '\n    <meta name="robots" content="noindex, follow">' if page.noindex else ''
    ld = ''.join(f'\n    <script type="application/ld+json">{json.dumps(d, ensure_ascii=False)}</script>' for d in page.jsonld)
    p = page.prefix
    return f'''<!DOCTYPE html>
<html lang="{page.lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{esc(page.title)}</title>
    <meta name="description" content="{esc(page.description)}">{robots}
    <link rel="canonical" href="{page.url}">{hreflang}
    <meta property="og:title" content="{esc(page.title)}">
    <meta property="og:description" content="{esc(page.description)}">
    <meta property="og:type" content="{page.og_type}">
    <meta property="og:url" content="{page.url}">
    <meta property="og:image" content="{page.og_image}">
    <meta property="og:site_name" content="PugliAI">
    <meta property="og:locale" content="{locale}">
    <meta property="og:locale:alternate" content="{alt_locale}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{esc(page.title)}">
    <meta name="twitter:description" content="{esc(page.description)}">
    <meta name="twitter:image" content="{page.og_image}">
    <meta name="twitter:site" content="@PugliAI">
    <meta name="theme-color" content="#f2f0eb">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="preload" href="{p}src/assets/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="{p}src/assets/css/stylesheet.css">
    {ga_snippet()}{ld}{page.extra_head}
</head>'''


def lead_observer(source):
    return f'''<script>
    (function () {{
      var success = document.getElementById('form-success');
      if (!success || typeof MutationObserver === 'undefined') return;
      var fired = false;
      new MutationObserver(function () {{
        if (!fired && success.style.display !== 'none') {{
          fired = true;
          if (typeof gtag === 'function') gtag('event', 'generate_lead', {{ source: '{source}' }});
        }}
      }}).observe(success, {{ attributes: true, attributeFilter: ['style'] }});
    }})();
    </script>'''


def shell(page, body_html):
    p = page.prefix
    nav = '' if page.own_header else '\n    <div id="nav-placeholder"></div>'
    scripts = ''
    if not page.own_header:
        scripts += f'\n    <script src="{p}src/assets/js/navigation.js" defer></script>'
    scripts += f'\n    <script src="{p}src/assets/js/consent.js" defer></script>'
    if page.form_source:
        scripts += f'\n    <script src="{p}src/assets/js/form-security.js" defer></script>\n    {lead_observer(page.form_source)}'
    if page.extra_scripts:
        scripts += '\n    ' + page.extra_scripts
    if page.chat:
        scripts += '\n    ' + CHAT_WIDGET
    body_cls = f' class="{page.body_class}"' if page.body_class else ''
    main_cls = f' class="{page.main_class}"' if page.main_class else ''
    return (f'{head(page)}\n<body{body_cls}>{nav}\n    <main id="main-content"{main_cls}>\n{body_html}\n    </main>\n    '
            f'{footer(page)}{page.sticky_cta}{scripts}\n</body>\n</html>\n')
