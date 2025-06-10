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
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const selected = document.getElementById(id);
    if (selected) selected.classList.add('active');


    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));


    const currentLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (currentLink) currentLink.classList.add('active');
}