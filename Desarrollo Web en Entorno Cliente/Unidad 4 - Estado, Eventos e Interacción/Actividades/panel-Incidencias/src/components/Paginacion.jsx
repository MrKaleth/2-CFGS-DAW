const Paginacion = ({ pagina, total, onCambiar }) => {
  return (
    <>
      <button type="button" disabled={total === 0 || pagina <= 1}
        onClick={() => onCambiar(pagina - 1)}>
        Anterior
      </button>
      {total > 0 && <span> Página {pagina} de {total} </span>}
      <button type="button" disabled={pagina >= total}
        onClick={() => onCambiar(pagina + 1)}>
        Siguiente
      </button>
    </>
  );
};

export default Paginacion;