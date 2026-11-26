const FiltrosParticipantes = ({ textoBuscado, buscar, filtrar, ordenar, quitarFiltros }) => {
    return (
        <>
            <input id="buscar" type="text" onChange={buscar} placeholder="Buscar" value={textoBuscado} />
            <select name="filtroBusqueda" id="filtroBusqueda" onChange={filtrar}>
                <option value="">Todos</option>
                <option value="true">Comprobados</option>
                <option value="false">Pendientes</option>
            </select>

            <select name="ordenarBusqueda" id="ordenarBusqueda" onChange={ordenar}>
                <option value="">Orden de registro</option>
                <option value="asc">Nombre A-Z</option>
                <option value="desc">Nombre Z-A</option>
            </select>
            <button onClick={quitarFiltros}>Reestablecer Filtros</button>
        </>
    )
}

export default FiltrosParticipantes