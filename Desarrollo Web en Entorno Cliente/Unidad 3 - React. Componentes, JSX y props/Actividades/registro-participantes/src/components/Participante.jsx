import React from 'react'

export const Participante = ({ participante, eliminarParticipante }) => {
    return (
        <>
            <li>{participante.nombre} {participante.email}. <strong>{participante.comprobado ? 'Confirmado' : 'Pendiente'}</strong></li>
            <button onClick={() => eliminarParticipante(participante.id)}>Eliminar</button>
        </>
    )
}
