// Contact Form and FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
    initMaps();
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

// Interactive Maps Functionality
function initMaps() {
    const mapPlaceholder = document.getElementById('map-placeholder');
    const loadGoogleMapsBtn = document.getElementById('load-google-maps');
    const loadOpenStreetMapBtn = document.getElementById('load-openstreetmap');
    const googleMapContainer = document.getElementById('google-map');
    const openStreetMapContainer = document.getElementById('openstreetmap');
    
    if (!mapPlaceholder) return; // Not on contacts page
    
    // PugliAI office location
    const officeLocation = {
        lat: 40.5587,
        lng: 17.7058,
        address: 'Via Giovanni Forleo 45, 72022 Latiano (BR), Italia',
        name: 'PugliAI - Sede Principale',
        phone: '+39 045 123 4567',
        email: 'info@pugliai.com'
    };
    
    // Load Google Maps
    loadGoogleMapsBtn?.addEventListener('click', function() {
        loadGoogleMaps(officeLocation, mapPlaceholder, googleMapContainer);
        trackEvent('map_interaction', { map_type: 'google_maps', action: 'load' });
    });
    
    // Load OpenStreetMap
    loadOpenStreetMapBtn?.addEventListener('click', function() {
        loadOpenStreetMap(officeLocation, mapPlaceholder, openStreetMapContainer);
        trackEvent('map_interaction', { map_type: 'openstreetmap', action: 'load' });
    });
}

// Load Google Maps with privacy consent
function loadGoogleMaps(location, placeholder, container) {
    // Show loading state
    placeholder.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>Caricamento Google Maps...</p>
        </div>
    `;
    
    // Load Google Maps API if not already loaded
    if (!window.google || !window.google.maps) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initGoogleMap&loading=async`;
        script.async = true;
        script.defer = true;
        
        // Store location data for callback
        window.tempMapLocation = location;
        window.tempMapContainer = container;
        window.tempMapPlaceholder = placeholder;
        
        document.head.appendChild(script);
    } else {
        initGoogleMap(location, container, placeholder);
    }
}

// Initialize Google Map (callback function)
function initGoogleMap(location, container, placeholder) {
    // Use stored data if called from API callback
    if (!location && window.tempMapLocation) {
        location = window.tempMapLocation;
        container = window.tempMapContainer;
        placeholder = window.tempMapPlaceholder;
    }
    
    try {
        // Hide placeholder and show map container
        placeholder.style.display = 'none';
        container.style.display = 'block';
        container.style.height = '400px';
        
        // Initialize map
        const map = new google.maps.Map(container, {
            zoom: 15,
            center: { lat: location.lat, lng: location.lng },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                // Custom styling for better integration
                {
                    featureType: 'all',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#1B365D' }]
                },
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: [{ color: '#46bcec' }]
                }
            ]
        });
        
        // Add marker
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
            animation: google.maps.Animation.DROP
        });
        
        // Info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="map-info-window">
                    <h3 style="color: #1B365D; margin: 0 0 10px 0;">${location.name}</h3>
                    <p style="margin: 5px 0;"><strong>📍</strong> ${location.address}</p>
                    <p style="margin: 5px 0;"><strong>📞</strong> <a href="tel:${location.phone}">${location.phone}</a></p>
                    <p style="margin: 5px 0;"><strong>📧</strong> <a href="mailto:${location.email}">${location.email}</a></p>
                    <div style="margin-top: 10px;">
                        <a href="https://maps.google.com/maps/dir//${location.lat},${location.lng}" 
                           target="_blank" 
                           style="color: #00E676; text-decoration: none;">
                            🗺️ Ottieni Indicazioni
                        </a>
                    </div>
                </div>
            `
        });
        
        // Open info window by default
        infoWindow.open(map, marker);
        
        // Click handler for marker
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        
        // Add controls
        map.setOptions({
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
            zoomControl: true
        });
        
        console.log('Google Maps loaded successfully');
        
    } catch (error) {
        console.error('Error initializing Google Maps:', error);
        showMapError(placeholder, 'Errore nel caricamento di Google Maps. Prova con OpenStreetMap.');
    }
}

// Load OpenStreetMap (privacy-friendly alternative)
function loadOpenStreetMap(location, placeholder, container) {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        // Load Leaflet CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        cssLink.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        cssLink.crossOrigin = '';
        document.head.appendChild(cssLink);
        
        // Load Leaflet JS
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.onload = () => initLeafletMap(location, placeholder, container);
        document.head.appendChild(script);
    } else {
        initLeafletMap(location, placeholder, container);
    }
}

// Initialize Leaflet (OpenStreetMap) map
function initLeafletMap(location, placeholder, container) {
    try {
        // Show loading state
        placeholder.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Caricamento OpenStreetMap...</p>
            </div>
        `;
        
        setTimeout(() => {
            // Hide placeholder and show map container
            placeholder.style.display = 'none';
            container.style.display = 'block';
            container.style.height = '400px';
            
            // Initialize map
            const map = L.map(container).setView([location.lat, location.lng], 15);
            
            // Add tile layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            // Add marker
            const marker = L.marker([location.lat, location.lng]).addTo(map);
            
            // Add popup
            marker.bindPopup(`
                <div class="map-popup">
                    <h3 style="color: #1B365D; margin: 0 0 10px 0;">${location.name}</h3>
                    <p style="margin: 5px 0;"><strong>📍</strong> ${location.address}</p>
                    <p style="margin: 5px 0;"><strong>📞</strong> <a href="tel:${location.phone}">${location.phone}</a></p>
                    <p style="margin: 5px 0;"><strong>📧</strong> <a href="mailto:${location.email}">${location.email}</a></p>
                    <div style="margin-top: 10px;">
                        <a href="https://www.openstreetmap.org/directions?from=&to=${location.lat}%2C${location.lng}" 
                           target="_blank" 
                           style="color: #00E676; text-decoration: none;">
                            🗺️ Ottieni Indicazioni
                        </a>
                    </div>
                </div>
            `).openPopup();
            
            // Add circle to highlight the location
            L.circle([location.lat, location.lng], {
                color: '#00E676',
                fillColor: '#00E676',
                fillOpacity: 0.1,
                radius: 100
            }).addTo(map);
            
            console.log('OpenStreetMap loaded successfully');
        }, 500);
        
    } catch (error) {
        console.error('Error initializing OpenStreetMap:', error);
        showMapError(placeholder, 'Errore nel caricamento della mappa. Riprova più tardi.');
    }
}

