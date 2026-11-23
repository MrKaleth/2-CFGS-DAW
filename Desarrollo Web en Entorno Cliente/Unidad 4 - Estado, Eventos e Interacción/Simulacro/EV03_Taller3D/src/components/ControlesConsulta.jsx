const ControlesConsulta = ({ consulta, onCambiar, onRestablecer, mostrados, total }) => {
  return (
    <>
      <h2>Consultar pedidos</h2>

      <label>
        Buscar por Referencia o Nombre de la Pieza
        <input type="search" value={consulta.texto} onChange={evento => onCambiar("texto", evento.target.value)} />
      </label>

      <label>
        Estado de la consulta
        <select value={consulta.estado}
          onChange={evento => onCambiar("estado", evento.target.value)}>
          <option value="todos">Todos</option>
          <option value="pendiente">Pendientes</option>
          <option value="fabricado">Fabricados</option>
        </select>
      </label>

      <label>
        Orden
        <select value={consulta.orden}
          onChange={evento => onCambiar("orden", evento.target.value)}>
          <option value="registro">Orden de registro</option>
          <option value="asc">Pieza A–Z</option>
          <option value="desc">Pieza Z–A</option>
        </select>
      </label>
      <button type="button" onClick={onRestablecer}>Restablecer</button>

      <p>
        Mostrando {mostrados} de {total} pedidos
      </p>
    </>
  );
};

export default ControlesConsulta;
