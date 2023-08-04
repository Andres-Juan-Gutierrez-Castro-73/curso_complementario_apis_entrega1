// ANDRES JUAN GUTIERREZ CASTRO

/* Crear un objeto básico:
a. Crea un objeto llamado persona con las siguientes propiedades: nombre,
edad, profesion y hobbies. */

/* Acceder a propiedades de un objeto:
a. Dado el siguiente objeto persona, accede a sus propiedades para obtener su
nombre y profesión: */

/* Modificar una propiedad de un objeto:
a. Utilizando el */

/* Agregar una propiedad a un objeto:
a. Añade una propiedad llamada ciudad al objeto persona, y asígnale un
valor. */

/* Eliminar una propiedad de un objeto:
a. Elimina la propiedad hobbies del objeto persona. */

// CREAMOS EL OBJETO
const persona = {
    nombre: "Andres Juan",
    edad: 19,
    profesion: "Ingeniero",
    hobbies: ["correr", "leer", "programar"],
};

// IMPRIMIR LOS DATOS DEL OBJETO
console.log(persona.nombre);
console.log(persona["edad"]);
console.log(persona.hobbies[0]);

//MODIFICAR LA EDAD
persona.edad = 35;

// AÑADIR PROPIEDAD AL OBJETO PERSONA
persona.ciudad = "Medellín";

// ELIMINAR PROPIEDAD DEL OBJETO
delete persona.hobbies;