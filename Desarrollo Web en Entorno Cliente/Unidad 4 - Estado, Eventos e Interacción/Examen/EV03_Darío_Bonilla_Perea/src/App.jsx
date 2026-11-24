import FormularioPelicula from "./components/FormularioPelicula.jsx";
import ControlesProgramacion from "./components/ControlesProgramacion.jsx";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import { useState } from "react";
import { peliculasIniciales } from "./data/peliculas.js";

const normalizar = (texto) => texto.trim().toLowerCase();
const CONSULTA_INICIAL = { texto: "", orden: "registro" };

const ordenar = (resultados, orden) => {
  if (orden === "registro") return resultados;
};

const filtrar = (pelis, consulta) => {
  const texto = normalizar(consulta.texto);

  return pelis
    .filter(
      ({ titulo, genero }) =>
        normalizar(titulo).includes(texto) || normalizar(genero).includes(texto)
    )
};

const App = () => {

  const [peliculas, setPeliculas] = useState(peliculasIniciales);
  const [consulta, setConsulta] = useState(CONSULTA_INICIAL);

  const pelisVisibles = ordenar(filtrar(peliculas, consulta), consulta.orden);

  const obtenerPeliculasCartelera = () => {
    const peliculasCartelera = peliculas.filter((pelicula) => pelicula.confirmada)
      .map((pelicula) => ({
        ...pelicula
      }))

    return peliculasCartelera;
  };

  const pelisCartelera = obtenerPeliculasCartelera();

  const registrarPelcula = (nuevaPeli) => {
    let error = "";

    const titulo = nuevaPeli.titulo.trim();
    const genero = nuevaPeli.genero.trim();
    const duracion = Number(nuevaPeli.duracion);

    const existe = peliculas.some((p) => normalizar(p.titulo) === normalizar(titulo))

    if (!titulo) {
      error = "Error. El título es obligatorio."
    } else if (!genero) {
      error = "Error. El género es obligatorio."
    } else if (!Number.isInteger(duracion) || duracion <= 0) {
      error = "Error. La duración debe ser un número entero positivo."
    } else if (existe) {
      error = "Error. Ya existe una película con ese título"
    } else {
      const nuevoId = peliculas.length === 0 ? 1 : Math.max(...peliculas.map((p) => p.id)) + 1;

      const peliculasCompletas = {
        ...nuevaPeli,
        id: nuevoId,
        titulo,
        genero,
        duracion,
        confirmada: false,
      };

      setPeliculas([...peliculas, peliculasCompletas]);
    }

    return error;
  };

  const cambiarEstadoPeli = (id) => {
    setPeliculas(
      peliculas.map((peli) =>
        peli.id === id ? { ...peli, confirmada: !peli.confirmada } : peli
      )
    );
  };

  const eliminarPelicula = (id) => {
    setPeliculas(peliculas.filter((peli) => peli.id !== id));
  };

  const cambiarConsulta = (campo, valor) => {
    setConsulta((actual) => ({
      ...actual,
      [campo]: valor,
    }));
  };

  return (
    <>
      <header>
        <h1>Cine de verano</h1>
      </header>

      <main>
        <div>
          <h2>Resumen de la programación</h2>
          <p>Películas registradas: <b>{peliculas.length}</b></p>
          <p>Películas confirmadas : <b>{pelisCartelera.length}</b></p>
        </div>
        <FormularioPelicula onRegistrar={registrarPelcula} />
        <ControlesProgramacion consulta={consulta} onCambiar={cambiarConsulta} />
        <div className="listas">
          <ListaPeliculas titulo="Programación" peliculas={pelisVisibles} onCambiarEstado={cambiarEstadoPeli} onEliminar={eliminarPelicula} />
          <ListaPeliculas titulo="Cartelera" peliculas={pelisCartelera} />
        </div>
      </main>
    </>
  );
};

export default App;
