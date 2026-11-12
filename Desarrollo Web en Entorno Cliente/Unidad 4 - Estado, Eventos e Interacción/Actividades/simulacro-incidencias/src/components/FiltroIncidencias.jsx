import React from 'react'

export const FiltroIncidencias = ({ busqueda, setBusqueda, filtroEstado, setFiltroEstado, filtroOrden, setFiltroOrden, resetFiltros }) => {
    return (
        <>
            <h2>Incidencias</h2>
            <div>
                <label>Buscar: </label>
                <input type="text" placeholder='Código o Título...'
                    value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

                <label>Estado: </label>
                <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="pendientes">Pendientes</option>
                    <option value="resueltas">Resueltas</option>
                </select>

                <label>Ordenar por: </label>
                <select value={filtroOrden} onChange={(e) => setFiltroOrden(e.target.value)}>
                    <option value="registro">Orden de registro</option>
                    <option value="az">Título A–Z</option>
                    <option value="za">Título Z–A</option>
                </select>

                <button onClick={resetFiltros}>Restablecer filtros</button>
            </div>
        </>
    )
}