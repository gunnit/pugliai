// Include loader for menu and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load menu include
    const menuPlaceholder = document.getElementById('menu-include');
    if (menuPlaceholder) {
        fetch('includes/menu.html')
            .then(response => response.text())
            .then(data => {
                menuPlaceholder.innerHTML = data;
                // Initialize mobile menu functionality after menu is loaded
                // Call the proper initialization function from script.js
                if (typeof initMobileMenu === 'function') {
                    initMobileMenu();
                }
                // Also initialize dropdown menus
                if (typeof initDropdownMenus === 'function') {
                    initDropdownMenus();
                }
            })
            .catch(error => console.error('Error loading menu:', error));
    }

    // Load footer include
    const footerPlaceholder = document.getElementById('footer-include');
    if (footerPlaceholder) {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
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
