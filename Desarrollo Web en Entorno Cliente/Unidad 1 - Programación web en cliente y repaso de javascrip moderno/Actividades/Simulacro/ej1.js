/**
 * Analiza el código y realiza las modificaciones necesarias para que la función cumpla estos requisitos:
 * Si el precio es igual o superior a 100 €, aplica el descuento indicado; si es inferior, devuelve el precio original.
 * Debe funcionar también si el precio recibido es una cadena que contiene un valor numérico.
 * Debe devolver el precio final calculado.
 * 
function calcularPrecioFinal(precio, descuento) {
    if (precio >= 100) {
        const precioFinal = precio - precio * descuento / 100;
    }
    return precioFinal;
}
console.log(calcularPrecioFinal("120", 20));
 */

const calcularPrecioFinal = (precio, descuento) => {
    let precioFinal = 0;

    if (+precio >= 100) {
        precioFinal = +precio - (+precio * +descuento / 100);
    } else {
        precioFinal = +precio;
    };
    return precioFinal;
};
console.log(calcularPrecioFinal("120", 20));