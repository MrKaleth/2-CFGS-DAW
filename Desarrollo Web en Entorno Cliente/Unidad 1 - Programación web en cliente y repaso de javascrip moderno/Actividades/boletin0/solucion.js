let productos = [
    { nombre: "Teclado", precio: 35, stock: 4 },
    { nombre: "Ratón", precio: 20, stock: 0 },
    { nombre: "Monitor", precio: 180, stock: 3 },
    { nombre: "Auriculares", precio: 45, stock: 8 }
];


// Tarea 1

console.log(estaDisponible(productos[0]));
console.log(estaDisponible(productos[1]));

function estaDisponible(producto) {
    if (producto.stock > 0) return true;
    return false;
}

// Fin Tarea 1


// Tarea 2
for (const producto of productos) {
    console.log(`${producto.nombre} - ${producto.precio} - Stock: ${producto.stock} `);
}
// Fin Tarea 2


// Tarea 3
function totalProductos() {
    let total = 0;
    for (const producto of productos) {
        total += producto.stock * producto.precio;
    }
    return total;
}
console.log(`El total es: ${totalProductos()}`);

// Fin Tarea 3


// Tarea 4
// Seleccionar:
// <ul id="lista"></ul>
// y mostrar dentro de la lista únicamente los productos que tengan unidades disponibles.
const lista = document.querySelector("#lista");
for (const producto of productos) {
    if (producto.stock > 0) {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - ${producto.precio}€`;
        lista.appendChild(item);
    }
}

// Fin Tarea 4


// Tarea 5
lista.style.display = 'none';
const mostrar = document.querySelector("#mostrar");
mostrar.addEventListener('click', () => lista.style.display = 'block');
// Fin Tarea 5


// Tarea 6
const resumen = document.querySelector("#resumen");
let totalProductosConStock = 0;
for (const producto of productos) {
    if (producto.stock > 0) totalProductosConStock += 1;
}
resumen.textContent = `Hay ${totalProductosConStock} productos disponibles`;

// Fin Tarea 6