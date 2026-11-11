/**
 * PugliAI — shared cinematic navigation
 *
 * Injects a compact floating header and a keyboard-accessible menu into
 * `#nav-placeholder` (or at the start of <body>). Existing bilingual routes
 * and the accelerator announcement live in the expanded menu. No dependencies.
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

    var CONFIG = {
        it: {
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

    function activeAttribute(href) {
        return isActive(href) ? ' aria-current="page"' : '';
    }

    function panelGroup(item) {
        var subs = item.sub.map(function (s) {
            return '<li><a href="' + withPrefix(s.href) + '"' + activeAttribute(s.href) + '>' + esc(s.label) + '</a></li>';
        }).join('');
        var childActive = isActive(item.href) || item.sub.some(function (s) { return isActive(s.href); });
        return '<div class="c-nav__group' + (childActive ? ' is-active' : '') + '">' +
            '<a class="c-nav__group-title" href="' + withPrefix(item.href) + '"' + activeAttribute(item.href) + '>' + esc(item.label) + '<span aria-hidden="true">↗</span></a>' +
            '<ul>' + subs + '<li><a class="c-nav__all" href="' + withPrefix(item.href) + '">' + esc(item.all) + ' <span aria-hidden="true">→</span></a></li></ul></div>';
    }

    function render() {
        var a = config.announce;
        var languageLabel = !isEnglish && subdirPrefix ? 'Visit PugliAI in English' : config.lang.aria;
        var language = '<a class="c-nav__language" href="' + alternateHref() + '" hreflang="' + (isEnglish ? 'it' : 'en') + '" lang="' + (isEnglish ? 'it' : 'en') + '" aria-label="' + esc(languageLabel) + '">' +
            '<span>' + (isEnglish ? 'Italiano' : 'English') + '</span><span aria-hidden="true">' + config.lang.other + ' ↗</span></a>';
        var utilityLinks = config.items.filter(function (item) { return !item.sub; }).map(function (item) {
            return '<a href="' + withPrefix(item.href) + '"' + activeAttribute(item.href) + '>' + esc(item.label) + ' <span aria-hidden="true">↗</span></a>';
        }).join('');
        var announcement = a ? '<div class="c-nav__announcement"><p>' + esc(a.text) + '</p><a href="' + withPrefix(a.href) + '">' + esc(a.link) + ' <span aria-hidden="true">↗</span></a></div>' : '';
        var panel = '<nav class="c-nav__panel" id="cinematic-menu" aria-label="' + esc(config.menuLabel) + '" aria-hidden="true" hidden inert>' +
            '<div class="c-nav__panel-top"><span>' + (isEnglish ? 'Explore PugliAI' : 'Esplora PugliAI') + '</span>' + language + '</div>' +
            '<div class="c-nav__groups">' + config.items.filter(function (item) { return item.sub; }).map(panelGroup).join('') + '</div>' +
            '<div class="c-nav__utilities">' + utilityLinks + '<a href="' + withPrefix(config.contact.href) + '"' + activeAttribute(config.contact.href) + '>' + esc(config.contact.label) + ' <span aria-hidden="true">↗</span></a>' +
            '<a class="c-nav__session" href="' + withPrefix(config.cta.href) + '">' + esc(config.cta.aria) + ' <span aria-hidden="true">↗</span></a></div>' + announcement + '</nav>';
        return '<a href="#main-content" class="skip-link">' + esc(config.skip) + '</a>' +
            '<header class="cinematic-nav"><div class="c-nav__capsule">' +
            '<button class="c-nav__toggle" type="button" aria-expanded="false" aria-controls="cinematic-menu" aria-label="' + esc(config.openMenu) + '"><span class="c-nav__toggle-label">Menu</span><span class="c-nav__toggle-icon" aria-hidden="true"></span></button>' +
            '<a class="c-nav__wordmark" href="' + withPrefix(config.home) + '" aria-label="' + esc(config.logoAria) + '">PugliAI<span class="c-nav__brand-dot" aria-hidden="true"></span></a>' +
            '<a class="c-nav__contact" href="' + withPrefix(config.contact.href) + '#valuta-processo">' + (isEnglish ? 'Let’s talk' : 'Parliamone') + '<span aria-hidden="true">↗</span></a>' +
            '</div>' + panel + '</header>';
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
        var toggle = header.querySelector('.c-nav__toggle');
        var label = header.querySelector('.c-nav__toggle-label');
        var panel = header.querySelector('.c-nav__panel');
        var open = false;
        function setOpen(next, restoreFocus) {
            open = next;
            header.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? config.closeMenu : config.openMenu);
            label.textContent = open ? (isEnglish ? 'Close' : 'Chiudi') : 'Menu';
            panel.hidden = !open;
            panel.inert = !open;
            panel.setAttribute('aria-hidden', String(!open));
            if (open) {
                panel.scrollTop = 0;
                panel.querySelector('a').focus({ preventScroll: true });
            } else if (restoreFocus) {
                toggle.focus({ preventScroll: true });
            }
        }
        toggle.addEventListener('click', function () { setOpen(!open, open); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && open) { e.preventDefault(); setOpen(false, true); }
        });
        document.addEventListener('pointerdown', function (e) {
            if (open && !header.contains(e.target)) setOpen(false, false);
        });
        header.addEventListener('focusout', function (e) {
            if (open && e.relatedTarget && !header.contains(e.relatedTarget)) setOpen(false, false);
        });
        panel.addEventListener('click', function (e) {
            if (e.target.closest('a')) setOpen(false, false);
        });
        window.addEventListener('pagehide', function () { setOpen(false, false); });
    }

    function insert() {
        if (document.querySelector('.cinematic-nav')) return;
        var placeholder = document.getElementById('nav-placeholder');
        var html = render();
        if (placeholder) {
            placeholder.outerHTML = html;
        } else {
            document.body.insertAdjacentHTML('afterbegin', html);
        }
        ensureMainTarget();
        initMenu(document.querySelector('.cinematic-nav'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insert);
    } else {
        insert();
    }
})();
