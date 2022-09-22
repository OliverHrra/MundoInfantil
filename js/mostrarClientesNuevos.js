const contenedor2 = document.getElementById("nuevosClientes-contenedor");

clientesNuevos.forEach(clienteNuevo => {
    const div = document.createElement("div");
    div.className = "col-lg-4";
    div.innerHTML += `
    <div class="single-blog style-five">
        <div class="thumb">
            <img class="img-fluid" src="${clienteNuevo.imagen}" alt="">
        </div>
        <div class="short_details">
            <div class="meta-top d-flex">
                <a>${clienteNuevo.redSocial}</a>/
                <a>${clienteNuevo.fecha}</a>
            </div>
            <a class="d-block" href="${clienteNuevo.link}">
                <h4>${clienteNuevo.titulo}</h4>
            </a>
            <div class="meta-bottom d-flex">
                <a><i class="ti-comment"></i>${clienteNuevo.comentarios}</a>
                <a><i class="ti-heart"></i> ${clienteNuevo.like}</a>
            </div>
        </div>
    </div>
    `;

    contenedor2.appendChild(div);
});