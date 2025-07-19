// Enhanced JavaScript with Modern Animations and Effects
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all enhanced components
    initCookieBanner();
    initMobileMenu();
    initDropdownMenus();
    initNumberCounters();
    initSmoothScrolling();
    initAccessibility();
    initScrollAnimations();
    initParallaxEffects();
    initModernEffects();
    initCursorEffects();
    initLoadingAnimations();
    initIntersectionObserver();
    initScrollProgress();
    initFloatingElements();
    initGlassmorphismEffects();
    initPerformanceMonitoring();
});

// Enhanced Cookie Banner with Animations
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptAllBtn = document.getElementById('cookie-all');
    const acceptNecessaryBtn = document.getElementById('cookie-necessary');
    const settingsBtn = document.getElementById('cookie-settings');
    
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
            // Add entrance animation
            cookieBanner.style.animation = 'slideInUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }, 2000);
    } else if (cookieConsent === 'all') {
        loadAnalytics();
    }
    
    acceptAllBtn?.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'all');
        cookieBanner.style.animation = 'slideOutDown 0.4s ease-in-out';
        setTimeout(() => cookieBanner.classList.remove('show'), 400);
        loadAnalytics();
        trackEvent('cookie_consent', { consent_type: 'all' });
    });
    
    acceptNecessaryBtn?.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'necessary');
        cookieBanner.style.animation = 'slideOutDown 0.4s ease-in-out';
        setTimeout(() => cookieBanner.classList.remove('show'), 400);
        trackEvent('cookie_consent', { consent_type: 'necessary' });
    });
    
    settingsBtn?.addEventListener('click', function() {
        showCookieSettings();
    });
}

// Enhanced Mobile Menu with Modern Animations
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!mobileMenuToggle || !navMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Animate hamburger to X
        animateHamburger(mobileMenuToggle, isExpanded);
        
        // Stagger menu items animation
        if (isExpanded) {
            animateMenuItems(navMenu);
        }
        
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
    
    // Close menu handlers
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target) && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function animateHamburger(toggle, isOpen) {
    if (!toggle) return; // Exit if toggle is null
    
    const spans = toggle.querySelectorAll('span');
    if (spans.length < 3) return; // Exit if we don't have 3 spans
    
    if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    }
}

function animateMenuItems(navMenu) {
    const menuItems = navMenu.querySelectorAll('.nav-item');
    menuItems.forEach((item, index) => {
        item.style.animation = `slideInRight 0.3s ease-out ${index * 0.1}s both`;
    });
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    
    if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        animateHamburger(mobileMenuToggle, false);
    }
    
    document.body.style.overflow = '';
}

// Enhanced Number Counters with Easing
function initNumberCounters() {
    const numberCards = document.querySelectorAll('.number-card');
    const options = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberValue = entry.target.querySelector('.number-value');
                if (numberValue && !numberValue.classList.contains('animated')) {
                    animateNumberWithEasing(numberValue);
                    numberValue.classList.add('animated');
                    
                    // Add card animation
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                }
            }
        });
    }, options);
    
    numberCards.forEach(card => {
        observer.observe(card);
    });
}

