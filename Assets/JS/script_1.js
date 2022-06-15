function validar(nombre, asunto, mensaje) {

    let validacion = true;

    let valNombre = /[a-zA-Z\n]/gim;

    if (valNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "ingresa un mombre al formulario";
        validacion = false;
    };

    let valAsunto = /[a-zA-Z\n]/gim;

    if (valAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "ingresa un asunto al formulario";
        validacion = false;
    };

    let valMensaje = /./gim;

    if (valMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "ingresa un mensaje al formulario";
        validacion = false;
    };

    return validacion;

};

function mensajeEnviado() {

    document.querySelector(".resultado").innerHTML = "Mensaje enviado correctamente";
};

function limpiarErrores() {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

let form = document.getElementById("formulario");
form.addEventListener("submit", function consultar(event) {
    event.preventDefault();
    limpiarErrores();

    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;
    let resultado = validar(nombre, asunto, mensaje);
    if (resultado == true) {
        mensajeEnviado();
    };
});




