// Contact Form and FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

// Contact Form Functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form?.querySelector('button[type="submit"]');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');
    
    if (!form) return;
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateContactForm(form)) {
            return;
        }
        
        // Show loading state
        if (submitBtn && btnText && btnLoading) {
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
        }
        
        try {
            // Real form submission with fallback to simulation
            await submitContactForm(form);
            
            // Show success message
            showFormSuccess();
            
            // Track form submission
            trackEvent('contact_form_submission', {
                service_type: form.service.value,
                industry: form.industry.value,
                budget: form.budget.value,
                timeline: form.timeline.value
            });
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormError();
        } finally {
            // Reset button state
            if (submitBtn && btnText && btnLoading) {
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error state when user starts typing
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    });
}

// Form validation
function validateContactForm(form) {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors(form);
    
    // Required fields validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Email validation
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value && !validateEmail(emailField.value)) {
        showFieldError(emailField, 'Inserire un indirizzo email valido');
        isValid = false;
    }
    
    // Phone validation
    const phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value && !validatePhone(phoneField.value)) {
        showFieldError(phoneField, 'Inserire un numero di telefono valido (formato italiano)');
        isValid = false;
    }
    
    // GDPR consent validation
    const gdprConsent = form.querySelector('#gdpr-consent');
    if (gdprConsent && !gdprConsent.checked) {
        showFieldError(gdprConsent, 'È necessario accettare l\'informativa sulla privacy per procedere');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Questo campo è obbligatorio');
        return false;
    }
    
    if (field.type === 'email' && value && !validateEmail(value)) {
        showFieldError(field, 'Inserire un indirizzo email valido');
        return false;
    }
    
    if (field.type === 'tel' && value && !validatePhone(value)) {
        showFieldError(field, 'Inserire un numero di telefono valido');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
}

function clearFormErrors(form) {
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
    
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.remove();
    });
}

// Simulate form submission (replace with actual API call)
// Enhanced form submission with real backend support
async function submitContactForm(form) {
    const formData = new FormData(form);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Add checkboxes that might not be checked
    data.marketingConsent = form.querySelector('#marketing-consent')?.checked || false;
    data.profilingConsent = form.querySelector('#profiling-consent')?.checked || false;
    data.timestamp = new Date().toISOString();
    data.source = 'website';
    
    console.log('Submitting form data:', data);
    
    // Try multiple submission methods
    const submissionMethods = [
        () => submitToFormspree(data),
        () => submitToEmailService(data),
        () => submitToBackend(data)
    ];
    
    let lastError = null;
    
    for (const method of submissionMethods) {
        try {
            const result = await method();
            console.log('Form submitted successfully:', result);
            return result;
        } catch (error) {
            console.warn('Submission method failed:', error);
            lastError = error;
        }
    }
    
    // If all methods fail, throw the last error
    throw lastError || new Error('All submission methods failed');
}

// Formspree submission (free tier available)
async function submitToFormspree(data) {
    const formspreeEndpoint = 'https://formspree.io/f/mbjnkjlr'; // Replace with your Formspree endpoint
    
    const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error(`Formspree submission failed: ${response.status}`);
    }
    
    return await response.json();
}

// Email service submission (using EmailJS or similar)
async function submitToEmailService(data) {
    // EmailJS configuration (replace with your EmailJS credentials)
    const emailjsConfig = {
        service_id: 'your_service_id',
        template_id: 'your_template_id',
        user_id: 'your_user_id'
    };
    
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS library not loaded');
    }
    
    const templateParams = {
        to_email: 'info@pugliai.com',
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        phone: data.phone,
        role: data.role,
        service_type: data.service,
        industry: data.industry,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message,
        marketing_consent: data.marketingConsent,
        profiling_consent: data.profilingConsent,
        timestamp: data.timestamp
    };
    
    return await emailjs.send(
        emailjsConfig.service_id,
        emailjsConfig.template_id,
        templateParams,
        emailjsConfig.user_id
    );
}

// Backend API submission
async function submitToBackend(data) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error(`Backend submission failed: ${response.status}`);
    }
    
    return await response.json();
}

