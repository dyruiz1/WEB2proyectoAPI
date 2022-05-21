// //pasos para consumir el API
// //1. para donde voy? (conocer uri del servicio o API A CONSUMIR)
// // esta es la uri del spotify
// //const URI = "https://api.spotify.com/v1/artists/4jirsf9rymh8ajWTRRnF5g/top-tracks?market=US"

// //2. ARMO LA PETICION(que vas a hacer) con un objeto ya que puede ser de varios tipos, se hace con palabras reservadas
// //const TOKEN="Bearer BQBL6xcHRL2Q3R1ae0fBrGL5c18u8AIf80PYeRxkowEAaKS0-tVA3QOlf9pdsf8Q_vABu7IxhR3lB-AMN7OGte9GoNDOw2IcLFPN14nw4QfReVUu3Ne6DekU1ilOHQLb8m_obfBu43kf9H4X7Koixu98nHVCKSM"

// const PETICION = {
//     method:"GET",
//     headers:{Authorization:TOKEN}
// }

// //3. ARRANCAR A CONSUMIR EL API(es quien va al servidor ej volley)es como el taxista, para donde y a que
// fetch(URI, PETICION) //acincrona a un servidor es la promesa, ejecuta al mismo tiempo
// // que hago si la respuesta es pósitiva
// .then(function(respuesta){
//     return(respuesta.json())//garantizo JSON
// })
// .then(function(respuesta){
//     pintarCanciones(respuesta)//hago lo que quiera con la respuesta
// })
// // si sale mal que pasa
// .catch(function(respuesta){
//     console.log(respuesta)//muestro el fallo si no se puede consumir
// })

//funcion para pintar la info que llega del api
export function pintarCanciones(canciones){

    let fila = document.getElementById("fila")
    canciones.tracks.forEach(function(cancion){

    console.log(canciones)
    console.log(canciones.tracks)
    
    //recorro el arreglo de canciones
    
        //(console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion

        let columna = document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100")

        //creo la foto
        let foto = document.createElement("img")
        foto.src = cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //creo el audio
        let audio = document.createElement("audio")
        audio.src = cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls", "controls")


        //padres e hijos

        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}


