const alumnos = [
    { nombre: "Ana", nota: 7.5 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 },
    { nombre: "Pablo", nota: 5 },
    { nombre: "Elena", nota: 3.5 }
];

// obtenerEstadisticas(alumnos)
// Implementa una función que reciba un array de alumnos y devuelva un objeto con el número de
// aprobados, el número de suspensos y la nota media del grupo. Se considera aprobado a partir de 5.
// Para los datos anteriores, el resultado esperado es:
// {
//  aprobados: 3,
//  suspensos: 2,
//  notaMedia: 5.8
// }
// Debe funcionar correctamente independientemente del número de alumnos y de las notas existentes en el
// array.

const obtenerEstadisticas = alumnos => {
    const estadisticas = {
        aprobados: 0,
        suspensos: 0,
        notaMedia: 0
    };

    let notas = 0;

    for (alumno of alumnos) {
        if (alumno.nota >= 5) {
            estadisticas.aprobados += 1;
        } else {
            estadisticas.suspensos += 1;
        };

        notas += alumno.nota;
    };

    estadisticas.notaMedia = (notas / alumnos.length);

    return estadisticas;
};

console.log(obtenerEstadisticas(alumnos));