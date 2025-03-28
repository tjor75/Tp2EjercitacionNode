/* Módulo OMDBWrapper*/
import 'dotenv/config';
import axios from "axios";

const APIKEY = process.env.APIKEY; // Poné tu APIKEY, esta no funciona.
const ENDPOINT = "https://www.omdbapi.com/";

function armarRequestUrl() {
    const requestUrl = new URL("https://www.omdbapi.com/");
    requestUrl.searchParams.append("apikey", APIKEY);
    return requestUrl;
}


const OMDBSearchByPage = async (searchText, page = 1) => {
    const requestString = armarRequestUrl();
    armarRequestUrl.append("s", searchText);
    armarRequestUrl.append("page", page);
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : []
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : []
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};