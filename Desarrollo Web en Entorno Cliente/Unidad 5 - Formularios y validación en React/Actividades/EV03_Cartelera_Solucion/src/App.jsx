import FormularioPelicula from "./components/FormularioPelicula.jsx";
import ControlesProgramacion from "./components/ControlesProgramacion.jsx";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import { useState } from "react";
import { peliculasIniciales } from "./data/peliculas.js";
import ResumenTotal from "./components/ResumenTotal.jsx";

const App = () => {
  //Definimos los estados necesarios
  //Estado del listado de la programación EJ1
  const [listadoPeliculas, setListadoPeliculas] = useState(peliculasIniciales);

  const [testoBuscar, setTextoBuscar] = useState("");
  const [orden, setOrden] = useState("registro");
  // Programación muestra todas las películas registradas. 
  // Cada fila indica su título, género, duración en minutos y estado: Confirmada o Pendiente.
  const programacion = listadoPeliculas.filter(
    pelicula => pelicula.titulo.toLowerCase().includes(testoBuscar.toLowerCase()) || pelicula.genero.toLowerCase().includes(testoBuscar.toLowerCase())
  )

  // Cartelera muestra únicamente las películas confirmadas,
  //  con su título y duración.
  const cartelera = listadoPeliculas.filter(
    p => p.confirmada
  )

  //    1. Aparecen en los resultados actuales de Programación.
  //    2. Duran 20 minutos o menos.
  //    3. Están pendientes.
  const cortos = programacion.filter(
    pelicula => pelicula.duracion <= 20 && pelicula.confirmada === false
  )

  if (orden === "registro") {
    programacion.sort(
      (a, b) => a.id - b.id
    )
    console.log(programacion);

  } else {
    programacion.sort(
      (a, b) => a.duracion - b.duracion
    )
    console.log(programacion);
  }


  const anadirPelicula = (pelicula) => {


    const { titulo, genero, duracion } = pelicula;

    const minutos = Number(duracion);

    if (titulo.trim() === "") return "Error. Titulo Vacio";
    if (genero.trim() === "") return "Error. Genero Vacio";
    if (buscarTitulo(titulo.trim())) return "Error. Titulo ya existe";


    if (!Number.isInteger(minutos) || minutos <= 0) return "Error. La duración debe ser un número entero mayor que cero."

      setListadoPeliculas(
        (actuales) => [
          ...actuales,
          {
            id: calcularId(),
            titulo: titulo.trim(),
            genero: genero.trim(),
            duracion: minutos,
            confirmada: false,
          }
        ]

      )

      return "";

    }

    const calcularId = () => {
      return listadoPeliculas.reduce((max, pelicula) => Math.max(pelicula.id, max), 0) + 1;
    }

    const buscarTitulo = buscarPelicula =>
      listadoPeliculas.find(
        pelicula => pelicula.titulo.trim().toLowerCase() === buscarPelicula.toLowerCase()
      )


    const confirmar = id => {
      setListadoPeliculas(
        (actuales) =>
          actuales.map(
            pelicula => {
              if (pelicula.id === id) return {
                ...pelicula,
                confirmada: !pelicula.confirmada
              }
              else return pelicula
            }
          )

      )

    }

    const eliminar = id => {
      setListadoPeliculas(
        listadoPeliculas.filter(
          pelicula => pelicula.id !== id
        )
      )

    }

    const buscar = (busqueda) => {
      setTextoBuscar(busqueda.trim());
    }

    const ordenar = (orden) => {
      setOrden(orden);
    }

    return (
      <>
        <header>
          <h1>Cine de verano</h1>
          <ResumenTotal programacion={listadoPeliculas.length} cartelera={cartelera.length} />
        </header>

        <main>
          {/* Zona del resumen de programación. */}
          <FormularioPelicula anadirPelicula={anadirPelicula} />
          <ControlesProgramacion buscar={buscar} ordenar={ordenar} />

          <div className="listas">
            <ListaPeliculas
              titulo="Programación"
              listadoPeliculas={programacion}
              confirmar={confirmar}
              eliminar={eliminar}
            />
            <ListaPeliculas titulo="Cartelera" listadoPeliculas={cartelera} />
            <ListaPeliculas titulo="Cortos pendientes" listadoPeliculas={cortos} />
          </div>
        </main>
      </>
    );
  };

  export default App;
