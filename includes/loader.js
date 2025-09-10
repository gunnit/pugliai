// Include loader for menu and footer
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, attempting to load includes...');
    
    // Load menu include
    const menuPlaceholder = document.getElementById('menu-include');
    if (menuPlaceholder) {
        console.log('Menu placeholder found, loading menu...');
        
        // Try to load menu with better error handling
        fetch('includes/menu.html')
            .then(response => {
                console.log('Menu fetch response:', response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Menu data loaded, inserting HTML...');
                menuPlaceholder.innerHTML = data;
                
                // Initialize mobile menu functionality after menu is loaded
                setTimeout(() => {
                    if (typeof initMobileMenu === 'function') {
                        console.log('Initializing mobile menu...');
                        initMobileMenu();
                    } else {
                        console.warn('initMobileMenu function not found');
                    }
                    
                    // Also initialize dropdown menus
                    if (typeof initDropdownMenus === 'function') {
                        console.log('Initializing dropdown menus...');
                        initDropdownMenus();
                    } else {
                        console.warn('initDropdownMenus function not found');
                    }
                }, 100);
            })
            .catch(error => {
                console.error('Error loading menu:', error);
                // Fallback: show a basic menu if include fails
                menuPlaceholder.innerHTML = `
                    <header class="header">
                        <nav class="navbar">
                            <div class="container">
                                <div class="nav-brand">
                                    <img src="img/pittogramma.png" alt="PugliAI Logo" class="logo">
                                    <span class="brand-text">PugliAI</span>
                                </div>
                                <div class="nav-menu">
                                    <ul class="nav-list">
                                        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                                        <li class="nav-item"><a href="agenti-ai.html" class="nav-link">Servizi</a></li>
                                        <li class="nav-item"><a href="team.html" class="nav-link">Team</a></li>
                                        <li class="nav-item"><a href="contatti.html" class="nav-link">Contatti</a></li>
                                    </ul>
                                </div>
                                <div class="nav-actions">
                                    <a href="contatti.html" class="btn btn-primary">Consulenza Gratuita</a>
                                </div>
                            </div>
                        </nav>
                    </header>
                `;
            });
    } else {
        console.error('Menu placeholder #menu-include not found!');
    }

    // Load footer include
    const footerPlaceholder = document.getElementById('footer-include');
    if (footerPlaceholder) {
        console.log('Footer placeholder found, loading footer...');
        
        fetch('includes/footer.html')
            .then(response => {
                console.log('Footer fetch response:', response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Footer data loaded, inserting HTML...');
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Fallback: show a basic footer if include fails
                footerPlaceholder.innerHTML = `
                    <footer class="footer">
                        <div class="container">
                            <div class="footer-content">
                                <div class="footer-section">
                                    <div class="footer-brand">
                                        <img src="img/pittogramma.png" alt="PugliAI Logo" class="footer-logo">
                                        <span class="footer-brand-text">PugliAI</span>
                                    </div>
                                    <p class="footer-description">Partner strategico per l'eccellenza AI italiana.</p>
                                </div>
                                <div class="footer-section">
                                    <h4>Contatti</h4>
                                    <p><strong>Sede Legale</strong><br>Via Giovanni Forleo 45<br>72022 Latiano (BR)<br>P.IVA/CF: IT02735920742</p>
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
            });
    } else {
        console.error('Footer placeholder #footer-include not found!');
    }
});

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
