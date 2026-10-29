import React from 'react'

export const Libro = ({ titulo, genero, disponible }) => {
    return (
        <>
            <li>{titulo} - {genero}. <strong>{disponible ? 'Disponible.' : 'Prestado.'}</strong></li>
        </>
    )
}
