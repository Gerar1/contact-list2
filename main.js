const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const numero = document.querySelector(".numero");
const ciudad = document.querySelector(".ciudad");
const direccion = document.querySelector(".direccion");
const btnAgregarTarea = document.querySelector(".btn-agregar-tarea");

const listadoTareas = document.querySelector(".listado-tareas");

const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        numero: numero.value,
        ciudad: ciudad.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

cargarContacto(db, listadoTareas);