function animateNumberWithEasing(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2500;
    const startTime = performance.now();
    
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        
        let current = target * easedProgress;
        
        // Format number based on value
        let displayValue;
        if (target === 2.5) {
            displayValue = current.toFixed(1);
        } else if (target === 3.7) {
            displayValue = current.toFixed(1);
        } else {
            displayValue = Math.floor(current);
        }
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Enhanced Smooth Scrolling with Header Detection
function initSmoothScrolling() {
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add scroll-based header styling
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(() => {
        const scrollY = window.scrollY;
        
        if (header) {
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = scrollY;
    }, 16));
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = header?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                smoothScrollTo(targetPosition, 1000);
            }
        });
    });
}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();
    
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, start + distance * easedProgress);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Advanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add appropriate animation based on element type
                if (element.classList.contains('service-card')) {
                    element.style.animation = 'fadeInUp 0.8s ease-out';
                } else if (element.classList.contains('industry-card')) {
                    element.style.animation = 'fadeInScale 0.6s ease-out';
                } else if (element.classList.contains('client-logo-card')) {
                    element.style.animation = 'fadeIn 0.5s ease-out';
                } else if (element.classList.contains('partner-card')) {
                    element.style.animation = 'slideInUp 0.7s ease-out';
                } else if (element.classList.contains('section-header')) {
                    element.style.animation = 'fadeInDown 0.8s ease-out';
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(`
        .service-card, 
        .industry-card, 
        .client-logo-card, 
        .partner-card, 
        .section-header,
        .testimonial-content,
        .cta-content
    `);
    
    animatableElements.forEach(element => {
        observer.observe(element);
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero::before, .ai-pattern');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

// Modern Interactive Effects
function initModernEffects() {
    // Magnetic buttons
    const magneticButtons = document.querySelectorAll('.btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'translate(0, 0)';
        });
    });
    
    // Tilt effect on cards
    const tiltCards = document.querySelectorAll('.service-card, .industry-card, .partner-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const rotateX = (e.clientY - centerY) / 10;
            const rotateY = (centerX - e.clientX) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Custom Cursor Effects
function initCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<div class="cursor-inner"></div>';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const delay = 0.1;
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Add cursor states
    const hoverElements = document.querySelectorAll('a, button, .btn');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}

// Loading Animations
function initLoadingAnimations() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="img/pittogramma.png" alt="PugliAI" class="loader-logo-img">
            </div>
            <div class="loader-progress">
                <div class="loader-bar"></div>
            </div>
            <div class="loader-text">Caricamento...</div>
        </div>
    `;
    document.body.appendChild(loader);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.animation = 'fadeOut 0.8s ease-in-out';
            setTimeout(() => {
                loader.remove();
                document.body.classList.add('loaded');
            }, 800);
        }, 500);
    });
}

// Intersection Observer for Various Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Stagger animations for grid items
                if (element.parentElement.classList.contains('services-grid')) {
                    const siblings = Array.from(element.parentElement.children);
                    const index = siblings.indexOf(element);
                    element.style.animationDelay = `${index * 0.2}s`;
                }
                
                element.classList.add('animate-in');
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = `${progress}%`;
    }, 16));
}

// Floating Elements Animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.hero-visual::before, .hero-visual::after');
    
    function animateFloatingElements() {
        floatingElements.forEach((element, index) => {
            const time = Date.now() * 0.001;
            const x = Math.sin(time + index) * 10;
            const y = Math.cos(time + index) * 15;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        requestAnimationFrame(animateFloatingElements);
    }
    
    animateFloatingElements();
}

// Glassmorphism Effects
function initGlassmorphismEffects() {
    const glassElements = document.querySelectorAll('.badge, .number-card, .partner-card');
    
    glassElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Dropdown Menu Enhancements
function initDropdownMenus() {
    const dropdownItems = document.querySelectorAll('.dropdown');
    
    dropdownItems.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (!dropdownContent) return; // Skip if no dropdown content
        
        const dropdownLinks = dropdownContent.querySelectorAll('a');
        let timeout;
        
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            dropdownContent.style.display = 'block';
            
            // Stagger dropdown items
            dropdownLinks.forEach((link, index) => {
                link.style.animation = `slideInDown 0.3s ease-out ${index * 0.05}s both`;
            });
        });
        
        dropdown.addEventListener('mouseleave', function() {
            timeout = setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 200);
        });
    });
}

// Accessibility Improvements
function initAccessibility() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focus-visible');
        });
    });
    
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Salta al contenuto principale';
    skipLink.className = 'skip-link';
    document.body.prepend(skipLink);
    
    // Add aria-live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
}

// Performance Utilities
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced Analytics
function loadAnalytics() {
    console.log('Analytics loaded');
    
    // Track page load time
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        trackEvent('page_load_time', { load_time: loadTime });
    });
}

function trackEvent(eventName, eventData = {}) {
    if (localStorage.getItem('cookieConsent') === 'all') {
        console.log('Event tracked:', eventName, eventData);
        
        // Send to analytics service
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
    }
}

// Cookie Settings Modal
function showCookieSettings() {
    const modal = document.createElement('div');
    modal.className = 'cookie-modal';
    modal.innerHTML = `
        <div class="cookie-modal-content">
            <h3>Impostazioni Cookie</h3>
            <div class="cookie-categories">
                <div class="cookie-category">
                    <label>
                        <input type="checkbox" checked disabled>
                        Cookie Necessari
                    </label>
                    <p>Questi cookie sono essenziali per il funzionamento del sito.</p>
                </div>
                <div class="cookie-category">
                    <label>
                        <input type="checkbox" id="analytics-cookies">
                        Cookie Analytics
                    </label>
                    <p>Questi cookie ci aiutano a migliorare il sito analizzando come viene utilizzato.</p>
                </div>
            </div>
            <div class="cookie-modal-actions">
                <button class="btn btn-outline" id="close-cookie-modal">Annulla</button>
                <button class="btn btn-primary" id="save-cookie-settings">Salva Impostazioni</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listeners instead of onclick
    document.getElementById('close-cookie-modal').addEventListener('click', closeCookieModal);
    document.getElementById('save-cookie-settings').addEventListener('click', saveCookieSettings);
    
    setTimeout(() => modal.classList.add('show'), 100);
}

