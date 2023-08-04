// ANDRES JUAN GUTIERREZ CASTRO

/* Recorrer y mostrar propiedades de un objeto: Dado el siguiente objeto, recorre
todas sus propiedades y muestra sus nombres y valores por consola: */
let libro = {
    titulo: "el principito", 
    auto: "Atoine de Saint-Exupéry",
    ano: 1943, 
    genero: "novela"
};

// RECORRER EL OBJETO CON EL CICLO FOR
for (let propiedad in libro) {
    console.log(propiedad + ": " + libro[propiedad]);
}