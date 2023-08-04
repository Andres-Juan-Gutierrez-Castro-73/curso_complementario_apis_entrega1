// ANDRES JUAN GUTIERREZ CASTRO

/* Objetos como parámetros y retorno: Crea una función llamada crearLibro que
tome como parámetros el titulo, autor y año de un libro, y retorne un objeto con
esas propiedades. */

// FUNCION PARA CREAR OBJETO
function crearLibro(titulo, autor, ano) {
    return {
      titulo: titulo,
      autor: autor,
      ano: ano
    };
}

// CONSTANTES PARA PROBAR LA FUNCION
const libro1 = crearLibro("methamofosis", "franz kafka", 1943);
console.log(libro1);

const libro2 = crearLibro("1984", "George Orwell", 1949);
console.log(libro2);