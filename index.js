const contenido = document.querySelector(".dropdown-contenido");
const contenedor = document.querySelector(".dropdown");
const boton = document.querySelector(".btn-dropdown");

boton.addEventListener("click", (e) => {
    contenedor.classList.toggle("aparecer");
    contenido.classList.toggle("aparecer");
});
