import { useState } from "react";
import Cabecera from "./Cabecera";

const DATOS_INICIALES = { codigo: "", titulo: "", prioridad: "media" };

const FormularioIncidencia = ({ onRegistrar }) => {
  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [aviso, setAviso] = useState("");

  const cambiarCampo = evento => {
    const { name, value } = evento.target;
    setDatos(actual => ({ ...actual, [name]: value }));
  };

  const enviar = evento => {
    evento.preventDefault();
    const error = onRegistrar(datos);
    setAviso(error);

    // El formulario se limpia solo después de un alta aceptada.
    if (error === "") setDatos(DATOS_INICIALES);
  };

  return (
    <>
    <Cabecera etiqueta="h2" titulo="Nueva incidencia" />

      <form onSubmit={enviar}>
        <label>
          Código
          <input name="codigo" value={datos.codigo} onChange={cambiarCampo} />
        </label>
        <label>
          Título
          <input name="titulo" value={datos.titulo} onChange={cambiarCampo} />
        </label>
        <label>
          Prioridad
          <select name="prioridad" value={datos.prioridad} onChange={cambiarCampo}>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </label>
        <button type="submit">Registrar</button>
      </form>
      {aviso && <p role="alert">{aviso}</p>}
    </>
  );
};

export default FormularioIncidencia;