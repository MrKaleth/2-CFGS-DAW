const alumnos = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Eva", nota: 9 },
    { nombre: "Pablo", nota: 3 }
];

const calculaNota = alumnos => {
    let media = 0;
    for (alumno of alumnos) {
        media += alumno.nota;
    }
    const mediaCalculada = media / (alumnos.length)
    return mediaCalculada
};

console.log(calculaNota(alumnos))



// Primero sumamos todas las notas y luego dividimos por el total de alumnos
const total = alumnos.reduce((acumulador, alumno) => acumulador + alumno.nota, 0) / alumnos.length;

console.log(total);