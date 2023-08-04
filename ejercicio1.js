// ANDRES JUAN GUTIERREZ CASTRO

/* Longitud de una cadena: Crea una función llamada longitudCadena que tome
una cadena como argumento y retorne la longitud de la misma. */

//CREAMOS LA FUNCION
function longitudCadena(cadena) {
    return cadena.length;
}

// CREAMOS LAS CONSTANTES EN LAS CUALES SE VA A GUARDAR LA INFORMACION Y VER EL RESULTADO
const textoPrueba = "curso complementario SENA";
const longitudString = longitudCadena(textoPrueba);

// IMPRIMIMOS POR CONSOLA EL RESULTADO
console.log(`la longitud de la cadena es de: ${longitudCadena}`);