function closeCookieModal() {
    const modal = document.querySelector('.cookie-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

function saveCookieSettings() {
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    if (!analyticsCheckbox) return;
    
    const analyticsEnabled = analyticsCheckbox.checked;
    const consent = analyticsEnabled ? 'all' : 'necessary';
    
    localStorage.setItem('cookieConsent', consent);
    
    if (analyticsEnabled) {
        loadAnalytics();
    }
    
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
    
    closeCookieModal();
    trackEvent('cookie_settings_saved', { consent_type: consent });
}

// Make functions globally available for any HTML onclick calls
window.closeCookieModal = closeCookieModal;
window.saveCookieSettings = saveCookieSettings;

// Enhanced Performance Monitoring
function initPerformanceMonitoring() {
    // Monitor FPS
    let fps = 0;
    let lastTime = performance.now();
    
    function calculateFPS() {
        const currentTime = performance.now();
        fps = Math.round(1000 / (currentTime - lastTime));
        lastTime = currentTime;
        
        if (fps < 30) {
            console.warn('Low FPS detected:', fps);
        }
        
        requestAnimationFrame(calculateFPS);
    }
    
    requestAnimationFrame(calculateFPS);
    
    // Monitor memory usage
    if (performance.memory) {
        setInterval(() => {
            const memory = performance.memory;
            console.log('Memory usage:', {
                used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
                total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
                limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
            });
        }, 10000);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideOutDown {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(100%); opacity: 0; }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes fadeInScale {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeInDown {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideInDown {
        from { transform: translateY(-10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--accent-emerald);
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    }
    
    .custom-cursor.cursor-hover {
        transform: scale(1.5);
    }
    
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }
    
    .loader-content {
        text-align: center;
        color: var(--white);
    }
    
    .loader-logo-img {
        width: 60px;
        height: 60px;
        animation: pulse 2s ease-in-out infinite;
    }
    
    .loader-progress {
        width: 200px;
        height: 3px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        overflow: hidden;
        margin: 20px auto;
    }
    
    .loader-bar {
        height: 100%;
        background: var(--secondary-gold);
        width: 0%;
        animation: loadingBar 2s ease-in-out infinite;
    }
    
    @keyframes loadingBar {
        0% { width: 0%; }
        50% { width: 70%; }
        100% { width: 100%; }
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-emerald);
        z-index: 1000;
        transition: width 0.1s ease;
    }
    
    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: var(--white);
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
        transition: top 0.3s ease;
    }
    
    .skip-link:focus {
        top: 6px;
    }
    
    .focus-visible {
        outline: 2px solid var(--accent-emerald);
        outline-offset: 2px;
    }
    
    .cookie-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .cookie-modal.show {
        opacity: 1;
    }
    
    .cookie-modal-content {
        background: var(--white);
        padding: 30px;
        border-radius: 16px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .cookie-category {
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--gray-200);
    }
    
    .cookie-category label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        color: var(--primary-blue);
        margin-bottom: 8px;
    }
    
    .cookie-category p {
        color: var(--gray-700);
        margin: 0;
        font-size: 0.9rem;
    }
    
    .cookie-modal-actions {
        display: flex;
        gap: 15px;
        justify-content: flex-end;
        margin-top: 20px;
    }
    
    /* Mobile responsive for custom cursor */
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
    }
    
    /* Loading animation improvements */
    .loader-text {
        margin-top: 15px;
        font-size: 0.9rem;
        opacity: 0.8;
    }
    
    /* Animate in class for sections */
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Hide elements initially for animation */
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }
    
    /* Enhanced focus styles */
    .focus-visible {
        outline: 3px solid var(--accent-emerald);
        outline-offset: 3px;
        border-radius: 4px;
    }
    
    /* Smooth transitions for all interactive elements */
    * {
        transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    
    /* Glassmorphism hover effects */
    .badge:hover,
    .number-card:hover,
    .partner-card:hover {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    /* Enhanced button animations */
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.4s ease, height 0.4s ease;
    }
    
    .btn:hover::after {
        width: 200px;
        height: 200px;
    }
`;
document.head.appendChild(style);

// Additional utility functions
function animateOnScroll(element, animationClass, offset = 100) {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > elementTop - windowHeight + offset && scrollTop < elementTop + elementHeight) {
        element.classList.add(animationClass);
    }
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'img/pittogramma.png',
        'img/idea_logo (1).png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadCriticalResources();

// Enhanced error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno
    });
});

// Enhanced scroll performance
let ticking = false;

function updateScrollEffects() {
    // Update scroll progress
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / documentHeight) * 100;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    // Update header state
    const header = document.querySelector('.header');
    if (header) {
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}

// Add visual feedback for user interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX - e.target.offsetLeft + 'px';
        ripple.style.top = e.clientY - e.target.offsetTop + 'px';
        e.target.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});