// Show map error
function showMapError(placeholder, message) {
    placeholder.innerHTML = `
        <div class="map-error">
            <div class="error-icon">⚠️</div>
            <h3>Errore Caricamento Mappa</h3>
            <p>${message}</p>
            <button onclick="location.reload()" class="btn btn-outline">Ricarica Pagina</button>
        </div>
    `;
}

// Make initGoogleMap globally available for API callback
window.initGoogleMap = function() {
    initGoogleMap();
};

// Add CSS for loading states and map styling
if (!document.querySelector('#map-styles')) {
    const style = document.createElement('style');
    style.id = 'map-styles';
    style.textContent = `
        .loading-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 200px;
            background: var(--gray-50);
            border-radius: 12px;
        }
        
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--gray-200);
            border-top: 4px solid var(--accent-emerald);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .map-error {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 200px;
            background: var(--gray-50);
            border-radius: 12px;
            text-align: center;
            padding: 20px;
        }
        
        .error-icon {
            font-size: 2rem;
            margin-bottom: 16px;
        }
        
        .map-error h3 {
            color: var(--primary-blue);
            margin-bottom: 12px;
        }
        
        .google-map, .openstreetmap {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }
        
        .offices-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--space-8);
            margin-top: var(--space-12);
        }
        
        .office-card {
            background: var(--white);
            border-radius: 16px;
            padding: var(--space-8);
            box-shadow: var(--shadow-lg);
            transition: all var(--transition-normal);
        }
        
        .office-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-xl);
        }
        
        .office-card.future-office {
            background: var(--gray-50);
            opacity: 0.8;
        }
        
        .office-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--space-6);
        }
        
        .office-header h3 {
            color: var(--primary-blue);
            margin: 0;
        }
        
        .office-status {
            font-size: 0.875rem;
            font-weight: 500;
            padding: var(--space-1) var(--space-3);
            border-radius: 20px;
            background: var(--gray-100);
        }
        
        .office-status.online {
            background: rgba(0, 230, 118, 0.1);
            color: var(--accent-emerald);
        }
        
        .office-status.upcoming {
            background: rgba(255, 193, 7, 0.1);
            color: #FF6F00;
        }
        
        .office-info {
            display: grid;
            gap: var(--space-6);
        }
        
        .office-address {
            line-height: 1.6;
            color: var(--gray-700);
        }
        
        .office-details {
            display: grid;
            gap: var(--space-2);
        }
        
        .detail-item {
            color: var(--gray-600);
        }
        
        .office-actions {
            display: flex;
            gap: var(--space-3);
            flex-wrap: wrap;
        }
        
        .map-buttons {
            display: flex;
            gap: var(--space-4);
            margin: var(--space-6) 0;
            flex-wrap: wrap;
        }
        
        .privacy-note {
            color: var(--gray-500);
            text-align: center;
            margin-top: var(--space-4);
        }
        
        .privacy-note a {
            color: var(--accent-emerald);
            text-decoration: none;
        }
        
        .privacy-note a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .office-header {
                flex-direction: column;
                align-items: flex-start;
                gap: var(--space-2);
            }
            
            .map-buttons {
                flex-direction: column;
            }
            
            .office-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone,
        validateContactForm,
        closeModal,
        initMaps
    };
}
