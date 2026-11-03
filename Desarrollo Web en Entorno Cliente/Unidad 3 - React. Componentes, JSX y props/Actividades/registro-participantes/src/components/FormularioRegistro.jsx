import React, { useState } from 'react'

export const FormularioRegistro = ({ anyadirParticipante, nextId }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !email.trim()) return;

        anyadirParticipante({
            id: nextId,
            nombre: nombre,
            email: email,
            comprobado: false
        });

        setNombre('');
        setEmail('');
    }

    return (
        <form id="registro" onSubmit={manejarEnvio} noValidate>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">Registrar</button>
        </form>
    )
}

