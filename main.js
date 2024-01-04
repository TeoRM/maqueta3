$(document).ready(function () {
    // Abre el modal automáticamente
    $("#myModal").modal("toggle");
});

function quitarClase1() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton");
    var elemento2 = document.getElementById("boton2");

    // Quitar la clase del elemento
    elemento.classList.remove("boton1");
    elemento2.classList.add("boton1");
}

function quitarClase2() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton2");
    var elemento2 = document.getElementById("boton");

    // Quitar la clase del elemento
    elemento.classList.remove("boton1");
    elemento2.classList.add("boton1");
}

function quitarClase3() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton3");
    var elemento2 = document.getElementById("boton4");
    var elemento3 = document.getElementById("boton5");

    // Quitar la clase del elemento
    elemento.classList.remove("text-black");
    elemento2.classList.add("text-black");
    elemento3.classList.add("text-black");
}

function quitarClase4() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton3");
    var elemento2 = document.getElementById("boton4");
    var elemento3 = document.getElementById("boton5");

    // Quitar la clase del elemento
    elemento.classList.add("text-black");
    elemento2.classList.remove("text-black");
    elemento3.classList.add("text-black");
}

function quitarClase5() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton3");
    var elemento2 = document.getElementById("boton4");
    var elemento3 = document.getElementById("boton5");

    // Quitar la clase del elemento
    elemento.classList.add("text-black");
    elemento2.classList.add("text-black");
    elemento3.classList.remove("text-black");
}

function quitarClase6() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton6");
    var elemento2 = document.getElementById("boton7");
    var elemento3 = document.getElementById("boton8");
    var elemento4 = document.getElementById("collapse6");
    var elemento5 = document.getElementById("collapse7");
    var elemento6 = document.getElementById("collapse8");

    // Quitar la clase del elemento
    elemento.classList.remove("text-black");
    elemento2.classList.add("text-black");
    elemento3.classList.add("text-black");
    elemento4.classList.remove("visible")
    elemento4.classList.add("show");
    elemento5.classList.add("visible");
    elemento6.classList.add("visible");
}

function quitarClase7() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton6");
    var elemento2 = document.getElementById("boton7");
    var elemento3 = document.getElementById("boton8");
    var elemento4 = document.getElementById("collapse6");
    var elemento5 = document.getElementById("collapse7");
    var elemento6 = document.getElementById("collapse8");

    // Quitar la clase del elemento
    elemento.classList.add("text-black");
    elemento2.classList.remove("text-black");
    elemento3.classList.add("text-black");
    elemento4.classList.add("visible");
    elemento5.classList.remove("visible");
    elemento5.classList.add("show");
    elemento6.classList.add("visible");
}

function quitarClase8() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("boton6");
    var elemento2 = document.getElementById("boton7");
    var elemento3 = document.getElementById("boton8");
    var elemento4 = document.getElementById("collapse6");
    var elemento5 = document.getElementById("collapse7");
    var elemento6 = document.getElementById("collapse8");

    // Quitar la clase del elemento
    elemento.classList.add("text-black");
    elemento2.classList.add("text-black");
    elemento3.classList.remove("text-black");
    elemento4.classList.add("visible");
    elemento5.classList.add("visible");
    elemento6.classList.remove("visible");
    elemento6.classList.add("show");
}

function agregarTarea() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("visible");
    var elemento2 = document.getElementById("visible2");
    var elemento3 = document.getElementById("visible3");
    var elemento4 = document.getElementById("visible4");

    // Quitar la clase del elemento
    elemento.classList.remove("visible");
    elemento2.classList.remove("visible");
    elemento3.classList.add("visible");
    elemento4.classList.remove("visible");
}

const imagen = document.querySelector("#imagen");
const vistaPrevia = document.querySelector("#vista_previa");

imagen.addEventListener("change", () => {
    const archivo = imagen.files[0];

    if (archivo) {
        const reader = new FileReader();

        reader.onload = () => {
            vistaPrevia.src = reader.result;
        };

        reader.readAsDataURL(archivo);
    }
});


