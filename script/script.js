
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
        this.precio = this.contexto + this.render + this.modelo;
    }

    ambiente(contexto) {

        let precioAmbiente;

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

        let precioTipoRender;

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

        let precioModelado;

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

    cliente1.agregarRender();

    console.log(cliente1);

    sumarPrecios(cliente1);
}

function sumarPrecios(Cliente) {

    let precioTotal;
    Cliente.renders.forEach((renders) => {

        precioTotal += renders.precio;
    })
    console.log(precioTotal);
}

function preguntar(pregunta) {

    let respuesta = prompt(pregunta);

    while (respuesta != "1" & respuesta != "2" & respuesta != "-") {

        respuesta = prompt(pregunta);
    }

    return respuesta;
}


