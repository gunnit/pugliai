"""HTML component helpers for the PugliAI site generator.

Every helper returns a string of markup that relies on the classes defined in
src/assets/css/stylesheet.css. Copy passed in is expected to be plain text and
is escaped unless a helper explicitly accepts HTML (parameters named *_html).
"""
import html as _html

ICONS = {
    'arrow': '<path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path>',
    'check': '<path d="M5 12l4 4L19 7"></path>',
    'shield': '<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"></path>',
    'server': '<rect x="3" y="4" width="18" height="6" rx="2"></rect><rect x="3" y="14" width="18" height="6" rx="2"></rect><path d="M7 7h.01M7 17h.01"></path>',
    'mic': '<rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0"></path><path d="M12 18v3"></path>',
    'book': '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"></path><path d="M4 19a2 2 0 0 1 2-2h13"></path>',
    'plug': '<path d="M9 7V3M15 7V3"></path><path d="M6 7h12v4a6 6 0 0 1-12 0z"></path><path d="M12 17v4"></path>',
    'bolt': '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"></path>',
    'mail': '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>',
    'pin': '<path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z"></path><circle cx="12" cy="11" r="2"></circle>',
    'clock': '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    'globe': '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>',
    'sparkle': '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>',
    'chart': '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>',
    'users': '<circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><path d="M16 4.5a3.5 3.5 0 0 1 0 7"></path><path d="M17.5 13.5a6.5 6.5 0 0 1 4 6.5"></path>',
    'doc': '<path d="M7 3h7l5 5v13H7z"></path><path d="M14 3v5h5"></path><path d="M10 13h6M10 17h6"></path>',
    'cog': '<circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"></path>',
    'factory': '<path d="M3 21V9l6 4V9l6 4V9l6 4v8z"></path><path d="M3 21h18"></path>',
    'bag': '<path d="M6 8h12l1 13H5z"></path><path d="M9 8a3 3 0 0 1 6 0"></path>',
    'bank': '<path d="M3 10l9-6 9 6"></path><path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 19h18"></path>',
    'chat': '<path d="M4 5h16v11H9l-5 4z"></path>',
    'lock': '<rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path>',
    'chevron': '<path d="M9 6l6 6-6 6"></path>',
    'calendar': '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>',
    'cpu': '<rect x="6" y="6" width="12" height="12" rx="2"></rect><rect x="9" y="9" width="6" height="6" rx="1"></rect><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"></path>',
    'heart': '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"></path>',
    'plane': '<path d="M2 12l20-8-6 18-3-8-11-2z"></path>',
    'leaf': '<path d="M4 20c0-9 5-14 16-16-1 11-6 16-16 16z"></path><path d="M4 20c4-6 8-9 12-11"></path>',
    'search': '<circle cx="11" cy="11" r="6"></circle><path d="M20 20l-4.5-4.5"></path>',
    'star': '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.3L12 17.5 6.4 20.4l1.1-6.3L3 9.7l6.2-.9z"></path>',
    'eye': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>',
    'layers': '<path d="M12 3l9 5-9 5-9-5 9-5z"></path><path d="M3 13l9 5 9-5"></path><path d="M3 17l9 5 9-5"></path>',
    'rocket': '<path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2 2 0 0 0-2.9-.1z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-4A13 13 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"></path><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"></path>',
    'graduation': '<path d="M22 10L12 5 2 10l10 5 10-5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>',
    'trend': '<path d="M3 17l6-6 4 4 8-8"></path><path d="M14 7h7v7"></path>',
    'wallet': '<rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path><path d="M16 14h2"></path>',
    'phone': '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"></path>',
    'database': '<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"></path>',
    'truck': '<path d="M3 7h11v9H3z"></path><path d="M14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle>',
    'scissors': '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.5 15.5M8.5 8.5L20 20"></path>',
    'building': '<rect x="4" y="3" width="16" height="18" rx="1"></rect><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"></path>',
    'hand': '<path d="M8 12V6a2 2 0 0 1 4 0v6"></path><path d="M12 11V4a2 2 0 0 1 4 0v8"></path><path d="M16 12V7a2 2 0 0 1 4 0v8a7 7 0 0 1-14 0v-2a2 2 0 0 1 2-2z"></path>',
    'award': '<circle cx="12" cy="9" r="6"></circle><path d="M8.5 14L7 22l5-3 5 3-1.5-8"></path>',
    'flag': '<path d="M5 22V4"></path><path d="M5 4h12l-2 4 2 4H5"></path>',
    'x': '<path d="M6 6l12 12M18 6L6 18"></path>',
}


