// ANDRES JUAN GUTIERREZ CASTRO

/* Separar palabras: Crea una función llamada separarPalabras que tome una
cadena de palabras separadas por espacios y retorne un arreglo con cada palabra
como elemento. */

// FUNCION
function separarPalabras(cadena) {
    return cadena.split(' ');
}

// CONSTANTES PARA PROBAR LA FUNCION
const texto = "Hola, este es un ejemplo";
const palabras = separarPalabras(texto);

// RESULTADO
console.log(palabras);