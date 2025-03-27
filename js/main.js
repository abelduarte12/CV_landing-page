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

    

    const btn = document.getElementById('button');

    document.getElementById('form')
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu en mobile
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menu al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navHeight = navbar.offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        });
    });

    // Cambiar estilo del navbar al hacer scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        if (currentScroll === 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        }

        lastScroll = currentScroll;
    });
});

function sendEmail(event) {
    event.preventDefault();

    const templateParams = {
        from_name: document.getElementById('nombre').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('mensaje').value
    };

    emailjs.send('default_service', 'template_default', templateParams)
        .then(function(response) {
            alert('¡Mensaje enviado con éxito!');
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('Error al enviar el mensaje: ' + error.text);
        });

    return false;
}