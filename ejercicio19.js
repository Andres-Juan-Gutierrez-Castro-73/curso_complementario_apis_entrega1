// ANDRES JUAN GUTIERREZ CASTRO

/* Métodos de objeto: Agrega un método llamado saludar al objeto persona del
ejercicio 1. El método debe imprimir un mensaje de saludo con el nombre de la
persona. */

// CREAMOS EL OBJETO CON EL METODO SALUDAR COMO PROPIEDAD
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    hobbies: ["correr", "leer", "bailar"],
    saludar: function() {
      console.log("¡Hola! Mi nombre es " + this.nombre + ".");
    }
};

// LLAMADO AL METODO
persona.saludar();