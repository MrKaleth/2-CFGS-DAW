import React from 'react'

export const FilaPeliculas = ({ pelicula, onCambiarEstado, onEliminar }) => {

    const { id, titulo, genero, duracion, confirmada } = pelicula
    return (
        <>
            <li>
                <b>{titulo}</b>. {genero} | {duracion} minutos.
                <b>{confirmada ? " Confirmada." : " Pendiente."}</b>{" "}
                {onCambiarEstado && (
                    <button type="button" onClick={() => onCambiarEstado(id)}>
                        {confirmada ? "Retirar." : "Confirmar."}
                    </button>
                )}{" "}
                {onEliminar && (
                    <button type="button" onClick={() => onEliminar(id)}>
                        Eliminar
                    </button>
                )}
            </li>
        </>
    )
}
