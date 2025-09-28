// Configuración inicial
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLanguage = localStorage.getItem('language') || 'es';

// Aplicar configuración guardada
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();
setLanguage(currentLanguage);

// Toggle del tema
document.getElementById('themeToggle').addEventListener('click', function() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (currentTheme === 'light') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Toggle del idioma
document.querySelector('.language-toggle').addEventListener('click', function() {
    document.getElementById('languageDropdown').classList.toggle('active');
});

document.querySelectorAll('.language-options a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
        document.getElementById('languageDropdown').classList.remove('active');
        localStorage.setItem('language', lang);
    });
});

function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}

// Menú móvil
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
    });
});

// Barra de progreso
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
    
    // Mostrar/ocultar botón ir arriba
    const scrollToTop = document.getElementById('scrollToTop');
    if (winScroll > 300) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
    }
});

// Botón ir arriba
document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FAQ acordeón
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const item = this.parentNode;
        item.classList.toggle('active');
    });
});

// Formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = currentLanguage === 'es' 
        ? 'Gracias por su consulta. Nos pondremos en contacto a la brevedad.' 
        : 'Thank you for your inquiry. We will contact you shortly.';
    alert(message);
    this.reset();
});

// Cerrar menús al hacer clic fuera
document.addEventListener('click', function(e) {
    if (!e.target.closest('.language-dropdown')) {
        document.getElementById('languageDropdown').classList.remove('active');
    }
    if (!e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
        document.querySelector('nav').classList.remove('active');
    }
});