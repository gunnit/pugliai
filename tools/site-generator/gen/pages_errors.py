"""GitHub Pages fallback with bilingual, root-relative recovery paths.

GitHub serves /404.html at the original missing URL, including arbitrary nested
paths. A root prefix and static header keep assets and navigation independent of
that URL. Both languages are visible because this single fallback covers /en/ too.
"""
from .html import btn, esc, ghost_link, grid, link, section
from .site import Page, ORG, ld_webpage


class RecoveryPage(Page):
    @property
    def prefix(self):
        return '/'


def build_all():
    page = RecoveryPage(
        lang='it', path='404.html',
        title='Pagina non trovata · Page not found | PugliAI',
        description='Pagina non trovata. Riparti dalla home PugliAI. Page not found: return to the PugliAI homepage.',
        noindex=True, own_header=True,
    )
    header = (
        '<a href="#recovery-content" class="skip-link">Vai al contenuto · Skip to content</a>'
        '<header class="lp-header" role="banner"><div class="lp-header__inner">'
        '<a class="logo" href="/" aria-label="PugliAI — home">PugliAI.</a>'
        '<nav class="lp-header__actions" aria-label="Home · Homepage">'
        '<a class="lang" href="/" lang="it" aria-label="Home in italiano"><strong>IT</strong></a>'
        '<a class="lang" href="/en/" lang="en" aria-label="Homepage in English"><strong>EN</strong></a>'
        '</nav></div></header>'
    )
    hero = (
        '<section class="page-head" id="recovery-content" tabindex="-1"><div class="container"><div class="page-head__inner">'
        '<p class="eyebrow">404</p><h1 class="h1">Pagina non trovata.</h1>'
        '<p class="lead">Il link potrebbe essere cambiato o contenere un errore. Riparti dalla home o scegli una sezione qui sotto.</p>'
        '<p class="lead" lang="en"><strong>Page not found.</strong> The link may have changed or contain a typo. Return to the homepage or choose a section below.</p>'
        '<div class="hero__actions">'
        + btn('Home in italiano', '/')
        + '<span lang="en">' + ghost_link('Homepage in English', '/en/') + '</span>'
        + '</div></div></div></section>'
    )
    it_links = (
        '<nav class="card stack" lang="it" aria-label="Sezioni in italiano">'
        '<h2 class="h3">In italiano</h2>'
        + link('Servizi', '/servizi.html')
        + link('Prodotti', '/prodotti.html')
        + link('Contatti', '/contatti.html')
        + '</nav>'
    )
    en_links = (
        '<nav class="card stack" lang="en" aria-label="Sections in English">'
        '<h2 class="h3">In English</h2>'
        + link('Services', '/en/services.html')
        + link('Products', '/en/products.html')
        + link('Contact', '/en/contact.html')
        + '</nav>'
    )
    help_link = (
        '<p class="body-sm muted mt-8">Hai bisogno di aiuto? '
        '<span lang="en">Need a hand?</span> '
        f'<a href="mailto:{ORG["email"]}">{esc(ORG["email"])}</a></p>'
    )
    page.jsonld = [ld_webpage(page, page.title)]
    yield page, header + hero + section(grid([it_links, en_links], 2) + help_link, container='container--narrow')