function showFormSuccess() {
    // Create success modal or redirect to thank you page
    const modal = createModal(
        'Richiesta Inviata con Successo!',
        'Grazie per aver contattato PugliAI. Un nostro esperto vi contatterà entro 24 ore per programmare la consulenza gratuita.',
        [
            {
                text: 'Chiudi',
                class: 'btn btn-primary',
                action: () => closeModal()
            }
        ]
    );
    
    document.body.appendChild(modal);
    
    // Reset form
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
    }
}

function showFormError() {
    const modal = createModal(
        'Errore Invio Richiesta',
        'Si è verificato un errore durante l\'invio della richiesta. Vi preghiamo di riprovare o contattarci direttamente.',
        [
            {
                text: 'Riprova',
                class: 'btn btn-primary',
                action: () => closeModal()
            },
            {
                text: 'Contatta Direttamente',
                class: 'btn btn-outline',
                action: () => {
                    window.location.href = 'tel:+390287054321';
                    closeModal();
                }
            }
        ]
    );
    
    document.body.appendChild(modal);
}

// Modal utility functions
function createModal(title, message, buttons) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>${message}</p>
            </div>
            <div class="modal-footer">
                ${buttons.map((btn, index) => `
                    <button class="${btn.class}" data-modal-action="${index}">${btn.text}</button>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // Add button event listeners
        buttons.forEach((btn, index) => {
            const btnElement = modal.querySelector(`[data-modal-action="${index}"]`);
            if (btnElement && btn.action) {
                btnElement.addEventListener('click', btn.action);
            }
        });
    }, 0);
    
    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            }
            .modal-content {
                background: white;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
            }
            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid #e9ecef;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h3 {
                margin: 0;
                color: #1B365D;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6c757d;
            }
            .modal-body {
                padding: 1.5rem;
            }
            .modal-footer {
                padding: 1.5rem;
                border-top: 1px solid #e9ecef;
                display: flex;
                gap: 1rem;
                justify-content: flex-end;
            }
        `;
        document.head.appendChild(style);
    }
    
    return modal;
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// Make closeModal globally available
window.closeModal = closeModal;

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
        
        // Keyboard accessibility
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
        
        // Make focusable
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        // Update aria-expanded when state changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isActive = item.classList.contains('active');
                    question.setAttribute('aria-expanded', isActive.toString());
                }
            });
        });
        
        observer.observe(item, { attributes: true });
    });
}

// Email validation function (improved)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation function (Italian format)
function validatePhone(phone) {
    // Remove spaces and common separators
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // Italian phone number patterns
    const patterns = [
        /^(\+39|0039)?3[0-9]{8,9}$/, // Mobile
        /^(\+39|0039)?0[0-9]{1,4}[0-9]{4,8}$/, // Landline
        /^(\+39|0039)?[0-9]{6,11}$/ // General
    ];
    
    return patterns.some(pattern => pattern.test(cleanPhone));
}

// Form auto-save functionality (optional)
function initFormAutoSave() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Load saved value
        const savedValue = localStorage.getItem(`contact_form_${input.name}`);
        if (savedValue && input.type !== 'checkbox') {
            input.value = savedValue;
        } else if (savedValue && input.type === 'checkbox') {
            input.checked = savedValue === 'true';
        }
        
        // Save on change
        input.addEventListener('change', function() {
            if (this.type === 'checkbox') {
                localStorage.setItem(`contact_form_${this.name}`, this.checked);
            } else {
                localStorage.setItem(`contact_form_${this.name}`, this.value);
            }
        });
    });
    
    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        inputs.forEach(input => {
            localStorage.removeItem(`contact_form_${input.name}`);
        });
    });
}

// Initialize auto-save (uncomment to enable)
// initFormAutoSave();

// Handle form analytics
function trackFormInteraction(field, action) {
    if (typeof trackEvent === 'function') {
        trackEvent('form_interaction', {
            field_name: field.name,
            field_type: field.type,
            action: action,
            page_location: window.location.href
        });
    }
}

// Track form field interactions
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const fields = form.querySelectorAll('input, select, textarea');
    
    fields.forEach(field => {
        field.addEventListener('focus', function() {
            trackFormInteraction(this, 'focus');
        });
        
        field.addEventListener('blur', function() {
            if (this.value.trim()) {
                trackFormInteraction(this, 'complete');
            }
        });
    });
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone,
        validateContactForm,
        closeModal
    };
}
