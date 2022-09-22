//Variables
const btnEnviar = document.querySelector("#btn")
const formulario = document.querySelector("#contactForm")

const email = document.querySelector("#email");
const asunto = document.querySelector("#subject");
const mensaje = document.querySelector("#message");
const nombre = document.querySelector("#name1");

const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners()
function eventListeners(){
    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener("DOMContentLoaded", iniciarApp);

    // Campos del formulario
    email.addEventListener("blur", validarFormulario);
    subject.addEventListener("blur", validarFormulario);
    message.addEventListener("blur", validarFormulario);
    name1.addEventListener("blur", validarFormulario);

}






//Funciones
function iniciarApp(){
 btnEnviar.disabled = true;
 btnEnviar.classList.add(error) //no funciona por ser boopstrap
}


function validarFormulario(e){
    if(e.target.value.length >0){

        //Eliminar los errores
        const error = document.querySelector("p.error");
        if(error){
         error.remove();
        }

        e.target.style.borderColor = "green";
    }else{
        e.target.style.borderColor = "red";
        mostrarError("TODOS LOS CAMPOS SON OBLIGATORIOS.");
    }

    if(e.target.type === "email"){
        if(expresionRegular.test(e.target.value)){
            const error = document.querySelector("p.error");
            if(error){
                error.remove()
            };
        }else{
            e.target.style.borderColor = "red";
            mostrarError("Email no es valido");
        }
    }

    if (expresionRegular.test(email.value) && asunto.value !== '' && mensaje.value !== '' && nombre.value !== '') {
        btnEnviar.disabled = false;
        mostrarError("Envianos tu mensaje y te responderemos!!!");
        } else {
        iniciarApp();
    }
}


function mostrarError(mensaje) {
    const msjError = document.createElement("p")
    msjError.textContent = mensaje;
    msjError.classList.add("border","error", "p-3","mt-2","text-center")

    const errores = document.querySelectorAll(".error");
    if(errores.length === 0){
        formulario.appendChild(msjError)
    }
}
