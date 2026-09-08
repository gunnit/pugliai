/**
 * PugliAI — site header (2026 design system)
 *
 * Injects the announcement bar and the sticky header into `#nav-placeholder`
 * (or at the start of <body>). One configuration per language; the menu is
 * edited here and applies to every page. No dependencies.
 */

(function () {
    'use strict';

    var isEnglish = window.location.pathname.indexOf('/en/') !== -1;

    // Content subdirectories (e.g. /guida-ai/) reuse the Italian config but sit
    // one level deep, so relative links need a '../' prefix. English pages bake
    // '../' into their own asset paths and never live in a subdirectory.
    var segments = window.location.pathname.split('/').filter(Boolean);
    var depth = Math.max(0, segments.length - 1);
    var subdirPrefix = (!isEnglish && depth >= 1) ? new Array(depth + 1).join('../') : '';

    function withPrefix(path) {
        if (!subdirPrefix || !path) return path;
        if (/^(https?:|\/|#|mailto:)/.test(path)) return path;
        return subdirPrefix + path;
    }

    var ICON = {
        chevron: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"></path></svg>',
        globe: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path></svg>',
        sparkle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path></svg>'
    };

    var CONFIG = {
        it: {
            assets: 'src/assets/img/2026/',
            home: 'index.html',
            logoAria: 'PugliAI — torna alla home',
            menuLabel: 'Menu principale',
            openMenu: 'Apri il menu',
            closeMenu: 'Chiudi il menu',
            skip: 'Vai al contenuto principale',
            announce: {
                text: 'Candidature aperte 2026 · PugliAI Accelerator: 16 settimane per startup basate sull’AI',
                link: 'Scopri il programma',
                href: 'acceleratore.html'
            },
            items: [
                { label: 'Servizi', href: 'servizi.html', all: 'Tutti i servizi', sub: [
                    { label: 'Consulenza strategica', href: 'consulenza-strategica.html' },
                    { label: 'Agenti AI', href: 'agenti-ai.html' },
                    { label: 'Infrastrutture AI', href: 'infrastrutture-ai.html' },
                    { label: 'POC Framework', href: 'poc-framework.html' },
                    { label: 'PugliAI Accelerator', href: 'acceleratore.html' }
                ] },
                { label: 'Prodotti', href: 'prodotti.html', all: 'Tutti i prodotti', sub: [
                    { label: 'VoiceAI On-Premise', href: 'voiceai-on-premise.html' },
                    { label: 'KnowledgeAI Enterprise', href: 'knowledgeai-enterprise.html' },
                    { label: 'Hosting MCP', href: 'hosting-mcp.html' },
                    { label: 'Architettura tecnica', href: 'architettura-tecnica.html' }
                ] },
                { label: 'Settori', href: 'settori.html', all: 'Tutti i settori', sub: [
                    { label: 'Manifatturiero', href: 'manifatturiero.html' },
                    { label: 'Moda e lusso', href: 'moda-lusso.html' },
                    { label: 'Servizi finanziari', href: 'servizi-finanziari.html' }
                ] },
                { label: 'Risorse', href: 'risorse.html', all: 'Tutte le risorse', sub: [
                    { label: 'Guida AI per CEO', href: 'guida-ai-ceo-2025.html' },
                    { label: 'Casi studio', href: 'casi-studio.html' },
                    { label: 'Calcolatore ROI', href: 'roi-calculator.html' },
                    { label: 'Risorse formative', href: 'risorse-formative.html' },
                    { label: 'Investimenti AI', href: 'investimenti-ai.html' }
                ] },
                { label: 'Chi siamo', href: 'chi-siamo.html' }
            ],
            contact: { label: 'Contatti', href: 'contatti.html' },
            cta: { label: 'Sessione strategica', short: 'Prenota', href: 'sessione-strategica.html', aria: 'Prenota la sessione strategica gratuita' },
            lang: { current: 'IT', other: 'EN', aria: 'Read this page in English' }
        },
        en: {
            assets: '../src/assets/img/2026/',
            home: 'index.html',
            logoAria: 'PugliAI — back to the homepage',
            menuLabel: 'Main menu',
            openMenu: 'Open menu',
            closeMenu: 'Close menu',
            skip: 'Skip to main content',
            announce: {
                text: 'Applications open 2026 · PugliAI Accelerator: 16 weeks for AI-driven startups',
                link: 'See the programme',
                href: 'accelerator.html'
            },
            items: [
                { label: 'Services', href: 'services.html', all: 'All services', sub: [
                    { label: 'Strategic consulting', href: 'strategic-consulting.html' },
                    { label: 'AI agents', href: 'ai-agents.html' },
                    { label: 'AI infrastructure', href: 'ai-infrastructure.html' },
                    { label: 'POC Framework', href: 'poc-framework.html' },
                    { label: 'PugliAI Accelerator', href: 'accelerator.html' }
                ] },
                { label: 'Products', href: 'products.html', all: 'All products', sub: [
                    { label: 'VoiceAI On-Premise', href: 'voiceai-on-premise.html' },
                    { label: 'KnowledgeAI Enterprise', href: 'knowledgeai-enterprise.html' },
                    { label: 'MCP Hosting', href: 'mcp-hosting.html' },
                    { label: 'Technical architecture', href: 'technical-architecture.html' }
                ] },
                { label: 'Sectors', href: 'sectors.html', all: 'All sectors', sub: [
                    { label: 'Manufacturing', href: 'manufacturing.html' },
                    { label: 'Fashion & luxury', href: 'fashion-luxury.html' },
                    { label: 'Financial services', href: 'financial-services.html' }
                ] },
                { label: 'Resources', href: 'resources.html', all: 'All resources', sub: [
                    { label: 'CEO AI guide', href: 'ceo-ai-guide-2025.html' },
                    { label: 'Case studies', href: 'case-studies.html' },
                    { label: 'ROI calculator', href: 'roi-calculator.html' },
                    { label: 'Training resources', href: 'training-resources.html' },
                    { label: 'AI investment', href: 'ai-investment.html' }
                ] },
                { label: 'About', href: 'about-us.html' }
            ],
            contact: { label: 'Contact', href: 'contact.html' },
            cta: { label: 'Strategy session', short: 'Book', href: 'strategy-session.html', aria: 'Book your free strategy session' },
            lang: { current: 'EN', other: 'IT', aria: 'Leggi questa pagina in italiano' }
        }
    };

    // Italian ⇄ English page mapping (kept in sync with language-switcher.js)
    var IT_TO_EN = {
        'index.html': 'index.html',
        'chi-siamo.html': 'about-us.html',
        'gregor-maric.html': 'gregor-maric.html',
        'contatti.html': 'contact.html',
        'sessione-strategica.html': 'strategy-session.html',
        'servizi.html': 'services.html',
        'infrastrutture-ai.html': 'ai-infrastructure.html',
        'agenti-ai.html': 'ai-agents.html',
        'consulenza-strategica.html': 'strategic-consulting.html',
        'prodotti.html': 'products.html',
        'voiceai-on-premise.html': 'voiceai-on-premise.html',
        'knowledgeai-enterprise.html': 'knowledgeai-enterprise.html',
        'hosting-mcp.html': 'mcp-hosting.html',
        'settori.html': 'sectors.html',
        'manifatturiero.html': 'manufacturing.html',
        'moda-lusso.html': 'fashion-luxury.html',
        'servizi-finanziari.html': 'financial-services.html',
        'investimenti-ai.html': 'ai-investment.html',
        'guida-ai-ceo-2025.html': 'ceo-ai-guide-2025.html',
        'casi-studio.html': 'case-studies.html',
        'risorse-formative.html': 'training-resources.html',
        'risorse.html': 'resources.html',
        'poc-framework.html': 'poc-framework.html',
        'roi-calculator.html': 'roi-calculator.html',
        'architettura-tecnica.html': 'technical-architecture.html',
        'acceleratore.html': 'accelerator.html',
        'acceleratore-candidatura.html': 'accelerator-apply.html',
        'acceleratore-success.html': 'accelerator-success.html',
        'privacy.html': 'privacy.html',
        'termini.html': 'terms.html',
        'cookie.html': 'cookie.html',
        'success.html': 'success.html'
    };
    var EN_TO_IT = {};
    Object.keys(IT_TO_EN).forEach(function (k) { EN_TO_IT[IT_TO_EN[k]] = k; });

    var config = isEnglish ? CONFIG.en : CONFIG.it;

    function currentPage() {
        var file = window.location.pathname.split('/').pop();
        return file || 'index.html';
    }

    function alternateHref() {
        var page = currentPage();
        if (isEnglish) {
            var it = EN_TO_IT[page];
            return it ? '/' + it : '/index.html';
        }
        if (subdirPrefix) return '/en/index.html';       // articles have no English mirror
        var en = IT_TO_EN[page];
        return en ? '/en/' + en : '/en/index.html';
    }

    function isActive(href) {
        var page = currentPage();
        return href === page || (page === '' && href === 'index.html');
    }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

    function desktopItem(item) {
        var childActive = (item.sub || []).some(function (s) { return isActive(s.href); });
        var active = isActive(item.href) || childActive;
        var link = '<a href="' + withPrefix(item.href) + '" class="nav__link"' + (isActive(item.href) ? ' aria-current="page"' : '') +
            (item.sub ? ' aria-haspopup="true" aria-expanded="false"' : '') + '>' + esc(item.label) + (item.sub ? ICON.chevron : '') + '</a>';
        if (!item.sub) return '<li class="nav__item' + (active ? ' is-active' : '') + '">' + link + '</li>';
        var subs = item.sub.map(function (s) {
            return '<li><a href="' + withPrefix(s.href) + '"' + (isActive(s.href) ? ' aria-current="page"' : '') + '>' + esc(s.label) + '</a></li>';
        }).join('');
        subs += '<li class="dropdown__all"><a href="' + withPrefix(item.href) + '">' + esc(item.all) + ' →</a></li>';
        return '<li class="nav__item has-dropdown' + (active ? ' is-active' : '') + '">' + link + '<ul class="dropdown" aria-label="' + esc(item.label) + '">' + subs + '</ul></li>';
    }

    function panelGroup(item) {
        if (!item.sub) return '<div class="nav-panel__group"><a class="nav-panel__title" href="' + withPrefix(item.href) + '"' + (isActive(item.href) ? ' aria-current="page"' : '') + '>' + esc(item.label) + '</a></div>';
        var subs = item.sub.map(function (s) {
            return '<li><a href="' + withPrefix(s.href) + '"' + (isActive(s.href) ? ' aria-current="page"' : '') + '>' + esc(s.label) + '</a></li>';
        }).join('');
        subs += '<li><a href="' + withPrefix(item.href) + '">' + esc(item.all) + ' →</a></li>';
        return '<div class="nav-panel__group"><a class="nav-panel__title" href="' + withPrefix(item.href) + '">' + esc(item.label) + '</a><ul class="nav-panel__links">' + subs + '</ul></div>';
    }

    function render() {
        var a = config.announce;
        var announce = a ? '<div class="announce" role="region" aria-label="' + (isEnglish ? 'Announcement' : 'Annuncio') + '">' + ICON.sparkle +
            '<span>' + esc(a.text) + '</span><a class="announce__link" href="' + withPrefix(a.href) + '">' + esc(a.link) + '</a></div>' : '';
        var assets = subdirPrefix + config.assets;
        var logo = '<a href="' + withPrefix(config.home) + '" class="logo" aria-label="' + esc(config.logoAria) + '">' +
            '<img class="logo__mark" src="' + assets + 'mark.png" alt="" width="157" height="152">' +
            '<img class="logo__word" src="' + assets + 'wordmark.png" alt="PugliAI" width="298" height="96"></a>';
        var nav = '<nav class="nav" aria-label="' + esc(config.menuLabel) + '"><ul class="nav__list">' + config.items.map(desktopItem).join('') + '</ul></nav>';
        var lang = '<a class="lang" href="' + alternateHref() + '" hreflang="' + (isEnglish ? 'it' : 'en') + '" lang="' + (isEnglish ? 'it' : 'en') + '" aria-label="' + esc(config.lang.aria) + '">' +
            ICON.globe + '<strong>' + config.lang.current + '</strong><span>/</span><span>' + config.lang.other + '</span></a>';
        var actions = '<div class="header__actions">' +
            '<a class="btn btn--ghost header__contact" href="' + withPrefix(config.contact.href) + '">' + esc(config.contact.label) + '</a>' +
            '<a class="btn btn--secondary header__cta" href="' + withPrefix(config.cta.href) + '" aria-label="' + esc(config.cta.aria) + '"><span class="header__cta-long">' + esc(config.cta.label) + '</span><span class="header__cta-short">' + esc(config.cta.short) + '</span></a>' +
            lang +
            '<button type="button" class="menu-toggle" aria-expanded="false" aria-controls="nav-panel" aria-label="' + esc(config.openMenu) + '"><span class="menu-toggle__bars"></span></button>' +
            '</div>';
        var panel = '<div class="nav-panel" id="nav-panel">' + config.items.map(panelGroup).join('') +
            '<div class="nav-panel__actions"><a class="btn btn--primary" href="' + withPrefix(config.cta.href) + '">' + esc(config.cta.label) + '</a>' +
            '<a class="btn btn--ghost" href="' + withPrefix(config.contact.href) + '">' + esc(config.contact.label) + '</a>' + lang.replace('class="lang"', 'class="lang lang--panel"') + '</div></div>';
        return '<a href="#main-content" class="skip-link">' + esc(config.skip) + '</a>' + announce +
            '<header class="site-header" role="banner"><div class="site-header__inner">' + logo + nav + actions + '</div>' + panel + '</header>';
    }

    function ensureMainTarget() {
        if (document.getElementById('main-content')) return;
        var target = document.querySelector('main, [role="main"], article') || document.querySelector('section');
        if (target) {
            target.id = 'main-content';
            if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        }
    }

    function initMenu(header) {
        var toggle = header.querySelector('.menu-toggle');
        if (!toggle) return;
        function setOpen(open) {
            header.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? config.closeMenu : config.openMenu);
        }
        toggle.addEventListener('click', function () { setOpen(!header.classList.contains('is-open')); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && header.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
        });
        // Desktop dropdowns: keep aria-expanded in sync with hover/focus.
        header.querySelectorAll('.has-dropdown').forEach(function (item) {
            var link = item.querySelector('.nav__link');
            item.addEventListener('mouseenter', function () { link.setAttribute('aria-expanded', 'true'); });
            item.addEventListener('mouseleave', function () { link.setAttribute('aria-expanded', 'false'); });
            item.addEventListener('focusin', function () { link.setAttribute('aria-expanded', 'true'); });
            item.addEventListener('focusout', function () { if (!item.contains(document.activeElement)) link.setAttribute('aria-expanded', 'false'); });
        });
    }

    function insert() {
        var placeholder = document.getElementById('nav-placeholder');
        var html = render();
        if (placeholder) {
            placeholder.outerHTML = html;
        } else {
            document.body.insertAdjacentHTML('afterbegin', html);
        }
        ensureMainTarget();
        initMenu(document.querySelector('.site-header'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insert);
    } else {
        insert();
    }
})();
