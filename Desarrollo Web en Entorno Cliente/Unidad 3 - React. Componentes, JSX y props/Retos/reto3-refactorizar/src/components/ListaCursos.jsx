import React from 'react'
import { Cursos } from './Cursos'

export const ListaCursos = ({ cursos, titulo }) => {
    return (
        <>
            <h2>{titulo} <span>({cursos.length})</span></h2>
            <ul>
                {cursos.map(curso => (
                    <Cursos
                        key={curso.id}
                        nombre={curso.nombre}
                        horas={curso.horas}
                        activo={curso.activo}
                    />
                ))}
            </ul>
        </>
    )
}
