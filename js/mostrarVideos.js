import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

export default function crearCard(titulo, imagen, url){
     const video = document.createElement("div");
     video.className="card";
     video.innerHTML=` <iframe src="${url}" allowfullscreen></iframe>
     <h3><img src="${imagen}" alt="logoFilm">${titulo}</h3>`

     return video;

}

async function listarVideos(){
try {
    const listaAPI = await conexionAPI.listarVideos()

    listaAPI.forEach(video => lista.appendChild(crearCard(video.titulo, video.imagen, video.url)))
} catch {
    lista.innerHTML=`<div class="mensaje-error"> 
    <h2>Error en la conexión</h2>
    <img class="imagenError" src="https://i.pinimg.com/564x/bc/4d/cb/bc4dcb2b9545f8cd94d060d4e47e76d7.jpg" alt="">
    </div>`
    
}
}


listarVideos()
