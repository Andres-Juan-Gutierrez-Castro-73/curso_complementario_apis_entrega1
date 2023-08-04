// ANDRES JUAN GUTIERREZ CASTRO

/* Concatenar cadenas: Crea una función llamada concatenarCadenas que tome
dos cadenas como argumentos y retorne una nueva cadena que sea la concatenación
de ambas. */

// FUNCION
function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}

// CONSTANTES PARA PROBAR LA FUNCION
const texto1 = "Hola, ";
const texto2 = "curso API!";
const resultado = concatenarCadenas(texto1, texto2);

// RESULTADO
console.log(resultado);