def esc(s):
    return _html.escape(str(s), quote=True)


def icon(name, size=20, stroke=1.5, cls=''):
    c = f' class="{cls}"' if cls else ''
    return (f'<svg{c} width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="{stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">{ICONS[name]}</svg>')


# ---------- inline elements ----------

def btn(label, href, kind='primary', arrow=True, size='', attrs='', aria=''):
    cls = f'btn btn--{kind}' + (f' btn--{size}' if size else '')
    a = f' aria-label="{esc(aria)}"' if aria else ''
    icon_html = icon('arrow', 16, 1.75) if arrow and kind in ('primary', 'outline-light') else ''
    return f'<a class="{cls}" href="{esc(href)}"{a}{(" " + attrs) if attrs else ""}>{esc(label)}{icon_html}</a>'


def link(label, href, cls='link-arrow'):
    return f'<a class="{cls}" href="{esc(href)}">{esc(label)}{icon("arrow", 14, 1.75)}</a>'


def ghost_link(label, href, chevron=True):
    return f'<a class="btn btn--ghost" href="{esc(href)}">{esc(label)}{icon("chevron", 16, 1.75) if chevron else ""}</a>'


def tag(label, kind=''):
    return f'<span class="tag{(" tag--" + kind) if kind else ""}">{esc(label)}</span>'


def icon_badge(name, size='', kind=''):
    cls = 'icon-badge' + (f' icon-badge--{size}' if size else '') + (f' icon-badge--{kind}' if kind else '')
    return f'<span class="{cls}">{icon(name, 24 if size == "lg" else 20)}</span>'


def avatar(initials):
    return f'<span class="avatar" aria-hidden="true">{esc(initials)}</span>'


def checks(items, cls=''):
    return f'<ul class="checks{(" " + cls) if cls else ""}">' + ''.join(f'<li>{esc(i)}</li>' for i in items) + '</ul>'


def checks_html(items_html, cls=''):
    return f'<ul class="checks{(" " + cls) if cls else ""}">' + ''.join(f'<li>{i}</li>' for i in items_html) + '</ul>'


def eyebrow(text):
    return f'<p class="eyebrow">{esc(text)}</p>'


# ---------- layout ----------

def section(inner_html, cls='', container='', id_=''):
    c = ' ' + cls if cls else ''
    cc = ' ' + container if container else ''
    i = f' id="{id_}"' if id_ else ''
    return f'<section class="section{c}"{i}><div class="container{cc}">{inner_html}</div></section>'


def section_head(eb, h2, lead=None, center=False, lead_html=None, h2_html=None):
    cls = 'section-head section-head--center' if center else 'section-head'
    out = f'<div class="{cls}">' + (eyebrow(eb) if eb else '')
    out += f'<h2 class="h2">{h2_html if h2_html else esc(h2)}</h2>'
    if lead_html:
        out += f'<p class="lead">{lead_html}</p>'
    elif lead:
        out += f'<p class="lead">{esc(lead)}</p>'
    return out + '</div>'


def grid(items_html, cols=3, cls=''):
    return f'<div class="grid grid--{cols}{(" " + cls) if cls else ""}">' + ''.join(items_html) + '</div>'


def card(inner_html, cls='', href=None):
    if href:
        return f'<a class="card card--link{(" " + cls) if cls else ""}" href="{esc(href)}">{inner_html}</a>'
    return f'<div class="card{(" " + cls) if cls else ""}">{inner_html}</div>'


def feature_card(icon_name, title, text, href=None, link_label=None):
    inner = f'{icon_badge(icon_name)}<h3 class="h5 card__title">{esc(title)}</h3><p class="card__text body-sm">{esc(text)}</p>'
    if href and link_label:
        inner += f'<div class="mt-4">{link(link_label, href)}</div>'
        return card(inner)
    return card(inner, href=href)


def service_card(icon_name, title, text, items, href, link_label, price=None):
    head = f'<div class="cluster" style="justify-content:space-between;align-items:flex-start;">{icon_badge(icon_name, "lg")}{tag(price) if price else ""}</div>'
    inner = (f'{head}<h3 class="h3 card__title" style="font-size:24px;">{esc(title)}</h3>'
             f'<p class="card__text" style="margin-bottom:20px;">{esc(text)}</p>{checks(items)}'
             f'<div class="mt-6">{link(link_label, href)}</div>')
    return card(inner, cls='card--pad-lg')


