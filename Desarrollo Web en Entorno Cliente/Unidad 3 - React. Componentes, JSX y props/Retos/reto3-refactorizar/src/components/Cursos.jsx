import React from 'react'

export const Cursos = ({ nombre, horas, activo }) => {
    return (
        <>
            <li>{nombre} - {horas}. <b>{activo ? 'Activo.' : 'No Activo.'}</b></li>
        </>
    )
}
