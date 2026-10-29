import React from 'react'
import { Libro } from './Libro'

export const ListaLibros = ({ libros, titulo }) => {
    const tieneLibros = libros.length > 0;
    const hayDisponibles = libros.some(libro => libro.disponible === true);

    return (
        <>
            <h3>{titulo} <span>({libros.length})</span></h3>

            {!tieneLibros ? (<p>No hay libros registrados.</p>)
                : !hayDisponibles ? (<p>No hay libros disponibles para préstamo.</p>) : (
                    <ul>
                        {libros.map(libro => (
                            <Libro
                                key={libro.id}
                                titulo={libro.titulo}
                                genero={libro.genero}
                                disponible={libro.disponible} />
                        ))}
                    </ul>
                )}
        </>
    )
}
