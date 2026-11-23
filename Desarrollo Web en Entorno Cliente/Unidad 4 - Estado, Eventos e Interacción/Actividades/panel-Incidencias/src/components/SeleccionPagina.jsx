import Cabecera from "./Cabecera.jsx";
import ListaIncidencias from "./ListaIncidencias.jsx";

const OPCIONES = {
  estado: [["pendiente", "Pendiente"], ["resuelta", "Resuelta"]],
  prioridad: [["alta", "Alta"], ["media", "Media"], ["baja", "Baja"]],
};

const SeleccionPagina = ({ seleccion, filas, onCriterio, onValor }) => {
  const opciones = OPCIONES[seleccion.criterio];

  return (
    <>
    <Cabecera etiqueta="h2" titulo="Selección de la página actual" />
      <label>
        Criterio
        <select value={seleccion.criterio}
          onChange={evento => onCriterio(evento.target.value)}>
          <option value="estado">Estado</option>
          <option value="prioridad">Prioridad</option>
        </select>
      </label>
      <label>
        Valor
        <select value={seleccion.valor}
          onChange={evento => onValor(evento.target.value)}>
            /* Desectructuramos el array por cada opcion */
          {opciones.map(([valor, etiqueta]) => (
            <option key={valor} value={valor}>{etiqueta}</option>
          ))}
        </select>
      </label>

      {/* Reutilizamos la lista como vista de solo lectura. */}
      <ListaIncidencias
        filas={filas}
        mensaje="No hay incidencias que cumplan el criterio en esta página"
      />
    </>
  );
};

export default SeleccionPagina;