def price_card(name, price, duration, one_liner, items, href, link_label):
    inner = (f'<div class="price-card"><div class="price-card__head"><h3 class="h4">{esc(name)}</h3>{tag(duration)}</div>'
             f'<p class="price-card__price">{esc(price)}</p><p class="price-card__one">{esc(one_liner)}</p><hr class="hairline">'
             f'{checks(items)}<div class="mt-2">{link(link_label, href)}</div></div>')
    return card(inner)


def steps(items, cols=4, numbered=True, years=False):
    out = f'<div class="steps steps--{cols}">'
    for i, it in enumerate(items):
        title, text = it[0], it[1]
        if years:
            out += f'<div class="step"><p class="step__year">{esc(it[2])}</p><h3 class="h4">{esc(title)}</h3><p>{esc(text)}</p></div>'
        else:
            num = f'<p class="step__num">0{i + 1}</p>' if numbered else ''
            out += f'<div class="step">{num}<h3 class="h4">{esc(title)}</h3><p>{esc(text)}</p></div>'
    return out + '</div>'


def stats(items):
    return '<div class="stats">' + ''.join(
        f'<div class="stat"><p class="stat__num">{esc(n)}</p><p class="stat__label">{esc(l)}</p></div>' for n, l in items) + '</div>'


def quote_card(text, initials, name, role):
    return card(f'<div class="quote-card"><span class="quote-card__mark" aria-hidden="true">“</span>'
                f'<p class="quote-card__text">{esc(text)}</p><div class="quote-card__who">{avatar(initials)}'
                f'<div><p class="label">{esc(name)}</p><p class="caption">{esc(role)}</p></div></div></div>', cls='card--pad-lg')


def faq(items, title=None, id_='faq'):
    out = f'<h2 class="h3 mb-6">{esc(title)}</h2>' if title else ''
    out += '<div class="faq">'
    for q, a in items:
        a_html = a if a.lstrip().startswith('<') else f'<p>{esc(a)}</p>'
        out += f'<details class="faq__item"><summary>{esc(q)}</summary><div class="faq__a">{a_html}</div></details>'
    return out + '</div>'


def faq_section(items, title, container='container--narrow', cls='section--flush-top'):
    return section(faq(items, title), cls=cls, container=container)


def cta_band(h2, lead, btn_label, btn_href, ghost_label=None, ghost_href=None):
    ghost = (f'<a class="btn btn--ghost" href="{esc(ghost_href)}">{icon("mail", 18)}{esc(ghost_label)}</a>'
             if ghost_label else '')
    return (f'<section class="cta-band"><div class="container"><div class="cta-band__inner">'
            f'<h2 class="h2">{esc(h2)}</h2><p class="lead">{esc(lead)}</p>'
            f'<div class="cta-band__actions">{btn(btn_label, btn_href)}{ghost}</div></div></div></section>')


def band(eb, h2, lead, btn_label, btn_href, chips, img_src, img_alt=''):
    chip_html = ''.join(f'<span class="tag tag--light">{icon("check", 12, 2.2)}{esc(c)}</span>' for c in chips)
    return (f'<section class="band"><div class="container"><div class="band__grid">'
            f'<div class="band__media"><img src="{esc(img_src)}" alt="{esc(img_alt)}" loading="lazy" width="1600" height="1067">'
            f'<div class="band__rect band__rect--a" aria-hidden="true"></div><div class="band__rect band__rect--b" aria-hidden="true"></div>'
            f'<div class="band__chips">{chip_html}</div></div>'
            f'<div class="band__text">{eyebrow(eb)}<h2 class="h2">{esc(h2)}</h2><p class="lead">{esc(lead)}</p>'
            f'<div>{btn(btn_label, btn_href, kind="outline-light")}</div></div></div></div></section>')


def glass(inner_html, cls=''):
    return f'<div class="glass{(" " + cls) if cls else ""}">{inner_html}</div>'


def glass_checks(title, rows, cls=''):
    return glass(f'<p class="label" style="margin:0 0 10px;">{esc(title)}</p>{checks(rows, "checks--sm")}', cls)


def inner_hero(eb, h1, lead, actions_html, img_src, img_alt='', glass_html='', img_w=1600, img_h=1067, priority=True):
    load = 'fetchpriority="high"' if priority else 'loading="lazy"'
    glass_wrap = f'<div class="hero__glass">{glass_html}</div>' if glass_html else ''
    return (f'<section class="hero"><div class="container"><div class="hero__grid">'
            f'<div class="hero__text">{eyebrow(eb)}<h1 class="h1">{esc(h1)}</h1><p class="lead">{esc(lead)}</p>'
            f'<div class="hero__actions">{actions_html}</div></div>'
            f'<div class="hero__media"><img src="{esc(img_src)}" alt="{esc(img_alt)}" width="{img_w}" height="{img_h}" {load}>'
            f'{glass_wrap}</div></div></div></section>')


