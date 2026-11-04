import React from 'react'

export const Corto = ({ titulo, director, genero, duracion, puntuacion, inscrito }) => {
    return (
        <>
            <li><b>{titulo}</b>. {director} - {genero}.
                Duración: {duracion} minutos, nota <b>{puntuacion}. {inscrito ? "Inscrito." : "No Inscrito."}</b></li>
        </>
    )
}


