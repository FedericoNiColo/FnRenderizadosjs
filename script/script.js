
class Cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.renders = [];
    }

    agregarRender() {
        do {
            let nuevoRender = new Render();
            this.renders.push(nuevoRender);
        } while (preguntar("¿Quieres agregar más renders? Escriba '1' si la respuespuesta es SI o '-' si la respuesta es NO") != "-");

    }
}

class Render {
    constructor() {
        this.contexto = this.ambiente(preguntar("¿ En que contexto serán tus renders ? Escriba '1' si será de INTERIOR, o escriba '2' si es de EXTERIOR"));
        this.render = this.tipoRender(preguntar("¿ Qué tipo de Renders pretendes ? Escriba '1' para RENDERS ESTÁTICOS, o '2' para RENDERS PANORÁMICOS"));
        this.modelo = this.modelo3D(preguntar("¿ El modelo 3D ya lo tenes hecho ? Escriba '1' si la respuesta es SI o '2' si la respuesta es NO"));
        this.nombre = this.nombre();
        this.precio = this.contexto + this.render + this.modelo;
    }

    nombre() {
        let nombre;

        if (this.contexto == "7000" && this.render == "0") {
            nombre = "Render Interior Estático";
        } else if (this.contexto == "7000" && this.render == "5000") {
            nombre = "Render Interior Panorámico";
        }


        if (this.contexto == "5000" && this.render == "0") {
            nombre = " Render Exterior Estático";
        } else if (this.contexto == "5000" && this.render == "5000") {
            nombre = "Render Exterior Panorámico";
        }

        return nombre;
    }

    ambiente(contexto) {

        let precioAmbiente = 0;

        switch (contexto) {
            case "1":
                precioAmbiente += 7000;
                break;

            case "2":
                precioAmbiente += 5000;
                break;
        }

        return precioAmbiente;
    }

    tipoRender(render) {

        let precioTipoRender = 0;

        switch (render) {

            case "1":
                precioTipoRender += 0;
                break;

            case "2":
                precioTipoRender += 5000;
                break;
        }

        return precioTipoRender;

    }

    modelo3D(modelo) {

        let precioModelado = 0;

        switch (modelo) {

            case "1":
                precioModelado += 0;
                break;

            case "2":
                precioModelado += 10000;
                break;
        }

        return precioModelado;

    }
}

incialSimulador();

function incialSimulador() {

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("ingrese su apellido");

    let cliente1 = new Cliente(nombre, apellido);

    alert("Bienvenido a nuestro simulador de precios " + cliente1.nombre);

    cliente1.agregarRender();

    console.log(cliente1);

    let precioTotal = 0;
    let saludoBienvenida;
    cliente1.renders.forEach((renders) => {
        saludoBienvenida = renders.nombre;
        precioTotal += renders.precio;
    })

    alert("El precio aproximado para tus renders es de: $" + precioTotal);

    alert("Ahora jugá hasta por 20% de descuento resolviendo el memorama en los primeros 20 segundos")
}

function preguntar(pregunta) {

    let respuesta = prompt(pregunta);

    while (respuesta != "1" & respuesta != "2" & respuesta != "-") {

        respuesta = prompt(pregunta);
    }

    return respuesta;
}


