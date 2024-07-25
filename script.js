function encriptarTexto() {
    let textoEntrada = document.getElementById("textoEntrada").value;
    if (/[^a-z\s]/.test(textoEntrada)) {
        alert("Ha ingresado caracteres prohibidos.");
        return;
    }
    let textoSalida = textoEntrada.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("textoSalida").value = textoSalida;
    actualizarEstadoBoton();
}

function desencriptarTexto() {
    let textoEntrada = document.getElementById("textoEntrada").value;
    if (/[^a-z\s]/.test(textoEntrada)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let textoSalida = textoEntrada.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("textoSalida").value = textoSalida;
    actualizarEstadoBoton();
}

function copiarTexto() {
    let textoSalida = document.getElementById("textoSalida").value;
    navigator.clipboard.writeText(textoSalida).then(function () {
        alert("El texto ha sido correctamente copiado al portapapeles.");
    });
}

function actualizarEstadoBoton() {
    if (document.getElementById("textoSalida").value.trim() !== "") {
        document.getElementById("botonCopiar").removeAttribute("disabled");
    }
}
