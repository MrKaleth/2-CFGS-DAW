import FilaPedido from "./FilaPedido.jsx";

const ListaPedidos = ({ pedidos, mensaje, onCambiarEstado, onEliminar }) => {
  const totalPedidos = pedidos.length;
  const pedidosPendientes = pedidos.filter((p) => !p.fabricado).length;

  return (
    <>
      <p>Total de pedidos registrados: {totalPedidos}</p>
      <p>Pedidos pendientes: {pedidosPendientes}</p>

      {pedidos.length === 0 ? (
        <p>{mensaje}</p>
      ) : (
        <ul>
          {pedidos.map((pedido) => (
            <FilaPedido
              key={pedido.id}
              pedido={pedido}
              onCambiarEstado={onCambiarEstado}
              onEliminar={onEliminar}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListaPedidos;