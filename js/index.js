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

// Formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por su consulta. Nos pondremos en contacto a la brevedad.');
    this.reset();
});