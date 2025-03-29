/*
* Módulo OMDBWrapper
* Se asume que si la web cae, se devuelve returnObject original
*/
import 'dotenv/config';
import axios from "axios";

const APIKEY = process.env.APIKEY; // Poné tu APIKEY, esta no funciona.

function armarRequestUrl(queryParams) {
    const requestUrl = new URL("https://www.omdbapi.com/");
    requestUrl.searchParams.append("apikey", APIKEY);
    for (const key in queryParams)
        requestUrl.searchParams.append(key, queryParams[key]);
    return requestUrl.href;
}

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : []
    };
    const requestUrl = armarRequestUrl({ s: searchText, page: page });

    try {
        const response = await axios.get(requestUrl);
        returnObject.respuesta = response.data.Response === "True";
        if (returnObject.respuesta) {
            returnObject.cantidadTotal = parseInt(response.data.totalResults);
            returnObject.datos = response.data.Search;
        }
    } catch (error) {
        console.error("No se pudo conectar a la API:", error);
    }

    return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : []
    };
    const requestUrl = armarRequestUrl({ s: searchText });

    try {
        const response = await axios.get(requestUrl);
        returnObject.respuesta = response.data.Response === "True";
        if (returnObject.respuesta) {
            returnObject.cantidadTotal = parseInt(response.data.totalResults);
            returnObject.datos = response.data.Search;
        }
    } catch (error) {
        console.error("No se pudo conectar a la API:", error);
    }

    return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    const requestUrl = armarRequestUrl({ i: imdbID });

    try {
        const response = await axios.get(requestUrl);
        returnObject.respuesta = response.data.Response === "True";
        if (returnObject.respuesta) {
            delete response.data.Response
            returnObject.datos = response.data;
            returnObject.cantidadTotal = 1;
        }
    } catch (error) {
        console.error("No se pudo conectar a la API:", error);
    }

    return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};