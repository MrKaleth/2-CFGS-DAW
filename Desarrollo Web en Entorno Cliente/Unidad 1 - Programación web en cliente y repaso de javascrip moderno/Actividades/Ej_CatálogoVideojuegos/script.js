const videojuegos = [
    { id: 1, titulo: "Hollow Knight", genero: "Metroidvania", precio: 15, disponible: true },
    { id: 2, titulo: "Celeste", genero: "Plataformas", precio: 20, disponible: true },
    { id: 3, titulo: "Hades", genero: "Roguelike", precio: 25, disponible: false },
    { id: 4, titulo: "Stardew Valley", genero: "Simulación", precio: 14, disponible: true },
    { id: 5, titulo: "Dead Cells", genero: "Roguelike", precio: 24, disponible: false }
];

/*
1. Mostrar el título de todos los videojuegos
2. Mostrar título y precio: "Hades - 25 €“
3. Mostrar únicamente los disponibles
4. Contar los videojuegos disponibles
5. Calcular el precio medio
6. Mostrar los videojuegos de menos de 20 €
7. Buscar el videojuego cuyo id sea 4
8. Determinar cuál es el más caro
9. Crear un videojuego y añadirlo al array
10. Subir 5 € el precio de todos los videojuegos
*/

console.log("--1--");

/*
for (videojuego of videojuegos) {
    console.log(videojuego.titulo);
};
*/

const titulos = videojuegos => {
    for (videojuego of videojuegos) {
        console.log(videojuego.titulo);
    };
};

titulos(videojuegos);

console.log("--2--");

/*
for(videojuego of videojuegos){
console.log(`${videojuego.titulo} - ${videojuego.precio}`);
};
*/

const tituloPrecio = videojuegos => {
    for (videojuego of videojuegos) {
        console.log(`${videojuego.titulo} - ${videojuego.precio}`);
    };
};

tituloPrecio(videojuegos);

console.log("--3--");

/*
for (videojuego of videojuegos) {
    if (videojuego.disponible !== false) {
        console.log(videojuego.titulo);
    }
};
*/

const pintaDisponible = videojuegos => {
    for (videojuego of videojuegos) {
        if (videojuego.disponible !== false) {
            console.log(videojuego.titulo);
        };
    };
};

pintaDisponible(videojuegos);

console.log("--4--");

const cuentaDisponible = videojuegos => {
    let numDisponibles = 0;
    for (videojuego of videojuegos) {
        if (videojuego.disponible !== false) {
            numDisponibles++;
        };
    };
    console.log(`Videojuegos disponibles: ${numDisponibles}`);
};

cuentaDisponible(videojuegos);

console.log("--5--");

const calculaPrecioMedio = videojuegos => {
    let precio = 0;
    for (videojuego of videojuegos) {
        precio += videojuego.precio;
    };
    const precioMedio = precio / (videojuegos.length);

    console.log(`El precio medio es: ${precioMedio}`)
};

calculaPrecioMedio(videojuegos);

console.log("--6--");

const pintaMenor20 = videojuegos => {
    for (videojuego of videojuegos) {
        if (videojuego.precio < 20) {
            console.log(videojuego.titulo);
        };
    };
};

pintaMenor20(videojuegos);

console.log("--7--");

const buscaId4 = videojuegos => {
    for (videojuego of videojuegos) {
        if (videojuego.id === 4) {
            console.log(videojuego.titulo);
        };
    };
};

buscaId4(videojuegos);

console.log("--8--");

const precioMasAlto = videojuegos => {
    let precioAlto = 0;
    let idAlto;
    for (videojuego of videojuegos) {
        if (videojuego.precio > precioAlto) {
            precioAlto = videojuego.precio;
            idAlto = videojuego.id;
        };
    };
    for (videojuego of videojuegos) {
        if (videojuego.id === idAlto) {
            console.log(videojuego.titulo);
        }
    }
};

precioMasAlto(videojuegos);

console.log("--9--");

const anadeVideojuego = videojuegos => {
    const nuevoVideojuego = {
        id: 6,
        titulo: "Helldivers II",
        genero: "co-op shooter",
        precio: 40,
        disponible: true
    };

    videojuegos.push(nuevoVideojuego);

    console.log(videojuegos);
};

anadeVideojuego(videojuegos);

console.log("--10--");


const subePrecio = videojuegos => {
    for (videojuego of videojuegos) {
        videojuego.precio += 5;
    };
    console.log(videojuegos);
};

subePrecio(videojuegos);