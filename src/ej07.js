import { getCountryByAbbreviation, getCurrencyAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    const nombrePais = getCountryByAbbreviation(codigoPais);
    const moneda = getCurrencyAbbreviation(nombrePais);
    return moneda !== undefined ? moneda : null;
}