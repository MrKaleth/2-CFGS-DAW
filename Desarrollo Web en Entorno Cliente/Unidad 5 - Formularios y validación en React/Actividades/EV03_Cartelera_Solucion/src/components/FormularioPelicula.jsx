import { useState } from "react";

const FormularioPelicula = ({anadirPelicula}) => {

  const [pelicula, setPelicula] = useState({
    titulo: "",
    genero: "",
    duracion: "",
  });
  const [error, setError] = useState(null);

  const nuevaPelicula = event => {
    const {id, value} = event.target;
    setPelicula(
      actual => ({
        ...actual,
        [id]: value,
      })
    )
  }

const enviarPelicula = (event) => {
  event.preventDefault();
  const mensaje = anadirPelicula(pelicula);
  setError(mensaje);
  if(!mensaje) {
    setPelicula({
      titulo: "",
    genero: "",
    duracion: "",
    })
  }
  
}

  return (
    <>
      <section>
        <h2>Incorporar una película</h2>
          <label htmlFor="titulo">Título</label>
          <input id="titulo" name="titulo" type="text" onChange={nuevaPelicula} value={pelicula.titulo} />

          <label htmlFor="genero">Género</label>
          <input id="genero" name="genero" type="text" onChange={nuevaPelicula} value={pelicula.genero} />

          <label htmlFor="duracion">Duración (minutos)</label>
          <input id="duracion" name="duracion" type="number" onChange={nuevaPelicula} value={pelicula.duracion}/>
          {error && <p>{error}</p>}
          <button type="button" onClick={enviarPelicula}>Añadir película</button>
      </section>
    </>
  );
};

export default FormularioPelicula;
