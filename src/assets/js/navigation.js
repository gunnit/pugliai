/**
 * PugliAI Dynamic Navigation Component
 *
 * This script generates consistent navigation across all pages.
 * Update the menu structure here and it applies everywhere.
 */

(function() {
    'use strict';

    // Detect if we're on English or Italian version
    const isEnglish = window.location.pathname.includes('/en/');

    // Base path for assets and links
    const basePath = isEnglish ? '../' : '';
    const linkPrefix = isEnglish ? '' : '';

    // Content subdirectories (e.g. /guida-ai/) use the root (Italian) config but
    // live one level deep, so root-relative links and assets need a '../' prefix.
    // English pages bake '../' into their own config, so they get no extra prefix.
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const dirDepth = Math.max(0, pathSegments.length - 1);
    const subdirPrefix = (!isEnglish && dirDepth >= 1) ? '../'.repeat(dirDepth) : '';

    // Prefix a relative (non-absolute, non-external) href/src for the current depth.
    function withPrefix(path) {
        if (!subdirPrefix || !path) return path;
        if (/^(https?:|\/|#|mailto:|tel:)/.test(path)) return path;
        return subdirPrefix + path;
    }

    // Inline SVG flags: emoji flags (🇮🇹/🇬🇧) render as bare letter pairs on
    // Windows, so the toggle used to read "IT IT". SVGs render everywhere.
    const FLAGS = {
        it: `<svg viewBox="0 0 20 14" width="18" height="13" aria-hidden="true" focusable="false"><rect width="20" height="14" rx="2" fill="#FFFFFF"/><path d="M0 2a2 2 0 012-2h4.67v14H2a2 2 0 01-2-2V2z" fill="#009246"/><path d="M13.33 0H18a2 2 0 012 2v10a2 2 0 01-2 2h-4.67V0z" fill="#CE2B37"/></svg>`,
        gb: `<svg viewBox="0 0 20 14" width="18" height="13" aria-hidden="true" focusable="false"><defs><clipPath id="pgai-flag-gb"><rect width="20" height="14" rx="2"/></clipPath></defs><g clip-path="url(#pgai-flag-gb)"><rect width="20" height="14" fill="#012169"/><path d="M0 0l20 14M20 0L0 14" stroke="#FFFFFF" stroke-width="2.8"/><path d="M0 0l20 14M20 0L0 14" stroke="#C8102E" stroke-width="1.2"/><rect x="8.4" width="3.2" height="14" fill="#FFFFFF"/><rect y="5.4" width="20" height="3.2" fill="#FFFFFF"/><rect x="9.1" width="1.8" height="14" fill="#C8102E"/><rect y="6.1" width="20" height="1.8" fill="#C8102E"/></g></svg>`
    };

    // Navigation configuration - EDIT THIS TO UPDATE ALL MENUS
    const navConfig = {
        it: {
            logo: {
                href: 'index.html',
                imgSrc: 'src/assets/img/pugliai_pittogramma.png',
                imgAlt: 'PugliAI',
                text: 'PugliAI',
                ariaLabel: 'PugliAI - Torna alla home'
            },
            menuLabel: 'Menu principale',
            items: [
                { label: 'Acceleratore', href: 'acceleratore.html', highlight: true, icon: 'rocket' },
                { label: 'Servizi', href: 'servizi.html' },
                { label: 'Prodotti', href: 'prodotti.html' },
                { label: 'Chi Siamo', href: 'chi-siamo.html' },
                { label: 'Guida CEO', href: 'guida-ai-ceo-2025.html', icon: 'book' }
            ],
            cta: {
                label: 'Sessione Strategica',
                href: 'contatti.html',
                ariaLabel: 'Prenota una sessione strategica gratuita'
            },
            langSwitcher: {
                current: { flag: FLAGS.it, code: 'IT' },
                alternate: { flag: FLAGS.gb, label: 'English', href: '/en/index.html' },
                ariaLabel: 'Selettore lingua',
                toggleLabel: 'Cambia lingua'
            },
            skipLink: {
                text: 'Vai al contenuto principale',
                ariaLabel: 'Salta la navigazione e vai al contenuto principale'
            }
        },
        en: {
            logo: {
                href: 'index.html',
                imgSrc: '../src/assets/img/pugliai_pittogramma.png',
                imgAlt: 'PugliAI',
                text: 'PugliAI',
                ariaLabel: 'PugliAI - Return to homepage'
            },
            menuLabel: 'Main menu',
            items: [
                { label: 'Accelerator', href: 'accelerator.html', highlight: true, icon: 'rocket' },
                { label: 'Services', href: 'services.html' },
                { label: 'Products', href: 'products.html' },
                { label: 'About Us', href: 'about-us.html' },
                { label: 'CEO Guide', href: 'ceo-ai-guide-2025.html', icon: 'book' }
            ],
            cta: {
                label: 'Strategic Session',
                href: 'contact.html',
                ariaLabel: 'Book a free strategic session'
            },
            langSwitcher: {
                current: { flag: FLAGS.gb, code: 'EN' },
                alternate: { flag: FLAGS.it, label: 'IT', href: '/index.html' },
                ariaLabel: 'Language selector'
            },
            skipLink: {
                text: 'Go to main content',
                ariaLabel: 'Skip navigation and go to main content'
            }
        }
    };

    // Get current config based on language
    const config = isEnglish ? navConfig.en : navConfig.it;

    // Get current page filename
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }

    // Check if a link matches current page
    function isActivePage(href) {
        const currentPage = getCurrentPage();
        return href === currentPage ||
               (currentPage === '' && href === 'index.html') ||
               (currentPage === 'index.html' && href === 'index.html');
    }

    // Check if any submenu item is active
    function hasActiveSubmenu(items) {
        return items && items.some(item => isActivePage(item.href));
    }

    // SVG Icons
    const icons = {
        book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 6px;" aria-hidden="true" focusable="false">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        rocket: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 6px;" aria-hidden="true" focusable="false">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a1.96 1.96 0 00-2.91-.09z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    };

    // Generate menu item HTML
    function generateMenuItem(item) {
        const isActive = isActivePage(item.href) || hasActiveSubmenu(item.submenu);
        const activeClass = isActive ? ' active' : '';
        const ariaCurrent = isActive && !item.submenu ? ' aria-current="page"' : '';
        const highlightStyle = item.highlight ? ' style="color: var(--accent-gold);"' : '';
        const iconHtml = item.icon ? icons[item.icon] : '';

        if (item.submenu) {
            const submenuLabel = item.label + ' submenu';
            let submenuHtml = item.submenu.map(sub => {
                const subActive = isActivePage(sub.href);
                return `<li role="none"><a href="${withPrefix(sub.href)}" class="dropdown-link${subActive ? ' active' : ''}" role="menuitem">${sub.label}</a></li>`;
            }).join('\n                                ');

            return `<li class="has-dropdown">
                            <a href="${withPrefix(item.href)}" class="nav-link${activeClass}" aria-haspopup="true" aria-expanded="false"${highlightStyle}>${iconHtml}${item.label} <span class="dropdown-arrow" aria-hidden="true">▼</span></a>
                            <ul class="dropdown-menu" role="menu" aria-label="${submenuLabel}">
                                ${submenuHtml}
                            </ul>
                        </li>`;
        }

        return `<li><a href="${withPrefix(item.href)}" class="nav-link${activeClass}"${ariaCurrent}${highlightStyle}>${iconHtml}${item.label}</a></li>`;
    }

    // Generate Italian language switcher (dropdown style)
    function generateItalianLangSwitcher() {
        const ls = config.langSwitcher;
        // Compute the English equivalent page so the toggle lands on the matching
        // page, not always the English homepage. Falls back to the configured
        // homepage href when the current page has no English mirror.
        const enPage = getEnglishEquivalent(getCurrentPage());
        const enHref = enPage ? `/en/${enPage}` : ls.alternate.href;
        return `<div class="language-switcher" role="navigation" aria-label="${ls.ariaLabel}">
                    <div class="lang-toggle" aria-label="${ls.toggleLabel}" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="lang-flag">${ls.current.flag}</span>
                        <span class="lang-code">${ls.current.code}</span>
                        <span class="lang-arrow">▼</span>
                    </div>
                    <div class="lang-dropdown" role="menu">
                        <a href="${enHref}" class="lang-option" role="menuitem" aria-label="Switch to ${ls.alternate.label}">
                            <span class="lang-flag">${ls.alternate.flag}</span>
                            <span>${ls.alternate.label}</span>
                        </a>
                    </div>
                </div>`;
    }

    // Generate English language switcher (dropdown style - consistent with Italian)
    function generateEnglishLangSwitcher() {
        const ls = config.langSwitcher;
        // Compute the Italian equivalent page
        const currentPage = getCurrentPage();
        const itPage = getItalianEquivalent(currentPage);

        return `<div class="language-switcher" role="navigation" aria-label="${ls.ariaLabel}">
                    <div class="lang-toggle" aria-label="Change language" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">
                        <span class="lang-flag">${ls.current.flag}</span>
                        <span class="lang-code">${ls.current.code}</span>
                        <span class="lang-arrow">▼</span>
                    </div>
                    <div class="lang-dropdown" role="menu">
                        <a href="/${itPage}" class="lang-option" role="menuitem" aria-label="Switch to Italian">
                            <span class="lang-flag">${ls.alternate.flag}</span>
                            <span>Italiano</span>
                        </a>
                    </div>
                </div>`;
    }

    // Map English pages to Italian equivalents
    function getItalianEquivalent(enPage) {
        const pageMap = {
            'index.html': 'index.html',
            'about-us.html': 'chi-siamo.html',
            'contact.html': 'contatti.html',
            'services.html': 'servizi.html',
            'products.html': 'prodotti.html',
            'ai-infrastructure.html': 'infrastrutture-ai.html',
            'ai-agents.html': 'agenti-ai.html',
            'strategic-consulting.html': 'consulenza-strategica.html',
            'ai-investment.html': 'investimenti-ai.html',
            'ceo-ai-guide-2025.html': 'guida-ai-ceo-2025.html',
            'accelerator.html': 'acceleratore.html',
            'accelerator-apply.html': 'acceleratore-candidatura.html',
            'accelerator-success.html': 'acceleratore-success.html',
            'sectors.html': 'settori.html',
            'manufacturing.html': 'manifatturiero.html',
            'fashion-luxury.html': 'moda-lusso.html',
            'financial-services.html': 'servizi-finanziari.html',
            'voiceai-on-premise.html': 'voiceai-on-premise.html',
            'knowledgeai-enterprise.html': 'knowledgeai-enterprise.html',
            'mcp-hosting.html': 'hosting-mcp.html',
            'privacy.html': 'privacy.html',
            'cookie.html': 'cookie.html',
            'terms.html': 'termini.html'
        };
        return pageMap[enPage] || enPage;
    }

    // Map Italian pages to English equivalents (inverse of getItalianEquivalent).
    // Returns null when no English mirror exists, so the IT switcher falls back
    // to the English homepage instead of linking to a non-existent page.
    function getEnglishEquivalent(itPage) {
        const pageMap = {
            'index.html': 'index.html',
            'chi-siamo.html': 'about-us.html',
            'contatti.html': 'contact.html',
            'servizi.html': 'services.html',
            'prodotti.html': 'products.html',
            'infrastrutture-ai.html': 'ai-infrastructure.html',
            'agenti-ai.html': 'ai-agents.html',
            'consulenza-strategica.html': 'strategic-consulting.html',
            'investimenti-ai.html': 'ai-investment.html',
            'guida-ai-ceo-2025.html': 'ceo-ai-guide-2025.html',
            'acceleratore.html': 'accelerator.html',
            'acceleratore-candidatura.html': 'accelerator-apply.html',
            'acceleratore-success.html': 'accelerator-success.html',
            'settori.html': 'sectors.html',
            'manifatturiero.html': 'manufacturing.html',
            'moda-lusso.html': 'fashion-luxury.html',
            'servizi-finanziari.html': 'financial-services.html',
            'voiceai-on-premise.html': 'voiceai-on-premise.html',
            'knowledgeai-enterprise.html': 'knowledgeai-enterprise.html',
            'hosting-mcp.html': 'mcp-hosting.html',
            'privacy.html': 'privacy.html',
            'cookie.html': 'cookie.html',
            'termini.html': 'terms.html'
        };
        return pageMap[itPage] || null;
    }

    // Generate full navigation HTML
    function generateNavigation() {
        const menuItems = config.items.map(generateMenuItem).join('\n                        ');
        const langSwitcher = isEnglish ? generateEnglishLangSwitcher() : generateItalianLangSwitcher();

        return `<!-- Skip Navigation Link -->
    <a href="#main-content" class="skip-link" style="position: absolute; left: -9999px; z-index: 999; background: var(--accent-gold); color: var(--primary-navy); padding: 0.5rem 1rem; text-decoration: none; border-radius: 0 0 4px 0;" aria-label="${config.skipLink.ariaLabel}">
        ${config.skipLink.text}
    </a>
    <style>
        .skip-link:focus {
            left: 0;
            top: 0;
        }
    </style>

    <!-- Header Navigation -->
    <header class="header" role="banner">
        <div class="container">
            <div class="nav-container">
                <a href="${withPrefix(config.logo.href)}" class="logo" aria-label="${config.logo.ariaLabel}">
                    <img src="${withPrefix(config.logo.imgSrc)}" alt="${config.logo.imgAlt}" class="logo-img">
                    <span class="logo-text">${config.logo.text}</span>
                </a>
                <nav role="navigation" aria-label="${config.menuLabel}">
                    <button class="mobile-menu-toggle" aria-label="${isEnglish ? 'Open navigation menu' : 'Apri menu di navigazione'}" aria-expanded="false" aria-controls="main-nav-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class="nav-menu" id="main-nav-menu" role="menubar">
                        ${menuItems}
                    </ul>
                </nav>
                ${langSwitcher}
                <a href="${withPrefix(config.cta.href)}" class="cta-button" aria-label="${config.cta.ariaLabel}">${config.cta.label}</a>
            </div>
        </div>
    </header>`;
    }

    // Insert navigation into page
    function insertNavigation() {
        // Find the nav-placeholder element or insert at start of body
        const placeholder = document.getElementById('nav-placeholder');

        if (placeholder) {
            placeholder.outerHTML = generateNavigation();
        } else {
            // Insert at the beginning of body (after any existing skip links)
            document.body.insertAdjacentHTML('afterbegin', generateNavigation());
        }

        // Ensure the skip link has a valid target: most pages never declared
        // id="main-content", which left the injected skip link pointing nowhere.
        // Prefer the primary content landmark, then the first content block after
        // the header, so the link never jumps to a trailing FAQ/footer section.
        if (!document.getElementById('main-content')) {
            const header = document.querySelector('header.header');
            const target = document.querySelector('main, [role="main"], article')
                || (header && header.nextElementSibling
                    && header.nextElementSibling.matches('section, div.container, .page-header')
                    ? header.nextElementSibling : null)
                || document.querySelector('section, .page-header');
            if (target) {
                target.id = 'main-content';
                if (!target.hasAttribute('tabindex')) {
                    target.setAttribute('tabindex', '-1');
                }
            }
        }

        // Initialize mobile menu toggle
        initMobileMenu();

        // Initialize dropdown menus
        initDropdowns();

        // Initialize language switcher (dropdown style for both languages)
        initLangSwitcher();
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', function() {
                menu.classList.toggle('active');
                toggle.classList.toggle('active');
                const expanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', !expanded);

                // Update aria-label based on state
                if (!expanded) {
                    toggle.setAttribute('aria-label', isEnglish ? 'Close navigation menu' : 'Chiudi menu di navigazione');
                } else {
                    toggle.setAttribute('aria-label', isEnglish ? 'Open navigation menu' : 'Apri menu di navigazione');
                }
            });

            // Close menu on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.setAttribute('aria-label', isEnglish ? 'Open navigation menu' : 'Apri menu di navigazione');
                    toggle.focus();
                }
            });
        }
    }

    // Dropdown menu functionality
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('.has-dropdown');

        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            const menu = dropdown.querySelector('.dropdown-menu');

            if (link && menu) {
                // Mouse events for desktop
                dropdown.addEventListener('mouseenter', function() {
                    link.setAttribute('aria-expanded', 'true');
                });

                dropdown.addEventListener('mouseleave', function() {
                    link.setAttribute('aria-expanded', 'false');
                });

                // Click event for mobile
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768 && link.getAttribute('href') !== '#') {
                        // On mobile, first click opens dropdown, second navigates
                        if (link.getAttribute('aria-expanded') !== 'true') {
                            e.preventDefault();
                            link.setAttribute('aria-expanded', 'true');
                        }
                    } else if (link.getAttribute('href') === '#') {
                        e.preventDefault();
                        const expanded = link.getAttribute('aria-expanded') === 'true';
                        link.setAttribute('aria-expanded', !expanded);
                    }
                });
            }
        });
    }

    // Language switcher functionality (dropdown style)
    function initLangSwitcher() {
        const switcher = document.querySelector('.language-switcher');
        const toggle = document.querySelector('.lang-toggle');
        const dropdown = document.querySelector('.lang-dropdown');

        if (toggle && dropdown) {
            function openDropdown() {
                dropdown.classList.add('active');
                switcher.classList.add('open');
                toggle.setAttribute('aria-expanded', 'true');
            }

            function closeDropdown() {
                dropdown.classList.remove('active');
                switcher.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }

            toggle.addEventListener('click', function() {
                const isOpen = dropdown.classList.contains('active');
                if (isOpen) {
                    closeDropdown();
                } else {
                    openDropdown();
                }
            });

            toggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const isOpen = dropdown.classList.contains('active');
                    if (isOpen) {
                        closeDropdown();
                    } else {
                        openDropdown();
                        // Focus first option
                        const firstOption = dropdown.querySelector('.lang-option');
                        if (firstOption) {
                            firstOption.focus();
                        }
                    }
                }
            });

            // Close on outside click
            document.addEventListener('click', function(e) {
                if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
                    closeDropdown();
                }
            });

            // Close on escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && dropdown.classList.contains('active')) {
                    closeDropdown();
                    toggle.focus();
                }
            });
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertNavigation);
    } else {
        insertNavigation();
    }
})();
