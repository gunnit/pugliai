/**
 * Consent-dependent first entry for Formcarry enquiries, never GA4 parameters.
 * The tab record expires after 30 minutes without observed activity. This is
 * this record's lifetime, not an attempt to reproduce a GA4 session.
 */
(function () {
    'use strict';

    var KEY = 'pugliai:lead-attribution:v1';
    var CONSENT_KEY = 'cookieConsent';
    var LIFETIME = 30 * 60 * 1000;
    var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
    var expiryTimer = null;
    var lastScrollActivity = 0;

    function hasConsent() {
        try {
            var choice = window.PugliAIConsent && typeof window.PugliAIConsent.read === 'function'
                ? window.PugliAIConsent.read()
                : JSON.parse(window.localStorage.getItem(CONSENT_KEY) || 'null');
            return !!choice && choice.analytics === true;
        } catch (e) { return false; }
    }

    function clear() {
        if (expiryTimer !== null) { window.clearTimeout(expiryTimer); expiryTimer = null; }
        try { window.sessionStorage.removeItem(KEY); } catch (e) { /* storage unavailable */ }
    }

    // Prefer missing context to retaining a likely credential, address or ID.
    // Only short, readable slug components are eligible; values are not truncated.
    function sensitive(value) {
        return /(?:^|[-_.])(token|secret|password|passwd|auth|authorization|reset|invite|invitation|unsubscribe|verify|session|jwt|key|email)(?:$|[-_.])/.test(value) ||
            /[a-z0-9]{24,}/.test(value) || /[a-f0-9]{16,}/.test(value) || /\d{6,}/.test(value) ||
            /(?=[a-z0-9]*[a-z])(?=[a-z0-9]*[0-9])[a-z0-9]{16,}/.test(value);
    }

    function safeSlug(value) {
        if (typeof value !== 'string' || value.length > 64) return null;
        var slug = value.toLowerCase();
        if (!/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(slug) || sensitive(slug)) return null;
        return slug;
    }

    function safePath(value) {
        if (typeof value !== 'string' || value.length > 256) return null;
        var pathname;
        try { pathname = decodeURIComponent(value); } catch (e) { return null; }
        if (pathname === '/') return pathname;
        // This exact public appointment page uses "session" as an ordinary
        // title, not a credential path component. All other paths use the filter.
        if (pathname === '/en/strategy-session.html') return pathname;
        // The public static site uses directory slugs and .html filenames.
        // Reject the whole path when any component could be a parameter or ID.
        if (!/^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*\/)*(?:[a-z0-9]+(?:-[a-z0-9]+)*\.html)?$/.test(pathname)) return null;
        if (sensitive(pathname.replace(/\//g, '-'))) return null;
        return pathname;
    }

    function safeHost(value) {
        if (typeof value !== 'string' || value.length > 253) return null;
        var host = value.toLowerCase();
        if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(host) || sensitive(host)) return null;
        return host;
    }

    function externalHost() {
        try {
            var referrer = new URL(document.referrer);
            if (referrer.protocol !== 'https:' && referrer.protocol !== 'http:') return null;
            var host = safeHost(referrer.hostname);
            var currentHost = window.location.hostname.toLowerCase().replace(/^www\./, '');
            return host && host.replace(/^www\./, '') !== currentHost ? host : null;
        } catch (e) { return null; }
    }

    function cleanFields(fields, capturedAt) {
        var result = { attribution_captured_at: new Date(capturedAt).toISOString() };
        fields = fields && typeof fields === 'object' ? fields : {};
        var pathname = safePath(fields.first_landing_path);
        var host = safeHost(fields.first_referrer_host);
        if (pathname) result.first_landing_path = pathname;
        if (host) result.first_referrer_host = host;
        UTM_KEYS.forEach(function (key) {
            var value = safeSlug(fields[key]);
            if (value) result[key] = value;
        });
        return result;
    }

    function read(now) {
        try {
            var record = JSON.parse(window.sessionStorage.getItem(KEY) || 'null');
            if (!record) return null;
            if (record.version !== 1 || typeof record.capturedAt !== 'number' || !Number.isFinite(record.capturedAt) ||
                typeof record.lastActivity !== 'number' || !Number.isFinite(record.lastActivity) ||
                record.capturedAt < 0 || record.lastActivity < record.capturedAt || record.lastActivity > now ||
                now - record.lastActivity >= LIFETIME) {
                clear();
                return null;
            }
            record.fields = cleanFields(record.fields, record.capturedAt);
            return record;
        } catch (e) { clear(); return null; }
    }

    function write(record) {
        try {
            window.sessionStorage.setItem(KEY, JSON.stringify(record));
            scheduleExpiry(record);
            return true;
        } catch (e) { clear(); return false; }
    }

    function scheduleExpiry(record) {
        if (expiryTimer !== null) window.clearTimeout(expiryTimer);
        expiryTimer = window.setTimeout(function () {
            expiryTimer = null;
            if (!hasConsent()) { clear(); return; }
            var current = read(Date.now());
            if (current) scheduleExpiry(current);
        }, Math.max(0, LIFETIME - (Date.now() - record.lastActivity)));
    }

    function capture(now) {
        var fields = { first_landing_path: safePath(window.location.pathname), first_referrer_host: externalHost() };
        var query = new URLSearchParams(window.location.search);
        UTM_KEYS.forEach(function (key) {
            // Ambiguous duplicate values are not acquisition evidence.
            var values = query.getAll(key);
            if (values.length === 1) fields[key] = safeSlug(values[0]);
        });
        return { version: 1, capturedAt: now, lastActivity: now, fields: cleanFields(fields, now) };
    }

    function initialise() {
        if (!hasConsent()) { clear(); return; }
        var now = Date.now();
        var record = read(now) || capture(now);
        record.lastActivity = now;
        write(record);
    }

    function getFields() {
        // Recheck at the payload boundary; a previous event is not consent.
        if (!hasConsent()) { clear(); return {}; }
        var now = Date.now();
        var record = read(now);
        if (!record) return {};
        record.lastActivity = now;
        if (!write(record)) return {};
        return Object.assign({}, record.fields);
    }

    function activity() {
        // Do not reconstruct an expired entry merely because the visitor types.
        getFields();
    }

    window.PugliAIAttribution = { getFields: getFields };
    window.addEventListener('pugliai:consent-change', initialise);
    window.addEventListener('storage', function (event) {
        if (event.key === CONSENT_KEY || event.key === null) initialise();
    });
    document.addEventListener('pointerdown', activity, { passive: true });
    document.addEventListener('keydown', activity, { passive: true });
    document.addEventListener('touchstart', activity, { passive: true });
    document.addEventListener('scroll', function () {
        var now = Date.now();
        if (now - lastScrollActivity >= 1000) { lastScrollActivity = now; activity(); }
    }, { passive: true });
    initialise();
})();
