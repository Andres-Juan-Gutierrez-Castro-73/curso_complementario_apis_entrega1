// ANDRES JUAN GUTIERREZ CASTRO

/* Reemplazar caracteres: Crea una función llamada reemplazarCaracteres que
tome una cadena, un carácter viejo y un carácter nuevo como argumentos, y retorne
una nueva cadena con todos los caracteres viejos reemplazados por el carácter
nuevo. */

// FUNCION
function reemplazarCaracteres(cadena, primerCaracter, nuevoCaracter) {
    const regex = new RegExp(primerCaracter, "g");
    return cadena.replace(regex, nuevoCaracter);
}

// CONSTANTES PARA PROBAR LA FUNCION
const texto = "ks ks ks ks ks";
const caracterViejo = "k";
const caracterNuevo = "j";
const resultado = reemplazarCaracteres(texto, caracterViejo, caracterNuevo);

// RESULTADO
console.log(resultado);