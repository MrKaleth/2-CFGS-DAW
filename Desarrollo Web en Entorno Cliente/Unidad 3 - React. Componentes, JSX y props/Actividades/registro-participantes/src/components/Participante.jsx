import React from 'react'

export const Participante = ({ nombre, email }) => {
    return (
        <>
            <li>{nombre} {email}</li>
        </>
    )
}
