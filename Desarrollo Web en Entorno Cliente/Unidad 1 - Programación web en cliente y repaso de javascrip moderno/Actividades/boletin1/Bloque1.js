// Temperaturas

/**
 * Realiza un programa que: a) muestre todas las temperaturas; b) calcule la máxima y la mínima; c) cuente cuántas son 
 * superiores a 20 ºC; d) calcule la media.
 * En este ejercicio no utilices map, filter ni reduce.
 * 
 */


const temperaturas = [18, 21, 24, 19, 27, 30, 22];

console.log(`Las temperaturas son: ${temperaturas}`);

const calculaMin = (temperaturas) => {
    let min = temperaturas[0];
    for (temperatura of temperaturas) {
        if (temperatura < min) {
            min = temperatura;
        }
    }
    return min;
};

const calculaMax = (temperaturas) => {
    let max = temperaturas[0];
    for (temperatura of temperaturas) {
        if (temperatura > max) {
            max = temperatura;
        };
    };
    return max;
};

console.log(`La temperatura máxima es ${calculaMax(temperaturas)} ºC y la mínima ${calculaMin(temperaturas)} ºC`);

const calculaMayor20 = temperaturas => {
    let mayores20 = [];
    for (temperatura of temperaturas) {
        if (temperatura > 20) {
            mayores20.push(temperatura);
        };
    };
    return mayores20;
};

console.log(`Las temperaturas mayores que 20 son: ${calculaMayor20(temperaturas)}`);

const calculaMedia = temperaturas => {
    let media = 0;
    for (temperatura of temperaturas) {
        media += temperatura;
    };
    return (media / temperaturas.length)
};

console.log(`La temperatura media es ${calculaMedia(temperaturas)}$`)

// Funciones

/**
 * Crea las funciones esPar(numero), mayor(a, b) y calcularIVA(precio, porcentaje).
 * Después transforma las tres en arrow functions
 */

function esPar(num) {
    return num % 2 === 0;
};

function esMayorQue(num1, num2) {
    let resultado = "";

    if (num1 > num2) {
        resultado = true;
    } else if (num2 > num1) {
        resultado = false;
    } else {
        resultado = "Son el mismo número";
    };
    return resultado;
}

function calcularIVA(precio, porcentaje) {
return "El impuesto es de " + (precio * (porcentaje)/100) + "€";
};

console.log(esPar(14));
console.log(esPar(15));
console.log(esMayorQue(8, 2));
console.log(esMayorQue(2, 8));
console.log(esMayorQue(2, 2));
console.log(calcularIVA(200, 21));

// 1. esPar con return implícito (al tener un solo parámetro, puedes incluso omitir los paréntesis)
const esPar = num => num % 2 === 0;

// 2. esMayorQue mantiene las llaves porque tiene varias líneas de lógica interna
const esMayorQue = (num1, num2) => {
    let resultado = "";

    if (num1 > num2) {
        resultado = true;
    } else if (num2 > num1) {
        resultado = false;
    } else {
        resultado = "Son el mismo número";
    }
    return resultado;
};

// 3. calcularIVA con return implícito
const calcularIVA = (precio, porcentaje) => "El impuesto es de " + (precio * (porcentaje)/100) + "€";

// Comprobaciones
console.log(esPar(14));
console.log(esPar(15));
console.log(esMayorQue(8, 2));
console.log(esMayorQue(2, 8));
console.log(esMayorQue(2, 2));
console.log(calcularIVA(200, 21));