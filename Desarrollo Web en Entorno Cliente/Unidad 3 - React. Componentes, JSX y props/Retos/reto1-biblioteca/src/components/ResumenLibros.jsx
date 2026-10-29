import React from 'react'

export const ResumenLibros = ({ libros, librosDisponibles }) => {
    return (
        <>
            <h3>Resumen</h3>

            {
                (libros.length == 0) ? <p>No hay libros en la biblioteca.</p> :
                    <div>
                        <ul>
                            <li>Número total de libros: <b>{libros.length}</b></li>
                            <li>Número de libros disponibles: <b>{librosDisponibles.length}</b></li>
                        </ul>
                    </div>
            }
        </>
    )
}
