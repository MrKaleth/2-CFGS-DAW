import React from 'react'

export const Participante = ({ nombre, email, comprobado }) => {
    return (
        <>
            <li>{nombre} {email}. <strong>{comprobado ? 'Confirmado' : 'Pendiente'}</strong></li>
        </>
    )
}
