let precio = 0;

alert("SIMULADOR DE PRECIOS PARA TUS PROXIMOS RENDERS");

do {

    ambiente(preguntar("¿ En que contexto serán tus renders ? Escriba '1' si será de INTERIOR, o escriba '2' si es de EXTERIOR"));
    tipoRender(preguntar("¿ Qué tipo de Renders pretendes ? Escriba '1' para RENDERS ESTÁTICOS, o '2' para RENDERS PANORÁMICOS"));
    modelo3D(preguntar("¿ El modelo 3D ya lo tenes hecho ? Escriba '1' si la respuesta es SI o '2' si la respuesta es NO"));
    mostrarPrecio();

} while (preguntar("¿Quieres agregar más renders? Escriba '1' si la respuespuesta es SI o '-' si la respuesta es NO") != "-");


function preguntar(pregunta) {

    let respuesta = prompt(pregunta);

    while (respuesta != "1" & respuesta != "2" & respuesta != "-") {

        respuesta = prompt(pregunta);
    }

    return respuesta;
}

function ambiente(contexto) {

    switch (contexto) {
        case "1":
            precio += 7000;
            break;

        case "2":
            precio += 5000;
            break;
    }
}

function tipoRender(render) {

    switch (render) {

        case "1":
            precio += 0;
            break;

        case "2":
            precio += 5000;
            break;
    }

}

function modelo3D(modelo) {

    switch (modelo) {

        case "1":
            precio += 0;
            break;

        case "2":
            precio += 10000;
            break;
    }

}

function mostrarPrecio() {
    alert("El precio aproximado de tus renders es de " + precio);
}