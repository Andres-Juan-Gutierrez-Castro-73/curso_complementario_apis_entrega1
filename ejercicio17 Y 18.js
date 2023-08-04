// ANDRES JUAN GUTIERREZ CASTRO

/* Objeto dentro de objeto Crea un objeto llamado estudiante con las siguientes
propiedades: nombre, edad y direccion. La propiedad direccion debe ser a su
vez otro objeto con las propiedades calle, ciudad y codigoPostal. */

/* Acceso a propiedades anidadas: Dado el objeto estudiante del ejercicio anterior,
accede a la propiedad codigoPostal de la dirección del estudiante.
*/

// CREACION DEL OBJETO
const estudiante = {
    nombre: "Juan",
    edad: 20,
    direccion: {
      calle: "Calle Principal",
      ciudad: "Ciudad Ejemplo",
      codigoPostal: "12345"
    }
};

// ACCESO AL CODIGO POSTAL DEL OBJETO ESTUDIANTES
const codigoPostal = estudiante.direccion.codigoPostal;
console.log(codigoPostal);