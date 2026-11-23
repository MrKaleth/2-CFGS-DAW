const FilaIncidencia = ({ fila, onCambiarEstado, onEliminar }) => {
  const { id, codigo, titulo, prioridad, estado } = fila;

  // La acción identifica la incidencia por ID, aunque cambie de posición.
  return (
    <>
      <li>
        <strong>{codigo}</strong> · {titulo} · {prioridad} · {estado}
        {onCambiarEstado && (
          <button type="button" onClick={() => onCambiarEstado(id)}>
            {estado === "pendiente" ? "Resolver" : "Reabrir"}
          </button>
        )}
        {onEliminar && (
          <button type="button" onClick={() => onEliminar(id)}>Eliminar</button>
        )}
      </li>
    </>
  );
};

export default FilaIncidencia;