// ANDRES JUAN GUTIERREZ CASTRO

/* Buscar palabra: Crea una función llamada buscarPalabra que tome una cadena y
una palabra como argumentos, y retorne true si la palabra está presente en la
cadena, o false en caso contrario. */

// FUNCION
function buscarPalabra(cadena, palabra) {
    return cadena.includes(palabra);
}

// CONSTANTES PARA PROBAR LA FUNCION
const texto = "aprende js, es el lenguaje de programacion mas usado del mundo";
const resultado = buscarPalabra(texto, "js");

// RESULTADO
console.log(resultado);