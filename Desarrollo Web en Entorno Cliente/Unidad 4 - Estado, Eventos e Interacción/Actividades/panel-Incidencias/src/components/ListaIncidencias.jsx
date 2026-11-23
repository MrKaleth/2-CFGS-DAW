import FilaIncidencia from "./FilaIncidencia.jsx";

const ListaIncidencias = ({ filas, mensaje, onCambiarEstado, onEliminar }) => {
  return (
    <>
      {filas.length === 0 ? (
        <p>{mensaje}</p>
      ) : (
        <ul>
          {filas.map(fila => (
            <FilaIncidencia
              key={fila.id}
              fila={fila}
              onCambiarEstado={onCambiarEstado}
              onEliminar={onEliminar}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListaIncidencias;