"""Reusable page templates driven by content specs (see pages_*.py)."""
from .html import *
from .site import Page, ld_webpage, ld_faq, ld_breadcrumb, url_of, SITE

CTA_DEFAULT = {
    'it': dict(h2='Parliamo della tua impresa.', lead='45 minuti con un consulente PugliAI: analisi dei processi, opportunità prioritarie e un report scritto con la stima del ROI. Gratuita e senza impegno.',
               btn='Prenota la sessione strategica', href='sessione-strategica.html', ghost='Scrivi a sales@pugliai.com'),
    'en': dict(h2='Let’s talk about your business.', lead='45 minutes with a PugliAI consultant: process review, priority opportunities and a written report with an ROI estimate. Free and without obligation.',
               btn='Book the strategy session', href='strategy-session.html', ghost='Email sales@pugliai.com'),
}
FAQ_TITLE = {'it': 'Domande frequenti', 'en': 'Frequently asked questions'}
HOME_LABEL = {'it': 'Home', 'en': 'Home'}


def render_sections(page, sections):
    out = ''
    for s in sections:
        kind = s[0]
        if kind == 'features':
            _, eb, h2, lead, items, cols = s
            cards = [feature_card(*it) for it in items]
            out += section(section_head(eb, h2, lead) + grid(cards, cols))
        elif kind == 'features_white':
            _, eb, h2, lead, items, cols = s
            cards = [feature_card(*it) for it in items]
            out += section(section_head(eb, h2, lead) + grid(cards, cols), cls='section--white')
        elif kind == 'services':
            _, eb, h2, lead, items = s
            cards = [service_card(*it) for it in items]
            out += section(section_head(eb, h2, lead) + grid(cards, 2))
        elif kind == 'steps':
            _, eb, h2, lead, items = s
            out += section(section_head(eb, h2, lead) + steps(items, cols=len(items) if len(items) in (3, 4) else 4), cls='section--white')
        elif kind == 'packages':
            _, eb, h2, lead, items, note, more = s[:7]
            cards = [price_card(*it) for it in items]
            note_html = f'<div class="packages__note"><p>{esc(note)}</p>{link(more[0], more[1]) if more else ""}</div>' if note else ''
            out += section(section_head(eb, h2, lead) + grid(cards, 3) + note_html, id_=s[7] if len(s) > 7 else '')
        elif kind == 'table':
            _, eb, h2, lead, head, rows = s[:6]
            out += section(section_head(eb, h2, lead) + table(head, rows), container='container--narrow', id_=(s[6] if len(s) > 6 else ''))
        elif kind == 'specs':
            _, eb, h2, lead, groups = s
            cards = [card(f'<h3 class="h5" style="margin-bottom:16px;">{esc(t)}</h3>{checks(items, "checks--sm")}') for t, items in groups]
            out += section(section_head(eb, h2, lead) + grid(cards, len(groups) if len(groups) <= 3 else 3))
        elif kind == 'band':
            _, eb, h2, lead, btn_label, btn_href, chips, img = s
            out += band(eb, h2, lead, btn_label, btn_href, chips, page.asset(img))
        elif kind == 'stats':
            out += section(stats(s[1]), cls='section--tight')
        elif kind == 'quotes':
            _, eb, h2, items = s
            out += section(section_head(eb, h2) + grid([quote_card(*q) for q in items], 2))
        elif kind == 'links':
            _, eb, h2, items = s
            cards = [card(f'<h3 class="h5 card__title" style="margin-top:0;">{esc(t)}</h3><p class="card__text body-sm">{esc(d)}</p>', href=h) for t, d, h in items]
            out += section(section_head(eb, h2) + grid(cards, 3), cls='section--flush-top')
        elif kind == 'faq':
            _, items = s
            out += faq_section(items, FAQ_TITLE[page.lang])
        elif kind == 'answer':
            _, lead_html, facts, meta = s
            out += section(answer_block(lead_html, facts, meta), cls='section--tight section--flush-bottom', container='container--narrow')
        elif kind == 'text':
            _, eb, h2, paragraphs = s
            body = ''.join(f'<p class="lead" style="color:var(--text);">{p}</p>' for p in paragraphs)
            out += section(section_head(eb, h2) + f'<div class="prose" style="max-width:760px;">{body}</div>', container='container--narrow', cls='section--flush-top')
        elif kind == 'cta':
            _, h2, lead, btn_label, href, ghost_label, ghost_href = s
            out += cta_band(h2, lead, btn_label, href, ghost_label, ghost_href)
        elif kind == 'cta_default':
            d = CTA_DEFAULT[page.lang]
            out += cta_band(d['h2'], d['lead'], d['btn'], d['href'], d['ghost'], 'mailto:sales@pugliai.com')
        elif kind == 'html':
            out += s[1]
        elif kind == 'grid_cards':
            _, eb, h2, lead, cards_html, cols = s
            out += section(section_head(eb, h2, lead) + grid(cards_html, cols))
        elif kind == 'photo_band':
            _, img, alt, caption = s
            out += section(f'<figure class="photo-fig"><img class="photo photo--cover" src="{page.asset(img)}" alt="{esc(alt)}" loading="lazy" width="1600" height="900"><figcaption>{esc(caption)}</figcaption></figure>', cls='section--flush-top')
        else:
            raise ValueError('unknown section ' + kind)
    return out


def detail_page(lang, spec, jsonld_extra=None):
    """Inner page with hero (text + photo), optional answer block, then sections."""
    page = Page(lang=lang, path=spec['path'], title=spec['title'], description=spec['description'], alt=spec.get('alt'),
                chat=spec.get('chat', False), noindex=spec.get('noindex', False), form_source=spec.get('form_source'),
                extra_scripts=spec.get('extra_scripts', ''), extra_head=spec.get('extra_head', ''))
    actions = btn(*spec['cta']) if spec.get('cta') else ''
    if spec.get('ghost'):
        actions += ghost_link(*spec['ghost'])
    crumbs = spec.get('breadcrumb')
    bc_html = breadcrumb(crumbs) if crumbs else ''
    if spec.get('image'):
        glass_html = glass_checks(*spec['glass']) if spec.get('glass') else ''
        hero = inner_hero(spec['eyebrow'], spec['h1'], spec['lead'], actions, page.asset(spec['image'][0]), spec['image'][1], glass_html)
        if bc_html:
            hero = hero.replace('<div class="hero__text">', '<div class="hero__text">' + bc_html, 1)
    else:
        hero = page_head(spec.get('eyebrow', ''), spec['h1'], spec['lead'], bc_html, actions)
    body = hero + render_sections(page, spec['sections'])
    ld = [ld_webpage(page, spec['title'], types=spec.get('ld_types'))]
    if crumbs:
        ld.append(ld_breadcrumb([(name, url_of(spec['crumb_urls'][i]) if 'crumb_urls' in spec else page.url) for i, (name, _) in enumerate(crumbs)]))
    for s in spec['sections']:
        if s[0] == 'faq':
            ld.append(ld_faq(s[1]))
    if jsonld_extra:
        ld.extend(jsonld_extra)
    page.jsonld = ld + spec.get('jsonld', [])
    return page, body
