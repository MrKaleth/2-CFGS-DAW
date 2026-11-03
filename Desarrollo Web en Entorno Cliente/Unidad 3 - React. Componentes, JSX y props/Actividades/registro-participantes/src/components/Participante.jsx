import React from 'react'

export const Participante = ({ participante, eliminarParticipante, eliminar }) => {
    return (
        <>
            <li>{participante.nombre} {participante.email}. <strong>{participante.comprobado ? 'Confirmado' : 'Pendiente'}</strong></li>

            {eliminar ? <button onClick={() => eliminarParticipante(participante.id)}>Eliminar</button> : ""}

        </>
    )
}
