import React from 'react'

export const Incidencia = ({ incidencia, eliminarIncidencia, cambiarEstado }) => {
    return (
        <>
            <li>
                <b>{incidencia.codigo}.</b> {incidencia.titulo} | Prioridad {incidencia.prioridad}.
                <b>{incidencia.estado === "resuelta" ? " Resuelta" : " Pendiente"}</b>

                <button onClick={() => cambiarEstado(incidencia.id)} style={{ marginLeft: "10px" }}>
                    {incidencia.estado === "pendiente" ? "Resolver" : "Reabrir"}
                </button>

                <button onClick={() => eliminarIncidencia(incidencia.id)} style={{ marginLeft: "5px" }}>
                    Eliminar
                </button>
            </li>
        </>
    )
}