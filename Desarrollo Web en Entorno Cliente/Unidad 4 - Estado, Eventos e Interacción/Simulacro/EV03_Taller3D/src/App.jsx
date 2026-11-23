import FormularioPedido from "./components/FormularioPedido.jsx";
import ControlesConsulta from "./components/ControlesConsulta.jsx";
import ListaPedidos from "./components/ListaPedidos.jsx";
import PresupuestoMaterial from "./components/PresupuestoMaterial.jsx";
import { pedidosIniciales } from "./data/pedidos.js";
import { useState } from "react";

const CONSULTA_INICIAL = { texto: "", estado: "todos", orden: "registro" };

const normalizar = (texto) => texto.trim().toLowerCase();

const filtrar = (pedidos, consulta) => {
  const texto = normalizar(consulta.texto);

  return pedidos
    .filter(
      ({ referencia, pieza }) =>
        normalizar(referencia).includes(texto) ||
        normalizar(pieza).includes(texto)
    )
    .filter(
      (pedido) =>
        consulta.estado === "todos" ||
        (consulta.estado === "pendiente" && !pedido.fabricado) ||
        (consulta.estado === "fabricado" && pedido.fabricado)
    );
};

const ordenar = (resultados, orden) => {
  if (orden === "registro") return resultados;

  return [...resultados].sort((a, b) =>
    orden === "asc"
      ? a.pieza.localeCompare(b.pieza, "es")
      : b.pieza.localeCompare(a.pieza, "es")
  );
};

const obtenerFilasPresupuesto = (pedidosVisibles, material) =>
  pedidosVisibles
    .filter((pedido) => !pedido.fabricado && pedido.material === material)
    .map(({ referencia, pieza, unidades, gramosPorUnidad }) => ({
      referencia,
      nombre: pieza,
      unidades,
      gramosPorUnidad,
      pesoTotal() {
        return this.unidades * this.gramosPorUnidad;
      },
    }));

const App = () => {
  const [pedidos, setPedidos] = useState(pedidosIniciales);
  const [consulta, setConsulta] = useState(CONSULTA_INICIAL);
  const [material, setMaterial] = useState("PLA");

  const pedidosVisibles = ordenar(filtrar(pedidos, consulta), consulta.orden);
  const totalPedidos = pedidos.length;
  const pedidosPendientes = pedidos.filter((p) => !p.fabricado).length;

  const filasPresupuesto = obtenerFilasPresupuesto(pedidosVisibles, material);
  const totalGramos = filasPresupuesto.reduce(
    (acumulado, fila) => acumulado + fila.pesoTotal(),
    0
  );

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

  const cambiarConsulta = (campo, valor) => {
    setConsulta((actual) => ({
      ...actual,
      [campo]: valor,
    }));
  };

  const restablecerConsulta = () => {
    setConsulta(CONSULTA_INICIAL);
  };

  const cambiarMaterial = (evento) => {
    setMaterial(evento.target.value);
  };

  const mensajeListaVacia =
    totalPedidos === 0 ? "No hay pedidos registrados." : "No hay pedidos que coincidan con la consulta.";

  return (
    <>
      <h1>Taller de impresión 3D</h1>
      <FormularioPedido onRegistrar={registrarPedido} />
      <ControlesConsulta
        consulta={consulta}
        onCambiar={cambiarConsulta}
        onRestablecer={restablecerConsulta}
        mostrados={pedidosVisibles.length}
        total={totalPedidos}
      />
      <ListaPedidos
        pedidos={pedidosVisibles}
        totalPedidos={totalPedidos}
        pedidosPendientes={pedidosPendientes}
        mensaje={mensajeListaVacia}
        onCambiarEstado={cambiarEstadoPedido}
        onEliminar={eliminarPedido}
      />
      <PresupuestoMaterial
        material={material}
        cambiarMaterial={cambiarMaterial}
        pedidos={filasPresupuesto}
        totalGramos={totalGramos}
      />
    </>
  );
};

export default App;