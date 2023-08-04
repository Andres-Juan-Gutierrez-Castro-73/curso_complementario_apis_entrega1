// // ANDRES JUAN GUTIERREZ CASTRO

/* Contar ocurrencias de una palabra: Crea una función llamada
contarOcurrencias que tome una cadena y una palabra como argumentos, y
retorne la cantidad de veces que la palabra aparece en la cadena. */

// FUNCION
function contarOcurrencias(cadena, palabra) {
    const regex = new RegExp(palabra, "gi");
    const coincidencias = cadena.match(regex);
    return coincidencias ? coincidencias.length : 0;
}

// CONSTANTES PARA PROBAR LA FUNCION
const texto = "Hola, hola, hola, mundo!";
const palabraBuscada = "hola";
const cantidad = contarOcurrencias(texto, palabraBuscada);

// RESULTADO
console.log(cantidad);