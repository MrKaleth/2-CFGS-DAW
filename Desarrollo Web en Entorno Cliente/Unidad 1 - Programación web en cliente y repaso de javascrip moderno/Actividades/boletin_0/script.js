let productos = [
    { nombre: "Teclado", precio: 35, stock: 4 },
    { nombre: "Ratón", precio: 20, stock: 0 },
    { nombre: "Monitor", precio: 180, stock: 3 },
    { nombre: "Auriculares", precio: 45, stock: 8 }
];

// EJERCICIO 1
console.log("--- Tarea 1 ---")

function estaDisponible(producto) {
    let disponible;
    if (producto.stock > 0) {
        disponible = true;
    } else {
        disponible = false;
    }
    return disponible;
};

console.log(estaDisponible(productos[0]));
console.log(estaDisponible(productos[1]));

// EJERCICIO 2

console.log("--- Tarea 2 ---");

function muestraProductos(listaProductos) {
    for (let i = 0; i < listaProductos.length; i++) {
        let producto = listaProductos[i];
        console.log(`${producto.nombre} - ${producto.precio} € - Stock: ${producto.stock}`);
    };
};

/*
for(const producto of productos){
    console.log(`${producto.nombre} - ${producto.precio} € - Stock: ${producto.stock}`);
}

Equivalente en java:
for (Producto producto : productos) {

};

*/

muestraProductos(productos);

// EJERCICIO 3

console.log("--- Tarea 3 ---");

function calculaPrecio(listaProductos) {
    let precioTot = 0;
    for (let i = 0; i < listaProductos.length; i++) {
        let producto = listaProductos[i];
        precioTot = precioTot + (producto.precio * producto.stock);
    }
    console.log(`Valor total del stock: ${precioTot} €`);
};

calculaPrecio(productos);

// EJERCICIO 4

console.log("--- Tarea 4 --- (comentada)");

/*
function mostrarProductosDisponibles(listaProductos) {
    let listaUL = document.getElementById("lista");
    listaUL.innerHTML = "";
    for (let producto of listaProductos) {
        if (producto.stock > 0) {
            let contenidoLi = `${producto.nombre} - ${producto.precio} €`;
            listaUL.innerHTML += `<li>${contenidoLi}</li>`;
        }
    }
};


mostrarProductosDisponibles(productos);

Otra opción es la siguiente:

const lista = document.querySelector("#lista");
for (const producto of productos) {
    if (producto.stock > 0) {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - ${producto.precio}$`;
        lista.appendChild(item);
    };
};
*/



// EJERCICIO 5

console.log("--- Tarea 5 ---");

const botonMostrar = document.getElementById("mostrar");

botonMostrar.addEventListener("click", function () {
    let listaUL = document.getElementById("lista");
    listaUL.innerHTML = "";
    for (let producto of productos) {
        if (producto.stock > 0) {
            let contenidoLi = `${producto.nombre} - ${producto.precio} €`;
            listaUL.innerHTML += `<li>${contenidoLi}</li>`;
        }
    }
    console.log("Mostrando tras pulsar botón");
});

// EJERCICIO 6

console.log("--- Tarea 6 ---");

const resumen = document.querySelector("#resumen");
let totalProductosConStock = 0;
for(const producto of productos){
    if(producto.stock > 0) totalProductosConStock +=1;
};

resumen.textContent = `Hay ${totalProductosConStock} productos disponibles`;