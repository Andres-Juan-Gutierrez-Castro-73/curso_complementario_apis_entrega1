// ANDRES JUAN GUTIERREZ CASTRO

/* Eliminar espacios en blanco: Crea una función llamada eliminarEspacios que
tome una cadena como argumento y retorne una nueva cadena sin espacios en
blanco al inicio y al final. */

// FUNCION
function eliminarEspacios(cadena) {
    return cadena.trim();
}

// CONSTANTES PARA PROBAR LA FUNCION
const textoConEspacios = "    Soy,  ANDRES!         ";
const textoSinEspacios = eliminarEspacios(textoConEspacios);

// RESULTADO
console.log(textoSinEspacios);