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
                { label: 'Home', href: 'index.html' },
                {
                    label: 'Servizi',
                    href: 'servizi.html',
                    submenu: [
                        { label: 'Infrastrutture AI', href: 'infrastrutture-ai.html' },
                        { label: 'Agenti AI', href: 'agenti-ai.html' },
                        { label: 'Consulenza Strategica', href: 'consulenza-strategica.html' }
                    ]
                },
                {
                    label: 'Prodotti',
                    href: '#',
                    submenu: [
                        { label: 'VoiceAI On-Premise', href: 'voiceai-on-premise.html' },
                        { label: 'KnowledgeAI Enterprise', href: 'knowledgeai-enterprise.html' }
                    ]
                },
                {
                    label: 'Settori',
                    href: 'settori.html',
                    submenu: [
                        { label: 'Manifatturiero', href: 'manifatturiero.html' },
                        { label: 'Moda & Lusso', href: 'moda-lusso.html' },
                        { label: 'Servizi Finanziari', href: 'servizi-finanziari.html' }
                    ]
                },
                { label: 'Chi Siamo', href: 'chi-siamo.html' },
                { label: 'Prezzi', href: 'investimenti-ai.html' },
                { label: 'Guida CEO', href: 'guida-ai-ceo-2025.html', highlight: true, icon: 'book' }
            ],
            cta: {
                label: 'Sessione Strategica',
                href: 'contatti.html',
                ariaLabel: 'Prenota una sessione strategica gratuita'
            },
            langSwitcher: {
                current: { flag: '🇮🇹', code: 'IT' },
                alternate: { flag: '🇬🇧', label: 'English', href: '/en/index.html' },
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
                { label: 'Home', href: 'index.html' },
                {
                    label: 'Services',
                    href: 'services.html',
                    submenu: [
                        { label: 'AI Infrastructure', href: 'ai-infrastructure.html' },
                        { label: 'AI Agents', href: 'ai-agents.html' },
                        { label: 'Strategic Consulting', href: 'strategic-consulting.html' }
                    ]
                },
                {
                    label: 'Products',
                    href: '#',
                    submenu: [
                        { label: 'VoiceAI On-Premise', href: 'voiceai-on-premise.html' },
                        { label: 'KnowledgeAI Enterprise', href: 'knowledgeai-enterprise.html' }
                    ]
                },
                {
                    label: 'Sectors',
                    href: 'sectors.html',
                    submenu: [
                        { label: 'Manufacturing', href: 'manufacturing.html' },
                        { label: 'Fashion & Luxury', href: 'fashion-luxury.html' },
                        { label: 'Financial Services', href: 'financial-services.html' }
                    ]
                },
                { label: 'About Us', href: 'about-us.html' },
                { label: 'Pricing', href: 'ai-investment.html' },
                { label: 'CEO Guide', href: 'ceo-ai-guide-2025.html', highlight: true, icon: 'book' }
            ],
            cta: {
                label: 'Strategic Session',
                href: 'contact.html',
                ariaLabel: 'Book a free strategic session'
            },
            langSwitcher: {
                current: { flag: '🇬🇧', code: 'EN' },
                alternate: { flag: '🇮🇹', label: 'IT', href: '/index.html' },
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
        book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 6px;">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                return `<li role="none"><a href="${sub.href}" class="dropdown-link${subActive ? ' active' : ''}" role="menuitem">${sub.label}</a></li>`;
            }).join('\n                                ');

            return `<li class="has-dropdown">
                            <a href="${item.href}" class="nav-link${activeClass}" aria-haspopup="true" aria-expanded="false"${highlightStyle}>${iconHtml}${item.label} <span class="dropdown-arrow" aria-hidden="true">▼</span></a>
                            <ul class="dropdown-menu" role="menu" aria-label="${submenuLabel}">
                                ${submenuHtml}
                            </ul>
                        </li>`;
        }

        return `<li><a href="${item.href}" class="nav-link${activeClass}"${ariaCurrent}${highlightStyle}>${iconHtml}${item.label}</a></li>`;
    }

    // Generate Italian language switcher (dropdown style)
    function generateItalianLangSwitcher() {
        const ls = config.langSwitcher;
        return `<div class="language-switcher" role="navigation" aria-label="${ls.ariaLabel}">
                    <div class="lang-toggle" aria-label="${ls.toggleLabel}" role="button" tabindex="0">
                        <span class="lang-flag">${ls.current.flag}</span>
                        <span class="lang-code">${ls.current.code}</span>
                        <span class="lang-arrow">▼</span>
                    </div>
                    <div class="lang-dropdown">
                        <a href="${ls.alternate.href}" class="lang-option" aria-label="Switch to ${ls.alternate.label}">
                            <span class="lang-flag">${ls.alternate.flag}</span>
                            <span>${ls.alternate.label}</span>
                        </a>
                    </div>
                </div>`;
    }

    // Generate English language switcher (buttons style)
    function generateEnglishLangSwitcher() {
        const ls = config.langSwitcher;
        // Compute the Italian equivalent page
        const currentPage = getCurrentPage();
        const itPage = getItalianEquivalent(currentPage);

        return `<div class="language-switcher" role="navigation" aria-label="${ls.ariaLabel}">
                    <a href="/${itPage}" class="lang-option" aria-label="Italiano">
                        <span class="lang-flag">${ls.alternate.flag}</span>
                        <span>${ls.alternate.label}</span>
                    </a>
                    <a href="/en/${currentPage}" class="lang-option active" aria-label="English" aria-current="true">
                        <span class="lang-flag">${ls.current.flag}</span>
                        <span>${ls.current.code}</span>
                    </a>
                </div>`;
    }

    // Map English pages to Italian equivalents
    function getItalianEquivalent(enPage) {
        const pageMap = {
            'index.html': 'index.html',
            'about-us.html': 'chi-siamo.html',
            'contact.html': 'contatti.html',
            'services.html': 'servizi.html',
            'ai-infrastructure.html': 'infrastrutture-ai.html',
            'ai-agents.html': 'agenti-ai.html',
            'strategic-consulting.html': 'consulenza-strategica.html',
            'ai-investment.html': 'investimenti-ai.html',
            'ceo-ai-guide-2025.html': 'guida-ai-ceo-2025.html',
            'sectors.html': 'settori.html',
            'manufacturing.html': 'manifatturiero.html',
            'fashion-luxury.html': 'moda-lusso.html',
            'financial-services.html': 'servizi-finanziari.html',
            'voiceai-on-premise.html': 'voiceai-on-premise.html',
            'knowledgeai-enterprise.html': 'knowledgeai-enterprise.html',
            'privacy.html': 'privacy.html',
            'cookie.html': 'cookie.html',
            'terms.html': 'termini.html'
        };
        return pageMap[enPage] || enPage;
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
                <a href="${config.logo.href}" class="logo" aria-label="${config.logo.ariaLabel}">
                    <img src="${config.logo.imgSrc}" alt="${config.logo.imgAlt}" class="logo-img">
                    <span class="logo-text">${config.logo.text}</span>
                </a>
                <nav role="navigation" aria-label="${config.menuLabel}">
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class="nav-menu">
                        ${menuItems}
                    </ul>
                </nav>
                ${langSwitcher}
                <a href="${config.cta.href}" class="cta-button" aria-label="${config.cta.ariaLabel}">${config.cta.label}</a>
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

        // Initialize mobile menu toggle
        initMobileMenu();

        // Initialize dropdown menus
        initDropdowns();

        // Initialize language switcher (Italian style)
        if (!isEnglish) {
            initLangSwitcher();
        }
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

    // Language switcher functionality (Italian dropdown style)
    function initLangSwitcher() {
        const toggle = document.querySelector('.lang-toggle');
        const dropdown = document.querySelector('.lang-dropdown');

        if (toggle && dropdown) {
            toggle.addEventListener('click', function() {
                dropdown.classList.toggle('active');
            });

            toggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });

            // Close on outside click
            document.addEventListener('click', function(e) {
                if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });

            // Close on escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    dropdown.classList.remove('active');
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
