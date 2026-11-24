const ControlesProgramacion = ({ consulta, onCambiar }) => {
  return (
    <>
      <section>
        <h2>Consultar programación</h2>
        <label htmlFor="busqueda">Buscar por título o género</label>
        <input type="search" value={consulta.texto} onChange={evento => onCambiar("texto", evento.target.value)} />

        <label htmlFor="orden">Orden</label>
        <select value={consulta.orden} onChange={evento => onCambiar("orden", evento.target.value)}>
          <option value="registro">Orden de registro</option>
          <option value="duracion">Menor a mayor duración</option>
        </select>
      </section>
    </>
  );
};

export default ControlesProgramacion;