document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const intervalTime = 5000; // 5 segundos

    // Función para mostrar el slide actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Inicializar el carrusel
    if (slides.length > 0) { // Asegurarse de que hay slides antes de iniciar el carrusel
        showSlide(currentSlide);
        setInterval(nextSlide, intervalTime);
    }
});