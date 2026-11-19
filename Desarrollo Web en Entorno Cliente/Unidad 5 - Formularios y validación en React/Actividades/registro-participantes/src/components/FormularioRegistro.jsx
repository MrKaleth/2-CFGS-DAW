import { useState } from "react"

const FormularioRegistro = ({ anadirParticipante, participanteEnEdicion, actualizarParticipante }) => {

  const enEdicion = Boolean(participanteEnEdicion);

  const [datos, setDatos] = useState({
    nombre: participanteEnEdicion?.nombre ?? "",
    email: participanteEnEdicion?.email ?? "",
  });

  const [error, setError] = useState(null);

  const enviarDatos = (event) => {
    event.preventDefault();

    if (enEdicion) {
      actualizarParticipante(datos);
      return;
    }

    const mensaje = anadirParticipante({
      // id: 10,
      // nombre: document.querySelector("#nombre").value,
      // email: document.querySelector("#email").value,
      ...datos,
      comprobado: false,
    });
    setError(mensaje);
    if (!mensaje) setDatos({
      nombre: "",
      email: "",
    })
  };

  const cambiar = (event) => {
    const { id, value } = event.target;
    setDatos(actuales => ({
      ...actuales,
      [id]: value
    }))
  };

  return (
    <>
      <form onSubmit={enviarDatos}>
        <label>Nombre:</label>
        <input type="text" id="nombre" onChange={cambiar} value={datos.nombre} />
        <label>Email:</label>
        <input type="email" id="email" onChange={cambiar} value={datos.email} />
        <button type="submit">Registrar</button>
        {error && <h3 id="mensaje">{error}</h3>}
      </form>
    </>
  )
}

export default FormularioRegistro;