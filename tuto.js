/* const precio = 999.99;


function CalcularPrecio() {
    const cantidadInputElement = document.getElementById('cantidad');
    const cantidad =  cantidadInputElement.value;
    const precioFinal= cantidad * precio;
    

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    const precioFinalSpanElement = document.getElementById('precioFinal');
    precioFinalSpanElement.innerText = `$${precioFinal}`;
} */
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
    });

    const clickedLink = Array.from(document.querySelectorAll('.nav-link'))
        .find(link => link.getAttribute('onclick')?.includes(id)); /*Aqui se busca el que tenga el id enviad*/
    if (clickedLink) { /* si existe de se agrega a la lista de clase que esta activado*/
        clickedLink.classList.add('active');
    }
}
