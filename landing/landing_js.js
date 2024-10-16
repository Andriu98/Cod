// Mostrar un mensaje de bienvenida al cargar la página
window.onload = function() {
    alert("¡Bienvenido mundo y la ctm");
};

// Cambiar el color de los enlaces al pasar el ratón
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#FFD700'; // Cambia el color a dorado
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white'; // Vuelve al color original
    });
});

// Agregar un botón que regrese al inicio de la página
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Volver al inicio';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.backgroundColor = '#008cba';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Oculto al principio
document.body.appendChild(backToTopButton);

// Mostrar el botón cuando el usuario hace scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Volver al inicio cuando se haga clic en el botón
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
