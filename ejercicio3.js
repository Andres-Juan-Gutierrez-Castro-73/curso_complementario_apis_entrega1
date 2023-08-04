// ANDRES JUAN GUTIERREZ CASTRO

/* Substring: Crea una función llamada obtenerSubstring que tome una cadena y
dos índices como argumentos y retorne el substring entre esos dos índices. */

// FUNCION
function obtenerSubstring(cadena, inicio, fin) {
    return cadena.substring(inicio, fin);
}

// CONSTANTES PARA EVALUAR LA FUNCION
const textoPrueba = "programacion en js";
const subtexto = obtenerSubstring(texto, 0, 4);
console.log(`este es el subtexto: ${subtexto}`); 