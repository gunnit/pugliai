/**
 * Language Switcher - PugliAI Website
 * Handles dynamic language switching between Italian and English
 */

(function() {
    'use strict';

    // URL mapping: Italian to English pages
    const urlMap = {
        // Main pages
        'index.html': 'index.html',
        'chi-siamo.html': 'about-us.html',
        'contatti.html': 'contact.html',
        'sessione-strategica.html': 'strategy-session.html',

        // Services
        'servizi.html': 'services.html',
        'infrastrutture-ai.html': 'ai-infrastructure.html',
        'agenti-ai.html': 'ai-agents.html',
        'consulenza-strategica.html': 'strategic-consulting.html',

        // Products
        'prodotti.html': 'products.html',
        'voiceai-on-premise.html': 'voiceai-on-premise.html',
        'knowledgeai-enterprise.html': 'knowledgeai-enterprise.html',

        // Sectors
        'settori.html': 'sectors.html',
        'manifatturiero.html': 'manufacturing.html',
        'moda-lusso.html': 'fashion-luxury.html',
        'servizi-finanziari.html': 'financial-services.html',

        // Resources & Tools
        'investimenti-ai.html': 'ai-investment.html',
        'guida-ai-ceo-2025.html': 'ceo-ai-guide-2025.html',
        'casi-studio.html': 'case-studies.html',
        'risorse-formative.html': 'training-resources.html',
        'poc-framework.html': 'poc-framework.html',
        'roi-calculator.html': 'roi-calculator.html',

        // Legal pages
        'privacy.html': 'privacy.html',
        'termini.html': 'terms.html',
        'cookie.html': 'cookie.html',

        // Other
        'architettura-tecnica.html': 'technical-architecture.html',
        'success.html': 'success.html',
        'login.html': 'login.html'
    };

    /**
     * Detect if we're on an English page
     */
    function isEnglishPage() {
        return window.location.pathname.includes('/en/');
    }

    /**
     * Get current page filename
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }

    /**
     * Get the corresponding URL in the other language
     */
    function getAlternateUrl(currentPage, toEnglish) {
        if (toEnglish) {
            // Italian to English
            const englishPage = urlMap[currentPage] || currentPage;
            return '/en/' + englishPage;
        } else {
            // English to Italian
            // Reverse lookup in urlMap
            const italianPage = Object.keys(urlMap).find(key => urlMap[key] === currentPage) || currentPage;
            return '/' + italianPage;
        }
    }

    /**
     * Update language switcher based on current page
     */
    function updateLanguageSwitcher() {
        const currentPage = getCurrentPage();
        const isEnglish = isEnglishPage();

        const langSwitcher = document.querySelector('.language-switcher');
        if (!langSwitcher) return;

        const langToggle = langSwitcher.querySelector('.lang-toggle');
        const langOption = langSwitcher.querySelector('.lang-option');

        if (!langToggle || !langOption) return;

        // Flags/codes are rendered by navigation.js as inline SVGs (emoji flags
        // degrade to bare letters on Windows); only fix up the per-page URL
        // mapping and labels here.
        const codeSpan = langToggle.querySelector('.lang-code');

        if (isEnglish) {
            codeSpan.textContent = 'EN';
            // Update dropdown to point at the Italian equivalent of this page
            langOption.href = getAlternateUrl(currentPage, false);
            langOption.querySelector('span:last-child').textContent = 'Italiano';
            langOption.setAttribute('aria-label', 'Passa all\'italiano');
        } else {
            codeSpan.textContent = 'IT';
            // Update dropdown to point at the English equivalent of this page
            langOption.href = getAlternateUrl(currentPage, true);
            langOption.querySelector('span:last-child').textContent = 'English';
            langOption.setAttribute('aria-label', 'Switch to English');
        }
    }

    /**
     * Toggle dropdown open/closed
     */
    function toggleDropdown() {
        const langSwitcher = document.querySelector('.language-switcher');
        if (langSwitcher) {
            langSwitcher.classList.toggle('open');
        }
    }

    /**
     * Close dropdown when clicking outside
     */
    function closeDropdownOnClickOutside(event) {
        const langSwitcher = document.querySelector('.language-switcher');
        if (langSwitcher && !langSwitcher.contains(event.target)) {
            langSwitcher.classList.remove('open');
        }
    }

    /**
     * Initialize language switcher
     */
    function init() {
        // Update switcher on page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateLanguageSwitcher);
        } else {
            updateLanguageSwitcher();
        }

        // Add click handler for toggle button
        document.addEventListener('click', function(e) {
            const langToggle = e.target.closest('.lang-toggle');
            if (langToggle) {
                e.preventDefault();
                toggleDropdown();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', closeDropdownOnClickOutside);

        // Close dropdown on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const langSwitcher = document.querySelector('.language-switcher');
                if (langSwitcher) {
                    langSwitcher.classList.remove('open');
                }
            }
        });

        // Smooth transition effect on language switch
        document.addEventListener('click', function(e) {
            const langOption = e.target.closest('.lang-option');
            if (langOption) {
                document.body.style.opacity = '0.7';
            }
        });
    }

    // Initialize
    init();

})();
