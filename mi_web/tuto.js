function showSection(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Mostrar la sección seleccionada
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }
    // Quitar clase 'active' de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick')?.includes(id)) {
            link.classList.add('active');
        }
    });
}