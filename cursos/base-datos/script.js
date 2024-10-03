// Selección de elementos del DOM
const menuButton = document.querySelector('.menu-button');
const sidebar = document.getElementById('sidebar');
const closeButton = sidebar.querySelector('.close-button');
const header = document.querySelector('header');

// Colores para el encabezado
const colors = [
    '#6200ff',
    '#5f2eff',
    '#4f00ff',
    '#004f7c',
    '#00aaff',
    '#84c3ff'
];
let currentIndex = 0;

// Función para cambiar el color del encabezado
function changeHeaderColor() {
    header.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Cambia al siguiente color
}

// Cambia de color del texto cada 1000 ms (1 segundo)
setInterval(changeHeaderColor, 1000);

// Inicializa la sidebar asegurándose de que no tenga la clase 'active'
sidebar.classList.remove('active');

// Eventos para manejar la sidebar
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Alterna la clase 'active'
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Elimina la clase 'active'
});

// Función para animar la entrada de elementos
const animateOnScroll = (elements) => {
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Agrega la clase 'active' para activar animaciones
                observer.unobserve(entry.target); // Deja de observar una vez que se ha animado
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element); // Observa cada elemento
    });
};

// Animaciones de aparición de secciones
const sections = document.querySelectorAll('main section.fade-in'); // Selecciona las secciones con fade-in
animateOnScroll(sections);

// Animación de entrada para tarjetas
const cards = document.querySelectorAll('.card.animate-entry'); // Selecciona las tarjetas con animate-entry
animateOnScroll(cards);