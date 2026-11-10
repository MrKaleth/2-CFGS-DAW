const FiltrosParticipante = ({ busqueda, setBusqueda, filtroEstado, setFiltroEstado, filtroOrden, setFiltroOrden, resetFiltros }) => {
    return (
        <>
            <div>
                <label>Buscar: </label>
                <input type="text" placeholder="Nombre o email..."
                    value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

                <label >Estado: </label>
                <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="comprobados">Comprobados</option>
                    <option value="pendientes">Pendientes</option>
                </select>

                <label >Ordenar por: </label>
                <select value={filtroOrden} onChange={(e) => setFiltroOrden(e.target.value)}>
                    <option value="registro">Orden de registro</option>
                    <option value="az">Nombre A–Z</option>
                    <option value="za">Nombre Z–A</option>
                </select>

                <button onClick={resetFiltros} >
                    Restablecer filtros
                </button>
            </div>
        </>
    );
}

export default FiltrosParticipante;