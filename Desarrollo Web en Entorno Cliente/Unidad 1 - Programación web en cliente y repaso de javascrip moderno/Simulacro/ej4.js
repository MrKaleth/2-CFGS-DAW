const jugador = {
    id: 17,
    nombre: "Laura",
    nivel: 4,
    puntos: 850
};

const actualizarJugador = (jugador, nivel, puntos) => {


    return {
        ...jugador,
        nivel: nivel,
        puntos: puntos,
        activo: true
    };
};

const actualizado = actualizarJugador(jugador, 5, 1000);
console.log(actualizado);
console.log(jugador);

const obtenerResumenJugador = jugador => {
    return {
        nombre: jugador.nombre,
        puntos: jugador.puntos
    };
};

console.log(obtenerResumenJugador(actualizado));