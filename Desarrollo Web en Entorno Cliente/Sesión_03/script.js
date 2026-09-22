
const producto = {
    nombre: "Monitor",
    precio: "200",
    stock: 3,
    descuento: null
};

/*
Crea las siguientes funciones:

obtenerEstado(producto) --> Arrow con temario: "Disponible" o "Agotado"
obtenerPrecioFinal(producto) --> Dscuento ausente: 0%. Devuelve el precio final.
mostrarResultado(producto, calcularPrecio) --> Llama al callback y muestra el nombre y el precio.
*/

/*
function obtenerEstado(producto) {
    let estado = "";
    if (producto.stock !== 0) {
        estado = "Disponible";
    } else {
        estado = "Agotado";
    }
  return estado;
};
*/

const obtenerEstado = producto => producto.stock > 0 ? "Disponible" : "Agotado";
console.log(obtenerEstado(producto));

const obtenerPrecioFinal = producto => {
    const precio = +producto.precio;
    const descuento = producto.descuento ?? 0; // Si es null o undefined, usa 0
    return precio - (precio * (descuento / 100)) + "$";
};
console.log(obtenerPrecioFinal(producto));

const mostrarResultado = (producto, calcularPrecio) => {
    const precioFinal = calcularPrecio(producto);
    const estado = obtenerEstado(producto);
    return `Producto: ${producto.nombre} | Estado: ${estado} | Precio Final: ${precioFinal}`;
};
console.log(mostrarResultado(producto, obtenerPrecioFinal));
