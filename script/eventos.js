
const form = document.querySelector("#formulario");
form.addEventListener("submit", (e) => handleSubmit(e));//atrapa el evento y lo manda a la funcion que se encarga de manejar estos datos

const saludo = document.querySelector(".inicioJuego");;


const crearMensajeSaludo = (cliente) => {

    const mensaje = document.createElement("div");

    mensaje.classList.add(
        "saludar"
    );

    mensaje.innerHTML = `

            <h3>¡ Hola ${cliente.nombre} ${cliente.apellido},<br> este es nuestro simulador de precios !</h3>

`;
    saludo.append(mensaje);
    console.log(mensaje);

    const contenedorFormulario = document.querySelector(".contenedorFormulario");
    contenedorFormulario.textContent = "";


    const contenedorTarjetas = document.createElement('div');

    contenedorTarjetas.classList.add(
        "contenedorTarjetas"
    );

    for (let servicio of servicios) {

        contenedorTarjetas.innerHTML += `
        
        <section class="tarjetasInterior sombraClara">
            <div class="fondoInterior ">
                <h3> Render ${servicio.nombre}</h3>
            </div>

            <article>
                <h4>${servicio.estatico}</h4>
                
                <p>$${servicio.precioEstatico}</p>
                <button class="botonAgregar"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10" />
              </svg></button>
            </article>

            <article>
                <h4>${servicio.panoramico}</h4>
                
                <p>$${servicio.precioPanoramico}</p>
                <button class="botonAgregar"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10" />
              </svg></button>
            </article>

        </section>             
        `;

        contenedorFormulario.append(contenedorTarjetas);
    }

}

const boton = document.querySelector(".botonAgregar");






















































/* const botonSiguiente = document.getElementById('siguiente');
botonSiguiente.addEventListener('click', saludar);

function saludar() {
    /* 
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let saludar = document.getElementById('saludo');
    
    saludar.innerHTML = `Bienvenido al simulador de precios, ${nombre} ${apellido} `; 
    
    console.log(saludar);
     */

/*  const seccionPrincipal = document.getElementsByClassName("inicioJuego");
 const formulario = document.getElementsByClassName("form");

 let nombre = document.getElementById('nombre').value;
 let apellido = document.getElementById('apellido').value;

 const saludar = document.getElementById('saludar');

 const saludo = document.createElement('div');

 saludo.innerHTML = `
 <div class="saludar">
 <h3>Bienvenido al simulador de precios, ${nombre} ${apellido} !</h3>
 </div>
 
 `
 saludar.appendChild(saludo);

} */


