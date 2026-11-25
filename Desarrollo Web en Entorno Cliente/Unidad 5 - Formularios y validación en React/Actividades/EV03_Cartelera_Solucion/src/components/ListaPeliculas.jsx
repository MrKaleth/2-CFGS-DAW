import Peliculas from "./Peliculas";

const ListaPeliculas = ({ titulo, listadoPeliculas, confirmar, eliminar }) => {
  const duracion = listadoPeliculas.reduce(
    (acumulador,actual) => acumulador+=actual.duracion,0);


  return (
    <>
      <section>
        <h2>{titulo}</h2>
        {/* Aquí se mostrarán las películas de esta lista. */}
        {listadoPeliculas.length === 0 ? (
          <p>{titulo === "Cortos pendientes" ? "No hay cortos pendientes" : "No hay peliculas"}</p>

        ) : (
          <>
            <ul>
              {listadoPeliculas.map(
                pelicula => <Peliculas key={pelicula.id} pelicula={pelicula} confirmar={confirmar} eliminar={eliminar} />
              )}

            </ul>
            
          </>
        )}
        {titulo==="Cortos pendientes"?<p>La duración es: {duracion} minutos</p>:"" }
      </section>
    </>
  );
};

export default ListaPeliculas;
