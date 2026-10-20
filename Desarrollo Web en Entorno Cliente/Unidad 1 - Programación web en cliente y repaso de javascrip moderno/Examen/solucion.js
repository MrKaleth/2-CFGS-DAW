//Ej1
const duracionEmision = (inicio, fin) => {
    const comienzo = +inicio; //Number(inicio)
    const final = +fin; //Number(fin)
    // if(comienzo > final) return 1440-comienzo+final;
    // return final-comienzo;       
    return (final < comienzo) ? 1440 - comienzo + final : final - comienzo;
}

duracionEmision("600", "645");   // 45
duracionEmision("1410", "30");   // 60
duracionEmision(720, 720);        // 0

//Fin Ej1

//Ej2
const cortes = [
    {
        archivo: "cabecera.wav", entrada: 0, salida: 12,
        descartado: false
    },
    {
        archivo: "entrevista.wav", entrada: 20, salida: 95,
        descartado: false
    },
    {
        archivo: "prueba.wav", entrada: 0, salida: 40,
        descartado: true
    },
    {
        archivo: "ambiente.wav", entrada: 5, salida: 23,
        descartado: false
    }
];


const prepararMontaje = (cortes) => {
    const noDescartados = cortes.filter(
        corte => !corte.descartado
    );

    return {
        archivos: noDescartados.map(noDescartado => noDescartado.archivo),
        duracion: noDescartados.reduce((totalDuracion, noDescartado) => totalDuracion += noDescartado.salida - noDescartado.entrada, 0)
    }
}

prepararMontaje(cortes);
// {
//   archivos: ["cabecera.wav", "entrevista.wav", "ambiente.wav"],
//   duracion: 105
// }

//Fin Ej2

//Ej3

const reservas = [
    { estudio: "A", inicio: 600, fin: 660, confirmada: true },
    { estudio: "B", inicio: 620, fin: 700, confirmada: true },
    { estudio: "A", inicio: 660, fin: 690, confirmada: false },
    { estudio: "A", inicio: 720, fin: 780, confirmada: true }
];

const hayConflicto = (reservas, estudio, inicio, fin) => {
    const reservasConfirmadas = reservas.filter(reserva => reserva.confirmada && reserva.estudio === estudio);
    return reservasConfirmadas.some(
        reserva => inicio < reserva.fin && fin > reserva.inicio
    );
}

hayConflicto(reservas, "A", 650, 670); // true
hayConflicto(reservas, "A", 660, 700); // false
hayConflicto(reservas, "A", 590, 790); // true
hayConflicto(reservas, "C", 600, 800); // false

//Fin Ej3

// Ej4
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
    const requisitosObligatorios = requisitos.filter(requisito => requisito.obligatorio);
    if (requisitosObligatorios.length === 0) return false;
    return requisitosObligatorios.every(
        requisito => comprobaciones.
            // filter(comprobacion => comprobacion.codigo===requisito.codigo).
            // some(comprobacion => comprobacion.superada)
            some(comprobacion => comprobacion.superada
                && comprobacion.codigo === requisito.codigo)
    );
}

listoParaEmitir(requisitos, comprobaciones); // true
listoParaEmitir(requisitos, [
    { codigo: "MIC", superada: true }
]); // false
listoParaEmitir([], comprobaciones); // false

// fin Eje4

//Ej5

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
    return {
        ...escaleta, //descomponemos escaleta
        version: escaleta.version + 1, //actualizamos la version
        intervenciones: escaleta.intervenciones. //filtramos las intervenciones
            filter(intervencion => !intervencion.emitida).
            map(intervencion =>
            ({ //se ponen () porque sino el compilador interpreta que es el cuerpo de la funciÃ³n pero 
                ...intervencion,//en realidad lo que se quiere devolver es un objeto 
                inicio: intervencion.inicio + retraso //actualizamos el inicio
            }))

    }
}

//Otra forma de escribir lo mismo
const reprogramar2 = (escaleta, retraso) => {
    return {
        ...escaleta, //descomponemos escaleta
        version: escaleta.version + 1, //actualizamos la version
        intervenciones: escaleta.intervenciones. //filtramos las intervenciones
            filter(intervencion => !intervencion.emitida).
            map(intervencion => { //se ponen () porque sino el compilador interpreta que es el cuerpo de la funciÃ³n pero 
                return {
                    ...intervencion,//en realidad lo que se quiere devolver es un objeto 
                    inicio: intervencion.inicio + retraso //actualizamos el inicio
                }
            })

    }
}
// El proceso es:
// 1. filter selecciona las intervenciones pendientes.
// 2. map ejecuta su funciÃ³n para cada una. Cada return interior entrega un objeto nuevo a map, que lo incorpora al nuevo array.
// 3. Ese array se asigna a la propiedad intervenciones.
// 4. El return exterior devuelve la escaleta completa.
// Un return termina Ãºnicamente la ejecuciÃ³n de la funciÃ³n a la que pertenece. El del callback no termina reprogramar ni detiene el recorrido de map.

reprogramar(escaleta, 10);
// {
//   programa: "Voces del barrio",
//   version: 3,
//   intervenciones: [
//     { codigo: "EN", inicio: 620, emitida: false },
//     { codigo: "MU", inicio: 645, emitida: false }
//   ]
// }

//Fin Ej5