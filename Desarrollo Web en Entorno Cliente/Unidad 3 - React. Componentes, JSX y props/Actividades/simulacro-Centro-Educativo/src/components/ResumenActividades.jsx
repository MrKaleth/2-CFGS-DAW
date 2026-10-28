import React from 'react'

export const ResumenActividades = ({ actividades, actividadesAbiertas, numeroPlazas }) => {
    const haySinPlazas = actividades.some(actividad => actividad.plazas === 0);
    const hayCerradas = actividades.some(actividad => actividad.abierta === 0);
    return (
        <>
            <h3>Resumen de las Actividades</h3>
            {
                (actividades.length === 0) ? <p>No hay Actividades</p> :
                    <div>
                        <ul>
                            <li>Total de Actividades: <b>{actividades.length}</b></li>
                            <li>Número de Inscripciones Abiertas: <b>{actividadesAbiertas.length}</b></li>
                            <li>Número de Inscripciones Cerradas: <b>{actividades.length - actividadesAbiertas.length}</b></li>
                            <li>Total de Plazas Disponibles: <b>{numeroPlazas}</b></li>
                        </ul>
                        <p>{haySinPlazas ? "Hay actividades sin plazas disponibles." : "Todas las actividades tienen plazas disponibles."}</p>
                        <p>{hayCerradas ? "Todas las actividades tienen la inscripción abierta." : "No todas las actividades tienen la inscripción abierta."}</p>
                    </div>
            }
        </>
    )
}
