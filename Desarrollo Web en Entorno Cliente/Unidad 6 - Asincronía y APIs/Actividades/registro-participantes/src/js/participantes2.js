export const participantes2 =
    [
        { id: 1, nombre: "Bruno", email: "b@b.es", comprobado: true },
        { id: 2, nombre: "Javi", email: "j@j.es", comprobado: true },
        { id: 3, nombre: "Ángel", email: "a@a.es", comprobado: false },
        { id: 4, nombre: "María Jesús", email: "mj@mj.es", comprobado: true },
        { id: 5, nombre: "Paula", email: "p@p.es", comprobado: false },
    ];

export const comprobarParticipante = id => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == null) {
                reject(new Error("Falta el identificador del participante"));
                return;
            }

            resolve(id);
        }, 1500)
    })
}
