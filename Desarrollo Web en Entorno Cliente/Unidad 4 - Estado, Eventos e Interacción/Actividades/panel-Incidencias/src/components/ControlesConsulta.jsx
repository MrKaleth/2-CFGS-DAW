import Cabecera from "./Cabecera";

const ControlesConsulta = ({ consulta, onCambiar, onRestablecer }) => {
  // App conserva los valores. Los controles comunican cada cambio.
  return (
    <>
    <Cabecera etiqueta="h2" titulo="Consultar incidencias" />
      <label>
        Buscar por código o título
        <input
          type="search"
          value={consulta.texto}
          onChange={evento => onCambiar("texto", evento.target.value)}
        />
      </label>
      <label>
        Estado de la consulta
        <select value={consulta.estado}
          onChange={evento => onCambiar("estado", evento.target.value)}>
          <option value="todas">Todas</option>
          <option value="pendiente">Pendientes</option>
          <option value="resuelta">Resueltas</option>
        </select>
      </label>
      <label>
        Orden
        <select value={consulta.orden}
          onChange={evento => onCambiar("orden", evento.target.value)}>
          <option value="registro">Orden de registro</option>
          <option value="asc">Título A–Z</option>
          <option value="desc">Título Z–A</option>
        </select>
      </label>
      <button type="button" onClick={onRestablecer}>Restablecer</button>
    </>
  );
};

export default ControlesConsulta;