//Ej1
const calcularPrecioFinal = (precio, descuento) => (precio >= 100) ? precio - precio * descuento / 100 : +precio;

console.log(calcularPrecioFinal("120", 20));
//Fin Ej1

//Ej2
const alumnos = [
    { nombre: "Ana", nota: 7.5 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 },
    { nombre: "Pablo", nota: 5 },
    { nombre: "Elena", nota: 3.5 }
];


const obtenerEstadisticas = alumnos => {
    if (alumnos.length === 0) {
        return { aprobados: 0, suspensos: 0, notaMedia: null };
    }

    const estadisticas = alumnos.reduce(
        (resultado, alumno) => {
            if (alumno.nota >= 5) {
                resultado.aprobados++;
            } else {
                resultado.suspensos++;
            }

            resultado.notaMedia += alumno.nota;
            return resultado;
        },
        { aprobados: 0, suspensos: 0, notaMedia: 0 }
    );

    estadisticas.notaMedia /= alumnos.length;
    return estadisticas;
}

console.log(obtenerEstadisticas(alumnos));

//Fin Ej2

//Ej3

const productos = [
    { id: 1, nombre: "Teclado", precio: 30, stock: 4 },
    { id: 2, nombre: "RatÃ³n", precio: 15, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 3 },
    { id: 4, nombre: "Webcam", precio: 55, stock: 2 },
    { id: 5, nombre: "Auriculares", precio: 70, stock: 0 },
    { id: 6, nombre: "SSD", precio: 90, stock: 5 }
];

//a
const obtenerNombresDisponibles = (productos, precioMax) => {
    return productos
        .filter(producto => producto.precio <= precioMax && producto.stock > 0)
        .map(producto => producto.nombre);
};
console.log(obtenerNombresDisponibles(productos, 100));

//b
const buscarProductoDisponible = (productos, id) => {
    return productos.find(producto => producto.id === id && producto.stock > 0);
}
console.log(buscarProductoDisponible(productos, 4))
//c
const existeProductoCaroDisponible = (productos, precio) => {
    return productos.some(producto => producto.precio > precio && producto.stock > 0);
}
console.log(existeProductoCaroDisponible(productos, 100));
console.log(existeProductoCaroDisponible(productos, 190));
//d
const calcularValorStockDisponible = (productos) => {
    const total = productos.reduce((acumulador, producto) => {
        if (producto.stock > 0) {
            acumulador = acumulador + producto.precio * producto.stock
        }
        return acumulador;
    }, 0);
    return total;
};
console.log(calcularValorStockDisponible(productos));
//e
const obtenerProductosRebajados = (productos, porcentaje) => {
    if (productos.length === 0) return [];

    return productos
        .filter(producto => producto.stock > 0)
        .map(producto => ({
            ...producto,
            precio: producto.precio - producto.precio * porcentaje / 100
        }));
}
console.log(obtenerProductosRebajados(productos, 10));

//FinEj 3

//Ej4
const jugador = {
    id: 17,
    nombre: "Laura",
    nivel: 4,
    puntos: 850
};
//a
const actualizarJugador = (jugador, nivel, puntos) => {
    return {
        ...jugador,
        nivel,
        puntos,
        activo: true
    };
};
console.log(actualizarJugador(jugador, 5, 100));

//b
const obtenerResumenJugador = ({ nombre, puntos }) => {
    return {
        nombre,
        puntos,
    };
};

console.log(obtenerResumenJugador(jugador));

//Fin Ej4

//Ej5
const pedidos = [
    { id: 1, cliente: "Ana", total: 120, pagado: true },
    { id: 2, cliente: "Luis", total: 75, pagado: false },
    { id: 3, cliente: "Marta", total: 200, pagado: true },
    { id: 4, cliente: "Pablo", total: 40, pagado: true },
    { id: 5, cliente: "Elena", total: 150, pagado: false }
];
//a
const obtenerClientesPagados = pedidos => {
    if (pedidos.length === 0) return [];

    return pedidos
        .filter(pedido => pedido.pagado)
        .map(pedido => pedido.cliente);
}
console.log(obtenerClientesPagados(pedidos));

//b
const calcularIngresos = pedidos => {
    if (pedidos.length === 0) return 0;

    return pedidos
        .filter(pedido => pedido.pagado)
        .reduce((total, pedido) => total + pedido.total, 0);
}
console.log(calcularIngresos(pedidos));

//c
const obtenerPedidoMayor = pedidos => {
    const pagados = pedidos.filter(pedido => pedido.pagado);
    if (pagados.length === 0) return undefined;

    return pagados.reduce((mayor, pedido) =>
        pedido.total > mayor.total ? pedido : mayor
    );
}
console.log(obtenerPedidoMayor(pedidos));

//d
const generarResumen = pedidos => {

    return {
        clientes: obtenerClientesPagados(pedidos),
        totalIngresado: calcularIngresos(pedidos),
        pedidoMayor: obtenerPedidoMayor(pedidos)
    };
}

console.log(generarResumen(pedidos));