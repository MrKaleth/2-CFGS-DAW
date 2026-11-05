const FormularioRegistro = ({ anadirParticipante }) => {

  const nuevoParticipante = () => {
    const inputNombre = document.querySelector("#nombre");
    const inputEmail = document.querySelector("#email");

    const altaAceptada = anadirParticipante({
      nombre: inputNombre.value,
      email: inputEmail.value,
      comprobado: false,
    });

    if (altaAceptada) {
      inputNombre.value = "";
      inputEmail.value = "";
      inputNombre.focus();
    }
  }
  return (
    <>
      <label>Nombre:</label>
      <input type="text" id="nombre" />
      <label>Email:</label>
      <input type="email" id="email" />
      <button onClick={nuevoParticipante} >Registrar</button>
    </>
  )
}

export default FormularioRegistro;