// ANDRES JUAN GUTIERREZ CASTRO

/* Invertir una cadena: Crea una función llamada invertirCadena que tome una
cadena como argumento y retorne una nueva cadena con los caracteres en orden
inverso. */

// FUNCION
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// CONSTANTES PARA PROBAR LA FUNCION
const texto = "Hola, mundo!";
const textoInvertido = invertirCadena(texto);

// RESULTADO
console.log(textoInvertido);