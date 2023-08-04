// ANDRES JUAN GUTIERREZ CASTRO

/* Mayúsculas y minúsculas: Crea una función llamada convertirMayusculas que
tome una cadena como argumento y retorne la misma cadena en mayúsculas. */

// CREAMOS LA FUNCION
function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
}

// CONSTANTE DE PRUEBA Y FUNCION
const textoPrueba = "Hola a todos en el curso";
const textoMayuscula = convertirMayusculas(textoPrueba);

// IMPRIMIMOS EL RESULTADO
console.log(`este es el texto en mayusculas: ${textoMayuscula}`);