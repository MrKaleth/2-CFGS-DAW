const ControlesProgramacion = ({buscar, ordenar}) => {
  return (
    <>
      <section>
        <h2>Consultar programación</h2>
        <label htmlFor="busqueda">Buscar por título o género</label>
        <input id="busqueda" name="busqueda" type="search" onChange={(event)=>buscar(event.target.value)} />

        <label htmlFor="orden">Orden</label>
        <select id="orden" name="orden" onChange={(event)=> ordenar(event.target.value)}>
          <option value="registro">Orden de registro</option>
          <option value="duracion">Menor a mayor duración</option>
        </select>
      </section>
    </>
  );
};

export default ControlesProgramacion;
