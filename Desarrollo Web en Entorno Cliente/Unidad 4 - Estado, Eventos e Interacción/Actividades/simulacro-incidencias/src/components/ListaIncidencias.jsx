import React from 'react'
import { Incidencia } from './Incidencia'

export const ListaIncidencias = ({ incidencias, titulo, eliminarIncidencia, cambiarEstado }) => {
    return (
        <>
            <h3>{titulo}. <span>({incidencias.length})</span></h3>

            {(incidencias.length === 0) ? <p>No hay Incidencias</p> :
                <ul>
                    {incidencias.map(
                        i =>
                            <Incidencia key={i.id} incidencia={i}
                                eliminarIncidencia={eliminarIncidencia} cambiarEstado={cambiarEstado}
                            />
                    )}
                </ul>
            }
        </>
    )
}
