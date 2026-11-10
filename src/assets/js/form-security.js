/** Shared lead-form validation and provider acceptance handling.
 * Browser tokens and honeypots are hints, not server-side security enforcement.
 */
(function () {
    'use strict';

    const english = document.documentElement.lang === 'en' || location.pathname.includes('/en/');
    const msg = english ? {
        required: 'This field is required', email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number', invalid: 'Please check this value',
        privacy: 'You must accept the Privacy Policy to continue',
        rate: 'Too many requests. Please wait a minute before trying again.',
        busy: 'Sending…', retry: 'Please wait at least 15 seconds before trying again.',
        failed: 'We could not accept your request. Please check the fields and try again, or write to sales@pugliai.com.',
        uncertain: 'We cannot confirm your submission. Your request may have arrived: please wait a moment before trying again, or write to sales@pugliai.com.'
    } : {
        required: 'Questo campo è obbligatorio', email: 'Inserisci un indirizzo email valido',
        phone: 'Inserisci un numero di telefono valido', invalid: 'Controlla questo valore',
        privacy: 'Devi accettare la Privacy Policy per continuare',
        rate: 'Troppe richieste. Attendi un minuto prima di riprovare.',
        busy: 'Invio in corso…', retry: 'Attendi almeno 15 secondi prima di riprovare.',
        failed: 'Non è stato possibile accettare la richiesta. Controlla i campi e riprova, oppure scrivi a sales@pugliai.com.',
        uncertain: "Non riusciamo a confermare l'invio. La richiesta potrebbe essere arrivata: attendi un momento prima di riprovare, oppure scrivi a sales@pugliai.com."
    };

    let memoryToken = null;
    let memoryTimestamp = 0;
    function generateCSRFToken() {
        const bytes = new Uint8Array(32);
        crypto.getRandomValues(bytes);
        return Array.from(bytes, value => value.toString(16).padStart(2, '0')).join('');
    }
    function isTokenValid() {
        try {
            const timestamp = Number(sessionStorage.getItem('csrf_timestamp'));
            const age = Date.now() - timestamp;
            return timestamp > 0 && age >= 0 && age < 3600000;
        } catch (_) { return memoryTimestamp > 0 && Date.now() - memoryTimestamp < 3600000; }
    }
    function getOrCreateCSRFToken() {
        try {
            let token = sessionStorage.getItem('csrf_token');
            if (!token || !isTokenValid()) {
                token = generateCSRFToken();
                sessionStorage.setItem('csrf_token', token);
                sessionStorage.setItem('csrf_timestamp', String(Date.now()));
            }
            memoryToken = token;
            memoryTimestamp = Date.now();
            return token;
        } catch (_) {
            if (!memoryToken || !isTokenValid()) {
                memoryToken = generateCSRFToken();
                memoryTimestamp = Date.now();
            }
            return memoryToken;
        }
    }
    function hidden(form, name, value) {
        let input = form.querySelector('input[name="' + name + '"]');
        if (!input) {
            input = document.createElement('input'); input.type = 'hidden'; input.name = name;
            form.appendChild(input);
        }
        input.value = value;
    }
    function addHoneypot(form) {
        if (form.querySelector('[name="_honeypot"]')) return;
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:absolute;left:-9999px';
        wrapper.setAttribute('aria-hidden', 'true');
        const input = document.createElement('input');
        input.type = 'text'; input.name = '_honeypot'; input.tabIndex = -1; input.autocomplete = 'off';
        wrapper.appendChild(input); form.appendChild(wrapper);
    }
    function errorElement(input) {
        const id = input.id === 'privacy-consent' ? 'privacy-error' : input.id + '-error';
        let error = document.getElementById(id);
        if (!error && input.id) {
            error = document.createElement('span'); error.id = id; error.className = 'form-error';
            error.setAttribute('aria-live', 'polite'); input.insertAdjacentElement('afterend', error);
            const described = (input.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
            if (!described.includes(id)) described.push(id);
            input.setAttribute('aria-describedby', described.join(' '));
        }
        return error;
    }
    function clearError(input) {
        input.classList.remove('error'); input.removeAttribute('aria-invalid');
        const error = errorElement(input);
        if (error) { error.textContent = ''; error.style.display = 'none'; }
    }
    function showError(input, text) {
        input.classList.add('error'); input.classList.remove('success'); input.setAttribute('aria-invalid', 'true');
        const error = errorElement(input);
        if (error) { error.textContent = text; error.style.display = 'flex'; }
    }
    function isField(input) {
        return input.matches('input,textarea,select') && !input.disabled &&
            !['hidden', 'submit', 'button', 'reset'].includes(input.type) && input.name !== '_honeypot';
    }
    function validateField(input) {
        if (!isField(input)) return true;
        const value = input.value.trim();
        let error = '';
        if (input.id === 'privacy-consent' && !input.checked) error = msg.privacy;
        else if ((input.required && !value) || input.validity.valueMissing) error = msg.required;
        else if (input.type === 'email' && value && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) error = msg.email;
        else if (input.type === 'tel' && value) {
            const clean = value.replace(/[\s\-\(\)]/g, '');
            if (!/^(\+39|0039)?[\s]?([0-9]{9,11})$/.test(clean) &&
                !/^(\+39|0039)?[\s]?3[0-9]{8,9}$/.test(clean) &&
                !/^(\+39|0039)?[\s]?0[0-9]{8,10}$/.test(clean) &&
                !/^[0-9]{9,11}$/.test(clean)) error = msg.phone;
        }
        if (!error && !input.validity.valid) error = msg.invalid;
        if (error) { showError(input, error); return false; }
        clearError(input); return true;
    }
    function validateForm(form) {
        const honey = form.querySelector('[name="_honeypot"]');
        if (honey && honey.value) return false;
        let first = null;
        Array.from(form.elements).filter(isField).forEach(input => {
            if (!validateField(input) && !first) first = input;
        });
        if (first) first.focus();
        return !first;
    }
    function enquiryType(form) {
        const source = form.elements.source && form.elements.source.value;
        if (source === 'acceleratore-candidatura') return 'accelerator';
        if (source === 'landing-sessione-strategica') return 'strategy-session';
        const selected = form.elements.inquiry_type && form.elements.inquiry_type.value;
        return ['process', 'voiceai', 'knowledgeai', 'other'].includes(selected) ? selected : 'other';
    }
    function analyticsGranted() {
        try { return window.PugliAIConsent.read().analytics === true; } catch (_) { return false; }
    }
    function emitAccepted(form, submittedType) {
        if (!analyticsGranted()) return;
        const source = form.elements.source && form.elements.source.value;
        const safeSource = ['contatti', 'landing-sessione-strategica', 'acceleratore-candidatura'].includes(source) ? source : 'unknown';
        try {
            if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', {
                source: safeSource, form_id: form.id, inquiry_type: submittedType
            });
        } catch (_) { /* Analytics cannot change a provider acceptance. */ }
    }
    function providerMessage(value) {
        if (typeof value === 'string') return value.slice(0, 300);
        if (Array.isArray(value)) return value.map(providerMessage).filter(Boolean).join(' ').slice(0, 300);
        if (value && typeof value.message === 'string') return value.message.slice(0, 300);
        return '';
    }
    function fieldErrors(form, body) {
        if (!body || !body.errors || typeof body.errors !== 'object') return null;
        let first = null;
        Object.entries(body.errors).forEach(([name, detail]) => {
            const input = Array.from(form.elements).find(field => (field.name === name || field.id === name) && isField(field));
            const text = providerMessage(detail);
            if (input && text) { showError(input, text); if (!first) first = input; }
        });
        return first;
    }

    function initForm(form) {
        hidden(form, '_csrf', getOrCreateCSRFToken()); addHoneypot(form);
        const success = document.getElementById('form-success');
        const ajax = form.dataset.ajax === 'true' && success;
        const button = form.querySelector('button[type="submit"],input[type="submit"]');
        const status = document.createElement('p');
        status.id = form.id + '-status'; status.className = 'form-error'; status.setAttribute('role', 'alert');
        status.tabIndex = -1; status.style.display = 'none';
        form.insertBefore(status, button || null);
        let state = 'idle';
        let attempts = [];
        function feedback(text, focus) {
            status.textContent = text; status.style.display = 'flex';
            if (focus) status.focus();
        }
        function edited(event) {
            if (isField(event.target)) { event.target.setCustomValidity(''); clearError(event.target); }
        }
        form.addEventListener('input', edited); form.addEventListener('change', edited);
        form.addEventListener('blur', event => { if (isField(event.target)) validateField(event.target); }, true);
        form.addEventListener('submit', async event => {
            if (state === 'submitting' || state === 'accepted') { event.preventDefault(); return; }
            if (!validateForm(form)) { event.preventDefault(); return; }
            const now = Date.now();
            attempts = attempts.filter(time => now - time < 60000);
            if (attempts.length >= 3) { event.preventDefault(); feedback(msg.rate, true); return; }
            hidden(form, '_csrf', getOrCreateCSRFToken()); hidden(form, '_timestamp', String(now));
            if (!ajax) { attempts.push(now); return; }
            event.preventDefault();
            state = 'submitting';
            status.textContent = ''; status.style.display = 'none';
            const payload = new FormData(form);
            const submittedType = enquiryType(form);
            payload.set('inquiry_type', submittedType);
            const paths = ['/contatti.html', '/en/contact.html', '/sessione-strategica.html', '/en/strategy-session.html', '/acceleratore-candidatura.html', '/en/accelerator-apply.html'];
            if (paths.includes(location.pathname)) payload.set('submission_path', location.pathname);
            try {
                const context = window.PugliAIAttribution && window.PugliAIAttribution.getFields();
                const allowed = ['first_landing_path', 'first_referrer_host', 'attribution_captured_at', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
                if (context) allowed.forEach(key => { if (typeof context[key] === 'string') payload.set(key, context[key]); });
            } catch (_) { /* Optional attribution cannot prevent an enquiry. */ }
            // Preserve nodes: the contact enhancement holds its label reference,
            // and can update it while the rest of the form remains editable.
            const labelNodes = button && Array.from(button.childNodes);
            const value = button && button.value;
            if (button) { button.disabled = true; if (button.tagName === 'INPUT') button.value = msg.busy; else button.textContent = msg.busy; }
            form.setAttribute('aria-busy', 'true');
            const controller = new AbortController();
            let timer;
            attempts.push(now);
            try {
                const result = await Promise.race([
                    (async () => {
                        const response = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: payload, signal: controller.signal });
                        let body = null;
                        try { body = await response.json(); } catch (_) { /* Unknown provider response is not acceptance. */ }
                        return { response, body };
                    })(),
                    new Promise((resolve, reject) => { timer = setTimeout(() => { controller.abort(); reject(new Error('Unconfirmed timeout')); }, 20000); })
                ]);
                const { response, body } = result;
                if (response.ok && body && body.code === 200 && body.status === 'success') {
                    state = 'accepted';
                    form.style.display = 'none'; success.style.display = 'block';
                    success.tabIndex = -1; success.focus();
                    emitAccepted(form, submittedType);
                } else {
                    state = 'failed';
                    const first = (response.status === 422 || (body && body.code === 422)) ? fieldErrors(form, body) : null;
                    feedback(response.status === 429 ? msg.retry : (!body && response.ok ? msg.uncertain : msg.failed), !first);
                    if (first) first.focus();
                }
            } catch (_) {
                state = 'failed'; feedback(msg.uncertain, true);
            } finally {
                clearTimeout(timer); form.removeAttribute('aria-busy');
                if (button) {
                    button.disabled = state === 'accepted';
                    if (button.tagName === 'INPUT') button.value = value; else button.replaceChildren(...labelNodes);
                }
            }
        });
    }
    function init() { document.querySelectorAll('form.contact-form').forEach(initForm); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
    window.FormSecurity = { generateCSRFToken, getOrCreateCSRFToken, isTokenValid };
})();
