import React from 'react'

export const Participante = ({ participante, eliminarParticipante, cambiarComprobado }) => {
    return (
        <li>
            {participante.nombre} - {participante.email}{' '}
            <strong>{participante.comprobado ? 'Confirmado' : 'Pendiente'}</strong>
            {cambiarComprobado &&
                <button onClick={() => cambiarComprobado(participante.id)}>
                    {participante.comprobado ? "Pasar a Pendiente" : "Pasar a Confirmado"}
                </button>}
            {eliminarParticipante && (
                <button onClick={() => eliminarParticipante(participante.id)}>
                    Eliminar
                </button>
            )}
        </li>
    )
}
