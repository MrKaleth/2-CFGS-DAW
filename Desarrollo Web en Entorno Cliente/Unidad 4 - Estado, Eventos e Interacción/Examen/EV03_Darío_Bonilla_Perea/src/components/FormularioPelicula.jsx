import { useState } from "react";

const DATOS_INICIALES = {
  titulo: "",
  genero: "",
  duracion: "",
};

const FormularioPelicula = ({ onRegistrar }) => {

  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [aviso, setAviso] = useState("");

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const enviar = (evento) => {
    evento.preventDefault();
    const error = onRegistrar(datos);
    setAviso(error);

    if (error === "") {
      setDatos(DATOS_INICIALES);
    }
  };

  return (
    <>
      <form onSubmit={enviar}>
        <h2>Incorporar una película</h2>
        <label htmlFor="titulo">Título</label>
        <input id="titulo" name="titulo" type="text" value={datos.titulo} onChange={manejarCambio} />

        <label htmlFor="genero">Género</label>
        <input id="genero" name="genero" type="text" value={datos.genero} onChange={manejarCambio} />

        <label htmlFor="duracion">Duración (minutos)</label>
        <input id="duracion" name="duracion" type="number" value={datos.duracion} onChange={manejarCambio} />

        <button type="submit">Añadir película</button>
      </form>
      {aviso && <p>{aviso}</p>}
    </>
  );
};

export default FormularioPelicula;