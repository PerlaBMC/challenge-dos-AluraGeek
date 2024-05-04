import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){

    evento.preventDefault();
   
    const titulo= document.querySelector("[data-titulo]").value;
    const url= document.querySelector("[data-url]").value;
    const imagen= document.querySelector("[data-imagen]").value;

        await conexionAPI.enviarVideo(titulo,url,imagen);
}

formulario.addEventListener("submit",evento => crearVideo(evento));
