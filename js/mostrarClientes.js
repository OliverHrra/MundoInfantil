const contenedor = document.getElementById("clientes-contenedor");

clientes.forEach(cliente => {
    const div = document.createElement("div");
    div.className = 'col-md-6 col-lg-4';
    div.innerHTML += `
                    <div class="single-category">
                        <div class="thumb">
                            <img class="img-fluid" src="${cliente.imagen}" alt="">
                        </div>
                        <div class="short_details">
                            <div class="meta-top d-flex">
                                <a>${cliente.redSocial}</a>
                                <a>${cliente.fecha}</a>
                            </div>
                            <a class="d-block" href="${cliente.link}" target="_blank">
                                <h4>${cliente.titulo}</h4>
                            </a>
                            <div class="meta-bottom d-flex">
                                <a ><i class="ti-comment"></i>${cliente.comentarios}</a>
                                <a ><i class="ti-heart"></i>${cliente.like}</a>
                            </div>
                        </div>
                    </div>
    `;

    contenedor.appendChild(div);
});