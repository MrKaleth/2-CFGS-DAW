const producto = {
    id: 4,
    nombre: "Webcam",
    precio: 55,
    stock: 2
};

// Extrae nombre y precio en variables

const {nombre, precio} = producto;

console.log(`El nombre del producto es ${nombre} y el precio es ${precio}$`);