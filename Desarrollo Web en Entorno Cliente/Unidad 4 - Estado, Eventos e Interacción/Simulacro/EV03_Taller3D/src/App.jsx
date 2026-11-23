import FormularioPedido from "./components/FormularioPedido.jsx";
import ControlesConsulta from "./components/ControlesConsulta.jsx";
import ListaPedidos from "./components/ListaPedidos.jsx";
import { pedidosIniciales } from "./data/pedidos.js";
import { useState } from "react";

const normalizar = (texto) => texto.trim().toLowerCase();

const App = () => {
  const [pedidos, setPedidos] = useState(pedidosIniciales);

  const registrarPedido = (nuevoPedido) => {
    let error = "";

    const referencia = nuevoPedido.referencia.trim();
    const pieza = nuevoPedido.pieza.trim();
    const unidades = Number(nuevoPedido.unidades);
    const gramosPorUnidad = Number(nuevoPedido.gramosPorUnidad);

    const existe = pedidos.some(
      (p) => normalizar(p.referencia) === normalizar(referencia)
    );

    if (!referencia || !pieza) {
      error = "La referencia y la pieza son obligatorias.";
    } else if (
      !Number.isInteger(unidades) ||
      unidades <= 0 ||
      !Number.isInteger(gramosPorUnidad) ||
      gramosPorUnidad <= 0
    ) {
      error = "Las unidades y los gramos deben ser enteros positivos.";
    } else if (existe) {
      error = "Ya existe un pedido con esa referencia.";
    }

    if (!error) {
      const nuevoId =
        pedidos.length === 0 ? 1 : Math.max(...pedidos.map((p) => p.id)) + 1;

      const pedidoCompleto = {
        ...nuevoPedido,
        id: nuevoId,
        referencia,
        pieza,
        unidades,
        gramosPorUnidad,
        fabricado: false,
      };

      setPedidos([...pedidos, pedidoCompleto]);
    }

    return error;
  };

  const cambiarEstadoPedido = (id) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, fabricado: !pedido.fabricado } : pedido
      )
    );
  };

  const eliminarPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <>
      <h1>Taller de impresión 3D</h1>
      <FormularioPedido onRegistrar={registrarPedido} />
      <ControlesConsulta />
      <ListaPedidos
        pedidos={pedidos}
        mensaje="No hay pedidos registrados."
        onCambiarEstado={cambiarEstadoPedido}
        onEliminar={eliminarPedido}
      />
    </>
  );
};

export default App;