def page_head(eb, h1, lead, breadcrumb_html='', actions_html='', lead_html=None):
    actions_wrap = f'<div class="hero__actions">{actions_html}</div>' if actions_html else ''
    return (f'<section class="page-head"><div class="container"><div class="page-head__inner">{breadcrumb_html}'
            f'{eyebrow(eb) if eb else ""}<h1 class="h1">{esc(h1)}</h1>'
            f'<p class="lead">{lead_html if lead_html else esc(lead)}</p>'
            f'{actions_wrap}</div></div></section>')


def breadcrumb(items):
    """items: list of (label, href) with the last item current (href ignored)."""
    parts = []
    for i, (label, href) in enumerate(items):
        if i == len(items) - 1:
            parts.append(f'<span aria-current="page">{esc(label)}</span>')
        else:
            parts.append(f'<a href="{esc(href)}">{esc(label)}</a><span aria-hidden="true">/</span>')
    return f'<nav class="breadcrumb" aria-label="Breadcrumb">{"".join(parts)}</nav>'


def table(head, rows, brand_col=1):
    th = ''.join(('<th class="is-brand">' if i == brand_col else '<th>') + esc(h) + '</th>' for i, h in enumerate(head))
    body = ''
    for r in rows:
        tds = ''
        for i, c in enumerate(r):
            if i == brand_col:
                tds += f'<td class="is-brand">{esc(c)}</td>'
            elif i == 0:
                tds += f'<td>{esc(c)}</td>'
            else:
                tds += f'<td class="is-muted">{esc(c)}</td>'
        body += f'<tr>{tds}</tr>'
    return f'<div class="table-wrap"><div class="table"><table><thead><tr>{th}</tr></thead><tbody>{body}</tbody></table></div></div>'


def answer_block(lead_html, facts, meta_html=''):
    dl = ''.join(f'<dt>{esc(k)}</dt><dd>{esc(v)}</dd>' for k, v in facts)
    meta = f'<p class="answer-block__meta">{meta_html}</p>' if meta_html else ''
    return f'<div class="answer-block"><p class="answer-block__lead">{lead_html}</p><dl class="answer-block__facts">{dl}</dl>{meta}</div>'


def spec_grid(items, cols=3):
    return f'<div class="grid grid--{cols}" style="gap:16px 24px;">' + ''.join(
        f'<div class="spec"><p class="caption">{esc(k)}</p><p class="label">{esc(v)}</p></div>' for k, v in items) + '</div>'


def field(label, id_, name, type_='text', required=True, autocomplete='', placeholder='', hint=''):
    req = ' required aria-required="true"' if required else ''
    ac = f' autocomplete="{autocomplete}"' if autocomplete else ''
    ph = f' placeholder="{esc(placeholder)}"' if placeholder else ''
    lab_cls = 'form-label form-label--required' if required else 'form-label'
    err = f'<span id="{id_}-error" class="form-error" style="display:none;" aria-live="polite"></span>'
    hint_html = f'<span class="form-hint">{esc(hint)}</span>' if hint else ''
    if type_ == 'textarea':
        ctl = f'<textarea id="{id_}" name="{name}" rows="4" class="form-input"{req}{ph} aria-describedby="{id_}-error"></textarea>'
    else:
        ctl = f'<input type="{type_}" id="{id_}" name="{name}" class="form-input"{ac}{req}{ph} aria-describedby="{id_}-error">'
    return f'<div class="field form-group"><label for="{id_}" class="{lab_cls}">{esc(label)}</label>{ctl}{hint_html}{err}</div>'


def select(label, id_, name, options, required=True, placeholder=''):
    req = ' required aria-required="true"' if required else ''
    opts = (f'<option value="">{esc(placeholder)}</option>' if placeholder else '') + ''.join(
        f'<option value="{esc(v)}">{esc(l)}</option>' for v, l in options)
    lab_cls = 'form-label form-label--required' if required else 'form-label'
    return f'<div class="field form-group"><label for="{id_}" class="{lab_cls}">{esc(label)}</label><select id="{id_}" name="{name}" class="form-input"{req}>{opts}</select></div>'
