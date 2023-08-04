// ANDRES JUAN GUTIERREZ CASTRO

/* Objeto como lista de compras: Crea un objeto llamado listaDeCompras que
tenga propiedades que representen distintos productos y sus cantidades. Luego, crea
una función llamada totalDeCompras que recorra el objeto y calcule el total de
productos que hay que comprar. */

// OBJETO CON LA LISTA DE COMPRAS
const listaDeCompras = {
    camisas: 5,
    pantalones: 3,
    gorras: 2,
    medias: 12,
    zapatos: 1
};

// FUNCION PARA CONTAR TODOS LOS ELEMENTOS DE LA LISTA
function totalDeCompras(lista) {
    let total = 0;
    for (let producto in lista) {
      total += lista[producto];
    }
    return total;
}

// CONSTANTE PARA PROBAR LA FUNCION
const totalProductos = totalDeCompras(listaDeCompras);
console.log("Total de productos a comprar:", totalProductos);