// Selecciona solo las secciones específicas
const sections = document.querySelectorAll('#sobre_mi, #tecnologias, #proyectos');

// Función que revisa si las secciones están en el viewport y les aplica la clase visible
const handleScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight;

    if (sectionTop < sectionVisible) {
      section.classList.add('visible-section');
    }
  });
};

// Añade la clase 'hidden-section' a las secciones específicas inicialmente
sections.forEach(section => section.classList.add('hidden-section'));

// Llama a la función handleScroll al hacer scroll
window.addEventListener('scroll', handleScroll);

// Llama a handleScroll al cargar la página para que las secciones en la vista inicial se animen
handleScroll();


let isScrolled = false;
const debounceTime = 100; // Tiempo de debounce en milisegundos
let scrollTimeout;

// Función debounce para limitar la frecuencia de ejecución del evento de scroll
function debounceScroll(callback, delay) {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(callback, delay);
}

// Evento de scroll optimizado
window.addEventListener("scroll", function () {
  // Verifica si el ancho de la ventana es de al menos 1247px
  if (window.innerWidth >= 1247) {
    debounceScroll(() => {
      const header = document.querySelector("header");
      const logo = document.querySelector(".logo_nav");
      const ctaNavButtons = document.querySelectorAll(".cta_nav");
      const currentScrollTop = window.scrollY;

      // Cambia el umbral de scroll a 150px para evitar parpadeo
      if (currentScrollTop > 150 && !isScrolled) {
        header.classList.add("scrolled");
        logo.classList.add("hidden_header"); // Oculta con clase
        ctaNavButtons.forEach(button => button.classList.add("hidden_header"));
        isScrolled = true;
      } else if (currentScrollTop <= 150 && isScrolled) {
        header.classList.remove("scrolled");
        logo.classList.remove("hidden_header"); // Muestra con clase
        ctaNavButtons.forEach(button => button.classList.remove("hidden_header"));
        isScrolled = false;
      }
    }, debounceTime);
  }
});

