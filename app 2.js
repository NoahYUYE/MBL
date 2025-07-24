document.addEventListener('DOMContentLoaded', function () {

    // --- Elements ---
    const langSwitcherButton = document.getElementById('lang-switcher');
    const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-default"]') || document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('navbar-default') || document.getElementById('mobile-menu');

    // --- Functions ---
    function setLanguage(lang) {
        // Hide/show all elements with lang-cn or lang-en class
        document.querySelectorAll('.lang-cn').forEach(el => {
            el.style.display = (lang === 'cn') ? 'inline' : 'none';
        });
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = (lang === 'en') ? 'inline' : 'none';
        });

        // Update the button text and title
        if (langSwitcherButton) {
            const cnSpan = langSwitcherButton.querySelector('.lang-cn');
            const enSpan = langSwitcherButton.querySelector('.lang-en');
            if(cnSpan) cnSpan.style.display = (lang === 'en') ? 'inline' : 'none';
            if(enSpan) enSpan.style.display = (lang === 'cn') ? 'inline' : 'none';
            langSwitcherButton.title = (lang === 'cn') ? 'Switch to English' : '切换到中文';
        }

        // Save preference to localStorage
        localStorage.setItem('language', lang);
    }

    // --- Event Listeners ---
    if (langSwitcherButton) {
        langSwitcherButton.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'cn';
            const newLang = (currentLang === 'cn') ? 'en' : 'cn';
            setLanguage(newLang);
        });
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // --- Initialization ---
    const initialLang = localStorage.getItem('language') || 'cn';
    setLanguage(initialLang);

}); 