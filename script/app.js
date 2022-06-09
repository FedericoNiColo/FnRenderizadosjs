const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);

    let nombre = e.target[0].value;
    let apellido = e.target[1].value;
    let email = e.target[2].value;

    const cliente = new Cliente(nombre, apellido, email);
    crearMensajeSaludo(cliente);
    /* cliente = new Render(); */
    /* listarRenders(cliente.servicios); */
}

