document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Carrusel ---
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const intervalTime = 5000; // 5 segundos

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, intervalTime);
    }

    // --- Lógica del Menú Hamburguesa ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú
            navLinks.classList.toggle('active');
        });

        // Cierra el menú si se hace clic en un enlace (para navegación interna)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Solo cerrar si estamos en vista móvil (ancho menor o igual a 768px)
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});
