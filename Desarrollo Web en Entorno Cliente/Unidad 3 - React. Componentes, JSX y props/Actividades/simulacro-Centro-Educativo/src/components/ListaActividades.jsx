import React from 'react'
import { Actividad } from './Actividad'

export const ListaActividades = ({ actividades, titulo}) => {
    return (
        <>
            <h3>{titulo} <span>({actividades.length})</span></h3>
            {
                (actividades.length === 0) ? <p>No hay Actividades</p> :
                    <ul>
                        {actividades.map(
                            actividad => <Actividad key={actividad.id} nombre={actividad.nombre}
                                categoria={actividad.categoria} plazas={actividad.plazas}
                                abierta={actividad.abierta} />)}
                    </ul>
            }
        </>
    )
}
