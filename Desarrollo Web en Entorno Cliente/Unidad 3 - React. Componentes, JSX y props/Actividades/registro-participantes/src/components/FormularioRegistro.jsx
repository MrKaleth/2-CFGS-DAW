import React from 'react'

export const FormularioRegistro = () => {
    return (
        <>
            <form id="registro" noValidate>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" required />

                <button type="submit">Registrar</button>
            </form>
        </>
    )
}
