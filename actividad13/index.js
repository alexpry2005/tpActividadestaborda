const claveCarrito = "cantidadArticulos";
const contador = document.querySelector("#cantidad-articulos");
const botonAgregar = document.querySelector("#agregar-carrito");

const cantidadGuardada = Number.parseInt(localStorage.getItem(claveCarrito), 10);
let cantidadArticulos = Number.isInteger(cantidadGuardada) && cantidadGuardada >= 0
    ? cantidadGuardada
    : 0;

contador.textContent = cantidadArticulos;

botonAgregar.addEventListener("click", () => {
    cantidadArticulos += 1;
    contador.textContent = cantidadArticulos;
    localStorage.setItem(claveCarrito, cantidadArticulos);
});
