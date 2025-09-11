// Include loader for menu and footer
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, attempting to load includes...');
    
    // Function to handle includes with protocol detection
    function loadInclude(elementId, includePath, fallbackHTML) {
        const placeholder = document.getElementById(elementId);
        if (!placeholder) {
            console.error(`Placeholder #${elementId} not found!`);
            return;
        }
        
        // Check if we're running on file:// protocol
        const isFileProtocol = window.location.protocol === 'file:';
        
        if (isFileProtocol) {
            // For file:// protocol, use the fallback HTML directly
            console.log(`Using fallback HTML for ${elementId} (file:// protocol detected)`);
            placeholder.innerHTML = fallbackHTML;
            
            // Initialize components if this is the menu
            if (elementId === 'menu-include') {
                setTimeout(initMenuComponents, 10);
            }
        } else {
            // For http:// or https://, use fetch
            fetch(includePath)
                .then(response => {
                    console.log(`${elementId} fetch response:`, response.status);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    console.log(`${elementId} data loaded, inserting HTML...`);
                    placeholder.innerHTML = data;
                    
                    // Initialize components if this is the menu
                    if (elementId === 'menu-include') {
                        console.log('Menu HTML inserted, initializing menu components...');
                        initMenuComponents();
                    }
                })
                .catch(error => {
                    console.error(`Error loading ${elementId}:`, error);
                    // Use fallback HTML on error
                    placeholder.innerHTML = fallbackHTML;
                    
                    if (elementId === 'menu-include') {
                        setTimeout(initMenuComponents, 10);
                    }
                });
        }
    }
    
    // Define fallback HTML for menu
    const menuFallbackHTML = `
        <header class="header" id="main-header">
            <nav class="navbar" role="navigation" aria-label="Main navigation">
                <div class="container nav-container">
                    <div class="nav-brand">
                        <a href="index.html" aria-label="PugliAI Home">
                            <img src="img/pittogramma.png" alt="PugliAI Logo" class="logo" width="40" height="40">
                            <span class="brand-text">PugliAI</span>
                        </a>
                    </div>
                    
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                    
                    <div class="nav-menu" id="nav-menu">
                        <ul class="nav-list">
                            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" aria-expanded="false">Servizi</a>
                                <ul class="dropdown-menu">
                                    <li><a href="infrastrutture-ai.html" class="dropdown-link">Infrastrutture AI</a></li>
                                    <li><a href="agenti-ai.html" class="dropdown-link">Agenti AI</a></li>
                                    <li><a href="consulenza-strategica.html" class="dropdown-link">Consulenza Strategica</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" aria-expanded="false">Settori</a>
                                <ul class="dropdown-menu">
                                    <li><a href="manifatturiero.html" class="dropdown-link">Manifatturiero</a></li>
                                    <li><a href="moda-lusso.html" class="dropdown-link">Moda e Lusso</a></li>
                                    <li><a href="servizi-finanziari.html" class="dropdown-link">Servizi Finanziari</a></li>
                                    <li><a href="turismo.html" class="dropdown-link">Turismo</a></li>
                                    <li><a href="sanita.html" class="dropdown-link">Sanità</a></li>
                                    <li><a href="alimentare.html" class="dropdown-link">Alimentare</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" aria-expanded="false">Azienda</a>
                                <ul class="dropdown-menu">
                                    <li><a href="mission.html" class="dropdown-link">Mission</a></li>
                                    <li><a href="team.html" class="dropdown-link">Team</a></li>
                                    <li><a href="certificazioni.html" class="dropdown-link">Certificazioni</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a href="contatti.html" class="nav-link">Contatti</a></li>
                        </ul>
                    </div>
                    
                    <div class="nav-actions">
                        <a href="contatti.html" class="btn btn-primary nav-cta">Consulenza Gratuita</a>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // Load menu include
    loadInclude('menu-include', 'includes/menu.html', menuFallbackHTML);
    
    // Define fallback HTML for footer
    const footerFallbackHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <div class="footer-brand">
                            <img src="img/pittogramma.png" alt="PugliAI Logo" class="footer-logo" width="60" height="60">
                            <span class="footer-brand-text">PugliAI</span>
                        </div>
                        <p class="footer-description">Partner strategico per l'eccellenza AI italiana.</p>
                        <div class="social-links">
                            <a href="#" aria-label="LinkedIn" class="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" class="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h4>Servizi</h4>
                        <ul class="footer-links">
                            <li><a href="infrastrutture-ai.html">Infrastrutture AI</a></li>
                            <li><a href="agenti-ai.html">Agenti AI</a></li>
                            <li><a href="consulenza-strategica.html">Consulenza Strategica</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Azienda</h4>
                        <ul class="footer-links">
                            <li><a href="mission.html">Mission</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="certificazioni.html">Certificazioni</a></li>
                            <li><a href="contatti.html">Contatti</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contatti</h4>
                        <address>
                            <p><strong>Sede Legale</strong></p>
                            <p>Via Giovanni Forleo 45<br>
                            72022 Latiano (BR)<br>
                            Italia</p>
                            <p class="footer-contact">
                                <a href="mailto:info@pugliai.com">info@pugliai.com</a><br>
                                <a href="tel:+390831180xxxx">+39 0831 180 xxxx</a>
                            </p>
                        </address>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-legal">
                        <p>&copy; 2024 PUGLIAI S.R.L. - P.IVA/CF: IT02735920742</p>
                        <div class="legal-links">
                            <a href="privacy.html">Privacy Policy</a>
                            <a href="cookies.html">Cookie Policy</a>
                            <a href="terms.html">Termini di Servizio</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // Load footer include
    loadInclude('footer-include', 'includes/footer.html', footerFallbackHTML);
});

// Initialize menu components - called after menu HTML is loaded
function initMenuComponents() {
    // Initialize mobile menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        console.log('Setting up mobile menu toggle...');
        
        // Remove any existing listeners first
        const newToggle = mobileMenuToggle.cloneNode(true);
        mobileMenuToggle.parentNode.replaceChild(newToggle, mobileMenuToggle);
        
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            newToggle.classList.toggle('active');
            
            const isExpanded = navMenu.classList.contains('active');
            newToggle.setAttribute('aria-expanded', isExpanded);
            
            // Toggle body scroll
            document.body.style.overflow = isExpanded ? 'hidden' : '';
            
            console.log('Mobile menu toggled:', isExpanded ? 'open' : 'closed');
        });
        
        // Close menu on outside click
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && 
                !newToggle.contains(event.target) && 
                navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                newToggle.classList.remove('active');
                newToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        console.log('Mobile menu initialized successfully');
    } else {
        console.warn('Mobile menu elements not found in loaded HTML');
    }
    
    // Initialize dropdown menus
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        const newToggle = toggle.cloneNode(true);
        toggle.parentNode.replaceChild(newToggle, toggle);
        
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                dropdownMenu.classList.toggle('show');
                this.setAttribute('aria-expanded', dropdownMenu.classList.contains('show'));
            }
        });
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                const toggle = menu.previousElementSibling;
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            });
        }
    });
    
    if (dropdownToggles.length > 0) {
        console.log('Dropdown menus initialized:', dropdownToggles.length);
    }
    
    // Call any additional initialization from script.js if available
    if (typeof window.onMenuLoaded === 'function') {
        window.onMenuLoaded();
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Make initMenuComponents available globally
window.initMenuComponents = initMenuComponents;
