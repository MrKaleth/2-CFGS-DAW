import { FilaPeliculas } from "./FilaPeliculas.jsx";

const ListaPeliculas = ({ titulo, peliculas, onCambiarEstado, onEliminar }) => {

  return (
    <>
      <section>
        <h2>{titulo}</h2>
        {/* Aquí se mostrarán las películas de esta lista. */}
        <ul>
          {peliculas.map((pelicula) => (
            <FilaPeliculas
              key={pelicula.id}
              pelicula={pelicula}
              onCambiarEstado={onCambiarEstado}
              onEliminar={onEliminar}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ListaPeliculas;
