import React from 'react'

export const Actividad = ({ nombre, categoria, plazas, abierta }) => {
    return (
        <>
            <li>{nombre} - {categoria}. Número de plazas disponibles: {plazas}. <strong>Inscripción {abierta ? 'Abierta' : 'Cerrada'}</strong></li>
        </>
    )
}
