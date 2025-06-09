const precio = 999.99;


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
}