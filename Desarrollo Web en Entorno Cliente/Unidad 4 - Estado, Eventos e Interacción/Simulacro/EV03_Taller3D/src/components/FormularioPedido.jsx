import { useState } from "react";

const DATOS_INICIALES = {
  referencia: "",
  pieza: "",
  material: "PLA",
  unidades: "",
  gramosPorUnidad: ""
};

const FormularioPedido = ({ onRegistrar }) => {
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
      <h2>Registrar Pedido</h2>
      <form onSubmit={enviar}>
        <label>
          Referencia
          <input
            name="referencia"
            value={datos.referencia}
            onChange={manejarCambio}
          />
        </label>

        <label>
          Pieza
          <input
            name="pieza"
            value={datos.pieza}
            onChange={manejarCambio}
          />
        </label>

        <label>
          Material
          <select
            name="material"
            value={datos.material}
            onChange={manejarCambio}
          >
            <option value="PLA">PLA</option>
            <option value="PETG">PETG</option>
          </select>
        </label>

        <label>
          Unidades
          <input
            type="number"
            name="unidades"
            value={datos.unidades}
            onChange={manejarCambio}
          />
        </label>

        <label>
          Gramos por Unidad
          <input
            type="number"
            name="gramosPorUnidad"
            value={datos.gramosPorUnidad}
            onChange={manejarCambio}
          />
        </label>

        <button type="submit">Registrar</button>
      </form>

      {aviso && <p>{aviso}</p>}
    </>
  );
};

export default FormularioPedido;