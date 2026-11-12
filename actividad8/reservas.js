const formulario = document.querySelector("#formulario-reserva");
const respuesta = document.querySelector("#respuesta");

// Si venís desde una cabaña, dejamos esa opción elegida en el formulario.
const cabanaElegida = new URLSearchParams(window.location.search).get("cabana");
if (cabanaElegida) {
    document.querySelector("#cabana").value = cabanaElegida;
}

// Mostramos el acuse acá mismo; para que le llegue al negocio falta conectar el envío.
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const datos = new FormData(formulario);
    const nombre = datos.get("nombre");
    const cabana = datos.get("cabana");
    respuesta.textContent = "Gracias, " + nombre + ". Tu consulta por la Cabaña " + cabana + " quedó preparada en esta página.";
});
