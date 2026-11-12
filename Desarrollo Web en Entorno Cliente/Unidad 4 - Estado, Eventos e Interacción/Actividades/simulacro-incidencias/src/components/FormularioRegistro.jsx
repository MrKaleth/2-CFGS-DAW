import React, { useState } from 'react'

export const FormularioRegistro = ({ anadirIncidencia }) => {
    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [prioridad, setPrioridad] = useState("alta");

    const registrar = () => {
        if (codigo.trim() === "" || titulo.trim() === "") return;

        const exito = anadirIncidencia({ codigo, titulo, prioridad });

        if (exito) {
            setCodigo("");
            setTitulo("");
            setPrioridad("alta");
        }
    }

    return (
        <>
            <label>Código:</label>
            <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

            <label>Título:</label>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

            <label>Prioridad de la Incidencia:</label>

            <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
            </select>

            <button onClick={registrar}>Registrar Incidencia</button>
        </>
    )
}
