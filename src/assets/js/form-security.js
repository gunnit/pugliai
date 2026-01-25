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

    // Detect language
    const isEnglish = window.location.pathname.includes('/en/');

    // Localized messages
    const messages = {
        it: {
            required: 'Questo campo è obbligatorio',
            email: 'Inserisci un indirizzo email valido',
            phone: 'Inserisci un numero di telefono valido',
            privacy: 'Devi accettare la Privacy Policy per continuare',
            rateLimit: 'Troppe richieste. Attendi un momento prima di riprovare.',
            success: 'Messaggio inviato con successo!'
        },
        en: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number',
            privacy: 'You must accept the Privacy Policy to continue',
            rateLimit: 'Too many requests. Please wait a moment before trying again.',
            success: 'Message sent successfully!'
        }
    };

    const msg = isEnglish ? messages.en : messages.it;

    // Show error for a field
    function showError(input, message) {
        input.classList.add('error');
        input.classList.remove('success');

        const errorSpan = document.getElementById(input.id + '-error');
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'flex';
        }
    }

    // Clear error for a field
    function clearError(input) {
        input.classList.remove('error');

        const errorSpan = document.getElementById(input.id + '-error');
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
    }

    // Show success for a field
    function showSuccess(input) {
        input.classList.remove('error');
        input.classList.add('success');
        clearError(input);
    }

    // Validate a single field
    function validateField(input) {
        const value = input.value.trim();

        // Required check
        if (input.hasAttribute('required') && !value) {
            showError(input, msg.required);
            return false;
        }

        // Email validation
        if (input.type === 'email' && value) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                showError(input, msg.email);
                return false;
            }
        }

        // Phone validation (optional field)
        if (input.type === 'tel' && value) {
            const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
            const phoneRegex = /^(\+39|0039)?[\s]?([0-9]{9,11})$/;
            const mobileRegex = /^(\+39|0039)?[\s]?3[0-9]{8,9}$/;
            const landlineRegex = /^(\+39|0039)?[\s]?0[0-9]{8,10}$/;
            const plainRegex = /^[0-9]{9,11}$/;

            if (!phoneRegex.test(cleanPhone) &&
                !mobileRegex.test(cleanPhone) &&
                !landlineRegex.test(cleanPhone) &&
                !plainRegex.test(cleanPhone)) {
                showError(input, msg.phone);
                return false;
            }
        }

        // If we get here, the field is valid
        if (value) {
            showSuccess(input);
        } else {
            clearError(input);
        }
        return true;
    }

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
            alert(msg.rateLimit);
            return false;
        }

        let isValid = true;

        // Validate all required fields
        const inputs = form.querySelectorAll('input:not([type="hidden"]):not([type="checkbox"]), textarea');
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        // Validate privacy checkbox
        const privacyCheckbox = form.querySelector('#privacy-consent');
        if (privacyCheckbox && !privacyCheckbox.checked) {
            const privacyError = document.getElementById('privacy-error');
            if (privacyError) {
                privacyError.textContent = msg.privacy;
                privacyError.style.display = 'flex';
            }
            isValid = false;
        } else if (privacyCheckbox) {
            const privacyError = document.getElementById('privacy-error');
            if (privacyError) {
                privacyError.style.display = 'none';
            }
        }

        return isValid;
    }

    // Initialize security features on all forms
    function initFormSecurity() {
        const forms = document.querySelectorAll('form.contact-form');

        forms.forEach(form => {
            // Add CSRF token
            addCSRFToForm(form);

            // Add honeypot
            addHoneypot(form);

            // Add real-time validation on blur
            const inputs = form.querySelectorAll('input:not([type="hidden"]):not([type="checkbox"]), textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });

                input.addEventListener('input', function() {
                    // Clear error on typing
                    this.setCustomValidity('');
                    if (this.classList.contains('error')) {
                        clearError(this);
                    }
                });
            });

            // Privacy checkbox validation
            const privacyCheckbox = form.querySelector('#privacy-consent');
            if (privacyCheckbox) {
                privacyCheckbox.addEventListener('change', function() {
                    const privacyError = document.getElementById('privacy-error');
                    if (privacyError) {
                        privacyError.style.display = 'none';
                    }
                });
            }

            // Add submit handler
            form.addEventListener('submit', function(e) {
                if (!validateForm(form)) {
                    e.preventDefault();
                    // Focus on first error field
                    const firstError = form.querySelector('.error');
                    if (firstError) {
                        firstError.focus();
                    }
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

                // Show success message if form-success element exists (for AJAX forms)
                // Note: For standard form submission, redirect handles success
                const successEl = document.getElementById('form-success');
                if (successEl && form.getAttribute('data-ajax') === 'true') {
                    e.preventDefault();

                    // Submit via fetch
                    fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form)
                    }).then(response => {
                        if (response.ok) {
                            form.style.display = 'none';
                            successEl.style.display = 'block';
                        }
                    }).catch(error => {
                        console.error('Form submission error:', error);
                    });
                }
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