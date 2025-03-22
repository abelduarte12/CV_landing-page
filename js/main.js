// Script para animar elementos cuando son visibles
document.addEventListener('DOMContentLoaded', function() {
    // Función para comprobar si un elemento está en la vista
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para manejar la animación de la barra de habilidades
    function handleSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(function(bar) {
            if (isElementInViewport(bar)) {
                const percentage = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                bar.style.width = percentage;
            }
        });
    }
    
    // Ejecutar al cargar la página
    handleSkillBars();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', handleSkillBars);
    
    // Añadir navegación suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});