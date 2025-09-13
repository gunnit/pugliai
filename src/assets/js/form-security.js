/**
 * Form Security Module
 * Adds CSRF protection and enhanced security to forms
 */

(function() {
    'use strict';

    // Generate a pseudo-random CSRF token
    function generateCSRFToken() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    // Store CSRF token in sessionStorage
    function getOrCreateCSRFToken() {
        let token = sessionStorage.getItem('csrf_token');
        if (!token) {
            token = generateCSRFToken();
            sessionStorage.setItem('csrf_token', token);
            sessionStorage.setItem('csrf_timestamp', Date.now().toString());
        }
        return token;
    }

    // Validate token age (max 1 hour)
    function isTokenValid() {
        const timestamp = sessionStorage.getItem('csrf_timestamp');
        if (!timestamp) return false;
        
        const age = Date.now() - parseInt(timestamp);
        const oneHour = 60 * 60 * 1000;
        return age < oneHour;
    }

    // Add CSRF token to form
    function addCSRFToForm(form) {
        // Check if token is still valid
        if (!isTokenValid()) {
            sessionStorage.removeItem('csrf_token');
            sessionStorage.removeItem('csrf_timestamp');
        }

        const token = getOrCreateCSRFToken();
        
        // Check if CSRF field already exists
        let csrfField = form.querySelector('input[name="_csrf"]');
        if (!csrfField) {
            csrfField = document.createElement('input');
            csrfField.type = 'hidden';
            csrfField.name = '_csrf';
            form.appendChild(csrfField);
        }
        csrfField.value = token;
    }

    // Add honeypot field for bot protection
    function addHoneypot(form) {
        const honeypot = document.createElement('div');
        honeypot.style.position = 'absolute';
        honeypot.style.left = '-9999px';
        honeypot.setAttribute('aria-hidden', 'true');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.name = '_honeypot';
        input.tabIndex = -1;
        input.autocomplete = 'off';
        
        honeypot.appendChild(input);
        form.appendChild(honeypot);
    }

    // Rate limiting
    const rateLimiter = {
        submissions: [],
        maxSubmissions: 3,
        timeWindow: 60000, // 1 minute
        
        canSubmit: function() {
            const now = Date.now();
            // Remove old submissions
            this.submissions = this.submissions.filter(time => now - time < this.timeWindow);
            
            if (this.submissions.length >= this.maxSubmissions) {
                return false;
            }
            
            this.submissions.push(now);
            return true;
        }
    };

    // Enhanced form validation
    function validateForm(form) {
        // Check honeypot
        const honeypot = form.querySelector('input[name="_honeypot"]');
        if (honeypot && honeypot.value !== '') {
            console.warn('Honeypot triggered');
            return false;
        }

        // Check rate limiting
        if (!rateLimiter.canSubmit()) {
            alert('Troppe richieste. Attendi un momento prima di riprovare.');
            return false;
        }

        // Validate email format more strictly
        const email = form.querySelector('input[type="email"]');
        if (email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email.value)) {
                email.setCustomValidity('Inserisci un indirizzo email valido');
                email.reportValidity();
                return false;
            }
        }

        // Validate phone number for Italian format (more flexible)
        const phone = form.querySelector('input[type="tel"]');
        if (phone && phone.value) {
            // Remove all spaces, dashes, and parentheses for validation
            const cleanPhone = phone.value.replace(/[\s\-\(\)]/g, '');
            
            // Accept various formats:
            // +39 with 9-10 digits
            // 0039 with 9-10 digits  
            // 3xx (mobile) with 9-10 digits total
            // 0x (landline) with 8-11 digits total
            // Plain 9-11 digit numbers
            const phoneRegex = /^(\+39|0039)?[\s]?([0-9]{9,11})$/;
            const mobileRegex = /^(\+39|0039)?[\s]?3[0-9]{8,9}$/;
            const landlineRegex = /^(\+39|0039)?[\s]?0[0-9]{8,10}$/;
            const plainRegex = /^[0-9]{9,11}$/;
            
            if (!phoneRegex.test(cleanPhone) && 
                !mobileRegex.test(cleanPhone) && 
                !landlineRegex.test(cleanPhone) &&
                !plainRegex.test(cleanPhone)) {
                phone.setCustomValidity('Inserisci un numero di telefono valido');
                phone.reportValidity();
                return false;
            }
        }

        return true;
    }

    // Initialize security features on all forms
    function initFormSecurity() {
        const forms = document.querySelectorAll('form.contact-form');
        
        forms.forEach(form => {
            // Add CSRF token
            addCSRFToForm(form);
            
            // Add honeypot
            addHoneypot(form);
            
            // Add submit handler
            form.addEventListener('submit', function(e) {
                if (!validateForm(form)) {
                    e.preventDefault();
                    return false;
                }
                
                // Refresh CSRF token for next submission
                addCSRFToForm(form);
                
                // Add timestamp
                const timestamp = document.createElement('input');
                timestamp.type = 'hidden';
                timestamp.name = '_timestamp';
                timestamp.value = Date.now().toString();
                form.appendChild(timestamp);
            });

            // Clear custom validity on input
            form.querySelectorAll('input').forEach(input => {
                input.addEventListener('input', function() {
                    this.setCustomValidity('');
                });
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormSecurity);
    } else {
        initFormSecurity();
    }

    // Expose for testing
    window.FormSecurity = {
        generateCSRFToken,
        getOrCreateCSRFToken,
        isTokenValid
    };
})();