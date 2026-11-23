import FilaPedido from "./FilaPedido.jsx";

const ListaPedidos = ({ pedidos, totalPedidos, pedidosPendientes, mensaje, onCambiarEstado, onEliminar, }) => {
  return (
    <>
      <h2>Lista de Pedidos</h2>
      <p>Total de pedidos registrados: {totalPedidos}</p>
      <p>Pedidos pendientes: {pedidosPendientes}</p>

      {pedidos.length === 0 ? (<p>{mensaje}</p>) : (
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