import { URI_GENERAR_TOKEN } from "./constantes.js";
import { PETICION_GENERAR_TOKENS } from "./constantes.js";

// console.log(URI_GENERAR_TOKEN)
// console.log(PETICION_GENERAR_TOKENS)

 export async function generarToken(){
     let respuesta = await fetch(URI_GENERAR_TOKEN, PETICION_GENERAR_TOKENS)
     return respuesta.json()

}