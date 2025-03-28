let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
function parsearUrl(laURL) {
    try {
        const url = new URL(laURL);
        return {
            host: url.host,
            pathname: url.pathname,
            parametros: url.searchParams
        };
    } catch (error) {
        console.error(error);
        return {};
    }
}