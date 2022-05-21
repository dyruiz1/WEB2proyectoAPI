import { generarToken } from "./servicioGenerarToken.js"


export const URI_TOP_CANCIONES = "https://api.spotify.com/v1/artists/4jirsf9rymh8ajWTRRnF5g/top-tracks?market=US"

//1.1 URI del servicio que genera tokens
export const URI_GENERAR_TOKEN = 'https://accounts.spotify.com/api/token'

//nota: datos de envio peticion POST
const DATO1 = "client_id=92a1bcf0defb47a0a14241e0d77627aa"
const DATO2 = "client_secret=37f8b787d1a9425da18349e539a46933"
const DATO3 = "grant_type=client_credentials"
const DATOS_PETICION = `${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKENS={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}



//2. ARMO LA PETICION
let token = await generarToken()
const TOKEN=token.token_type+" " +token.access_token;
//recibir el token que se acabo de generar de forma automatica
export const PETICION_TOP_CANCIONES = {
    method:"GET",
    headers:{Authorization:TOKEN}
}