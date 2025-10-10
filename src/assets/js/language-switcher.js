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

        // Services
        'servizi.html': 'services.html',
        'infrastrutture-ai.html': 'ai-infrastructure.html',
        'agenti-ai.html': 'ai-agents.html',
        'consulenza-strategica.html': 'strategic-consulting.html',

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
     * Update language switcher links based on current page
     */
    function updateLanguageSwitcher() {
        const currentPage = getCurrentPage();
        const isEnglish = isEnglishPage();

        const langSwitcher = document.querySelector('.language-switcher');
        if (!langSwitcher) return;

        const itLink = langSwitcher.querySelector('a[aria-label="Italiano"]');
        const enLink = langSwitcher.querySelector('a[aria-label="English"]');

        if (!itLink || !enLink) return;

        // Set active state
        if (isEnglish) {
            itLink.classList.remove('active');
            itLink.removeAttribute('aria-current');
            enLink.classList.add('active');
            enLink.setAttribute('aria-current', 'true');
        } else {
            itLink.classList.add('active');
            itLink.setAttribute('aria-current', 'true');
            enLink.classList.remove('active');
            enLink.removeAttribute('aria-current');
        }

        // Update URLs
        if (isEnglish) {
            // Currently on English page, Italian link should go to Italian version
            itLink.href = getAlternateUrl(currentPage, false);
            enLink.href = '/en/' + currentPage;
        } else {
            // Currently on Italian page, English link should go to English version
            itLink.href = '/' + currentPage;
            enLink.href = getAlternateUrl(currentPage, true);
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

        // Optional: Add smooth transition effect on language switch
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                // Allow default link behavior
                // Optional: Add loading state or animation here
                document.body.style.opacity = '0.7';
            });
        });
    }

    // Initialize
    init();

})();
