//adentro va lo que estan mandando
import { URI_TOP_CANCIONES } from "./constantes.js";
import { PETICION_TOP_CANCIONES } from "./constantes.js";

// console.log (URI_TOP_CANCIONES)
// console.log(PETICION_TOP_CANCIONES)
//consumir el servicio
// await = esperar que trabaje el servidor, que algo que es asincrono se ejecute,fetch palabra reservada

export async function consumirCanciones(){
    let respuesta = await fetch(URI_TOP_CANCIONES, PETICION_TOP_CANCIONES)
    return respuesta.json();
}
