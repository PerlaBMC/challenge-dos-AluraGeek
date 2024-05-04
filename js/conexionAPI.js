async function listarVideos () {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = conexion.json()
   // console.log(conexionConvertida)
   return conexionConvertida
}

//para creal URL a tavés de json- server se ejecuta el siguiente comando en la consola npx json-server --watch db.json --port 3001
async function enviarVideo(titulo,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            url:url,
            imagen:imagen
        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida;
}


export const conexionAPI={
    listarVideos,enviarVideo
}

