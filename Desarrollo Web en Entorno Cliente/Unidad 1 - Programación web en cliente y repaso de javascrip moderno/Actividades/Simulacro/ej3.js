const productos = [
    { id: 1, nombre: "Teclado", precio: 30, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 15, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 3 },
    { id: 4, nombre: "Webcam", precio: 55, stock: 2 },
    { id: 5, nombre: "Auriculares", precio: 70, stock: 0 },
    { id: 6, nombre: "SSD", precio: 90, stock: 5 }
];

const obtenerNombresDisponibles = (productos, preciomax) => {
    const disponibles = [];
    for (producto of productos) {
        if (producto.stock !== 0 && producto.precio < preciomax) {
            disponibles.push(producto.nombre);
        };
    };

    return disponibles;
};

console.log(obtenerNombresDisponibles(productos, 100));

console.log("-----");

const buscarProductoDisponible = (productos, idBuscado) => {
    let productoBuscado = undefined;
    for (producto of productos) {
        if (producto.id === idBuscado && producto.stock !== 0) {
            productoBuscado = producto;
        };
    };

    return productoBuscado;
};

console.log(buscarProductoDisponible(productos, 4));
console.log(buscarProductoDisponible(productos, 2));

console.log("-----");

const existeProductoCaroDisponible = (productos, precioBuscado) => {
    let disponible = false;
    for (producto of productos) {
        if (producto.stock !== 0 && producto.precio > precioBuscado) {
            disponible = true;
        };
    };

    return disponible;
};

console.log(existeProductoCaroDisponible(productos, 150));
console.log(existeProductoCaroDisponible(productos, 200));

console.log("-----");

const calcularValorStockDisponible = productos => {
    let valor = 0;
    for (producto of productos) {
        valor += producto.precio * producto.stock;
    };

    return valor;
};

console.log(calcularValorStockDisponible(productos));

console.log("-----");

const obtenerProductosRebajados = (productos, porcentaje) => {
    let rebajado = [];
    for (producto of productos) {
        if (producto.stock !== 0) {
            producto.precio = calcularPrecioFinal(producto.precio, porcentaje);
            rebajado.push(producto);
        };
    };

    return rebajado;
};

const calcularPrecioFinal = (precio, descuento) => {
    return precioFinal = +precio - (+precio * +descuento / 100);
};

console.log(obtenerProductosRebajados(productos, 10));