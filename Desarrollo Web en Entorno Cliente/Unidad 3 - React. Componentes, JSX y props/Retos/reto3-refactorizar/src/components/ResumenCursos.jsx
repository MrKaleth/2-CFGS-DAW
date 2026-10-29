import React from 'react'

export const ResumenCursos = ({ totalCursos, totalActivos }) => {
    return (
        <>
            <h2>Resumen.</h2>
            <p>Total de cursos: {totalCursos}</p>
            <p>Cursos activos: {totalActivos}</p>
        </>
    )
}
