// Ejercicio 1

const duracionEmision = (inicioEmision, finalEmision) => {
    let respuesta = null
    if (+inicioEmision < 0 || +finalEmision < 0 || +inicioEmision > 1439 || +finalEmision > 1439) {
        respuesta = `Error. No se aceptan tiempos negativos o superiores a 1439 minutos (23:59).`;

    } else if (+inicioEmision > +finalEmision) {
        let calculo = +finalEmision - +inicioEmision;
        if (calculo - 0) {
            calculo = 1439 + calculo;
        }
        respuesta = calculo;

    } else if (+inicioEmision < +finalEmision) {
        let calculo = +finalEmision - +inicioEmision;
        if (+finalEmision + +inicioEmision > 1439) {
            calculo = 1439 - Number(finalEmision) + Number(inicioEmision) + 1;
        };
        respuesta = calculo;

    } else if (+inicioEmision === +finalEmision) {
        respuesta = 0;
    };

    return respuesta;
};

console.log(duracionEmision(2, 1439)); // 3
console.log(duracionEmision(45, 50)); // 5
console.log(duracionEmision(50, 40)); // 1429
console.log(duracionEmision(50, 1440)); // Error...
console.log(duracionEmision(50, 50)); // 0

// Ejercicio 2

const cortes = [
    { archivo: "cabecera.wav", entrada: 0, salida: 12, descartado: false },
    { archivo: "entrevista.wav", entrada: 20, salida: 95, descartado: false },
    { archivo: "prueba.wav", entrada: 0, salida: 40, descartado: true },
    { archivo: "ambiente.wav", entrada: 5, salida: 23, descartado: false }
];

const prepararMontaje = cortes => {
    const montaje = {
        archivos: [],
        duracion: 0
    };
    let calculoDuracion = 0;

    for (corte of cortes) {
        if (corte.descartado === false && corte.entrada > -1 && corte.salida > -1 && corte.entrada < corte.salida) {
            montaje.archivos.push(corte.archivo);
            montaje.duracion += (corte.salida - corte.entrada);
        };
    };

    return montaje;
};

console.log(prepararMontaje(cortes));

// Ejercicio 3

const reservas = [
    { estudio: "A", inicio: 600, fin: 660, confirmada: true },
    { estudio: "B", inicio: 620, fin: 700, confirmada: true },
    { estudio: "A", inicio: 660, fin: 690, confirmada: false },
    { estudio: "A", inicio: 720, fin: 780, confirmada: true }
];

const hayConflicto = (reservas, estudio, inicio, fin) => {
    const reservaNueva = {
        estudio: estudio,
        inicio: inicio,
        fin: fin
    };

    let hayConflicto = false

    for (reserva of reservas) {
        if (reserva.estudio === reservaNueva.estudio && reserva.confirmada === true) {

            hayConflicto = true
            //}
        };
    };

    return hayConflicto;
};

// if (reservaNueva.inicio >= reserva.inicio || reservaNueva.inicio <= reserva.final
//                 || reservaNueva.final >= reserva.final || reservaNueva.final <= reserva.inicio) {

console.log(hayConflicto(reservas, "A", 650, 670)); // true
console.log(hayConflicto(reservas, "A", 660, 700)); // false
console.log(hayConflicto(reservas, "A", 590, 790)); // true
console.log(hayConflicto(reservas, "C", 600, 800)); // false

// Ejercicio 4

const requisitos = [
    { codigo: "MIC", obligatorio: true },
    { codigo: "MESA", obligatorio: true },
    { codigo: "LUZ", obligatorio: false }
];

const comprobaciones = [
    { codigo: "MIC", superada: false },
    { codigo: "MESA", superada: true },
    { codigo: "MIC", superada: true }
];

const listoParaEmitir = (requisitos, comprobaciones) => {
    let respuesta = false;
    let contador = 0;
    let contadorSuperadas = 0;

    for (requisito of requisitos) {
        if (requisito.obligatorio === true) {
            for (comprobacion of comprobaciones) {
                if (comprobacion.codigo === requisito.codigo) {
                    contador++
                    if (comprobacion.superada === true) {
                        contadorSuperadas++
                    };
                };
            };

        };

        if (contador === contadorSuperadas) {
            respuesta = true;
        };
    };

    return respuesta;

};

// const listoParaEmitir = (requisitos, comprobaciones) => {
//     let respuesta = false;
//     let contador = 0;
//     let contadorSuperadas = 0;

//     for (requisito of requisitos) {
//         if (requisito.obligatorio === true) {
//             for (comprobacion of comprobaciones){
//                 if(com)
//             };
//         };
//     };

//     return respuesta;

// };

console.log(listoParaEmitir(requisitos, comprobaciones)); // true
console.log(listoParaEmitir(requisitos, [
    { codigo: "MIC", superada: true }
])); // false
console.log(listoParaEmitir([], comprobaciones)); // false

// Ejercicio 5

const escaleta = {
    programa: "Voces del barrio",
    version: 2,
    intervenciones: [
        { codigo: "AP", inicio: 600, emitida: true },
        { codigo: "EN", inicio: 610, emitida: false },
        { codigo: "MU", inicio: 635, emitida: false }
    ]
};

const reprogramar = (escaleta, retraso) => {
    const nuevasIntervenciones = [
        ...escaleta.intervenciones,
    ];

    for (intervencion of nuevasIntervenciones) {
        intervencion.inicio += retraso
    };

    const nuevaEscaleta = {
        ...escaleta,
        version: escaleta.version + 1,
        nuevasIntervenciones
    };

    return nuevaEscaleta;
};

console.log(reprogramar(escaleta, 10));