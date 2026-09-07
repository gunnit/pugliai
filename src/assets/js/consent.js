/**
 * PugliAI — cookie consent (banner + preferences) with Google Consent Mode v2.
 *
 * The GA4 snippet in <head> sets consent defaults from the stored choice
 * (localStorage key "cookieConsent") before gtag.js loads. This script renders
 * the banner when no choice is stored, saves the choice and pushes a consent
 * update. A link with [data-cookie-prefs] reopens the preferences dialog.
 */

(function () {
    'use strict';

    var KEY = 'cookieConsent';
    var isEnglish = window.location.pathname.indexOf('/en/') !== -1;
    var depth = Math.max(0, window.location.pathname.split('/').filter(Boolean).length - 1);
    var prefix = isEnglish ? '' : new Array(depth + 1).join('../');
    var policyHref = prefix + 'cookie.html';

    var T = isEnglish ? {
        title: 'Cookies',
        text: 'We use technical cookies to run the site and, only with your consent, analytics cookies to understand how it is used. Read the ',
        policy: 'cookie policy',
        acceptAll: 'Accept all',
        necessary: 'Only necessary',
        prefs: 'Preferences',
        modalTitle: 'Cookie preferences',
        nec: 'Necessary', necDesc: 'Required for the site to work. Always active.',
        ana: 'Analytics', anaDesc: 'Help us understand how the site is used (Google Analytics, IP anonymised).',
        mkt: 'Marketing', mktDesc: 'Used to show relevant content on other platforms.',
        save: 'Save preferences', close: 'Close'
    } : {
        title: 'Cookie',
        text: 'Usiamo cookie tecnici per far funzionare il sito e, solo con il tuo consenso, cookie analitici per capire come viene usato. Leggi l’',
        policy: 'informativa sui cookie',
        acceptAll: 'Accetta tutti',
        necessary: 'Solo necessari',
        prefs: 'Preferenze',
        modalTitle: 'Preferenze cookie',
        nec: 'Necessari', necDesc: 'Indispensabili per il funzionamento del sito. Sempre attivi.',
        ana: 'Analitici', anaDesc: 'Ci aiutano a capire come viene usato il sito (Google Analytics, IP anonimizzato).',
        mkt: 'Marketing', mktDesc: 'Usati per mostrarti contenuti pertinenti su altre piattaforme.',
        save: 'Salva preferenze', close: 'Chiudi'
    };

    function read() {
        try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
    }

    function save(analytics, marketing) {
        var value = { necessary: true, analytics: !!analytics, marketing: !!marketing, timestamp: new Date().toISOString() };
        try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                analytics_storage: analytics ? 'granted' : 'denied',
                ad_storage: marketing ? 'granted' : 'denied',
                ad_user_data: marketing ? 'granted' : 'denied',
                ad_personalization: marketing ? 'granted' : 'denied'
            });
        }
    }

    function el(html) {
        var d = document.createElement('div');
        d.innerHTML = html.trim();
        return d.firstElementChild;
    }

    var banner = null, modal = null;

    function closeBanner() { if (banner) { banner.remove(); banner = null; } }

    function openModal() {
        var current = read() || { analytics: false, marketing: false };
        modal = el(
            '<div class="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">' +
            '<div class="cookie-modal__box">' +
            '<h2 id="cookie-modal-title">' + T.modalTitle + '</h2>' +
            '<div class="cookie-modal__row"><input type="checkbox" id="ck-nec" checked disabled><label for="ck-nec"><strong>' + T.nec + '</strong><span>' + T.necDesc + '</span></label></div>' +
            '<div class="cookie-modal__row"><input type="checkbox" id="ck-ana"' + (current.analytics ? ' checked' : '') + '><label for="ck-ana"><strong>' + T.ana + '</strong><span>' + T.anaDesc + '</span></label></div>' +
            '<div class="cookie-modal__row"><input type="checkbox" id="ck-mkt"' + (current.marketing ? ' checked' : '') + '><label for="ck-mkt"><strong>' + T.mkt + '</strong><span>' + T.mktDesc + '</span></label></div>' +
            '<div class="cookie-modal__actions"><button type="button" class="btn btn--ghost" data-close>' + T.close + '</button>' +
            '<button type="button" class="btn btn--primary" data-save>' + T.save + '</button></div>' +
            '</div></div>');
        document.body.appendChild(modal);
        var first = modal.querySelector('#ck-ana');
        if (first) first.focus();
        modal.querySelector('[data-close]').addEventListener('click', closeModal);
        modal.querySelector('[data-save]').addEventListener('click', function () {
            save(modal.querySelector('#ck-ana').checked, modal.querySelector('#ck-mkt').checked);
            closeModal();
            closeBanner();
        });
        modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', onEsc);
    }

    function onEsc(e) { if (e.key === 'Escape') closeModal(); }

    function closeModal() {
        if (modal) { modal.remove(); modal = null; }
        document.removeEventListener('keydown', onEsc);
    }

    function showBanner() {
        banner = el(
            '<div class="cookie" role="region" aria-labelledby="cookie-title">' +
            '<h2 id="cookie-title">' + T.title + '</h2>' +
            '<p>' + T.text + '<a href="' + policyHref + '">' + T.policy + '</a>.</p>' +
            '<div class="cookie__actions">' +
            '<button type="button" class="btn btn--primary" data-accept>' + T.acceptAll + '</button>' +
            '<button type="button" class="btn btn--secondary" data-necessary>' + T.necessary + '</button>' +
            '<button type="button" class="btn btn--ghost" data-prefs>' + T.prefs + '</button>' +
            '</div></div>');
        document.body.appendChild(banner);
        banner.querySelector('[data-accept]').addEventListener('click', function () { save(true, true); closeBanner(); });
        banner.querySelector('[data-necessary]').addEventListener('click', function () { save(false, false); closeBanner(); });
        banner.querySelector('[data-prefs]').addEventListener('click', openModal);
    }

    function init() {
        if (!read()) showBanner();
        document.querySelectorAll('[data-cookie-prefs]').forEach(function (link) {
            link.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
        });
    }

    window.PugliAIConsent = { open: openModal, read: read };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
