// es el archivo principal para llamar los modulos
import { consumirCanciones } from "./servicioTopCanciones.js";
import {generarToken} from "./servicioGenerarToken.js";
import {pintarCanciones} from  "./pintarCanciones.js";

let canciones = await consumirCanciones()
pintarCanciones(canciones)