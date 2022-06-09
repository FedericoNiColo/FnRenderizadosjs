const servicios = [];

class Render {
    constructor(nombre, estatico, panoramico, precioEstatico, precioPanoramico) {
        this.nombre = nombre;
        this.estatico = estatico;
        this.panoramico = panoramico;
        this.precioEstatico = precioEstatico;
        this.precioPanoramico = precioPanoramico;

    }

}

servicios.push(new Render("interior", "Estático", "Panorámico", 12000, 18000));

servicios.push(new Render("exterior", "Estático", "Panorámico", 8000, 14000));

console.log(servicios);

/*  servicios = [
     {
         nombre: "Interior",
         tipoRender: "Estático",
         precio: "12000"
     },
     {
         contexto: "Interior",
         tipoRender: "Panorámico o video",
         precio: "18000"
     },
     {
         contexto: "Exterior",
         tipoRender: "Estático",
         precio: "8000"
     },
     {
         contexto: "Exterior",
         tipoRender: "Panorámico o video",
         precio: "1400"
     },
 ]; */
/*  nombre() {
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
*/