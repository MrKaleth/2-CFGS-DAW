const FilaPedido = ({ pedido, onCambiarEstado, onEliminar }) => {
  const { id, referencia, pieza, material, unidades, gramosPorUnidad, fabricado } = pedido;

  return (
    <li>
      <b>{referencia}.</b> {pieza} | {material} | {unidades} uds. | {gramosPorUnidad}g por ud.
      <b>{fabricado ? " Fabricado." : " Pendiente."}</b>{" "}
      {onCambiarEstado && (
        <button type="button" onClick={() => onCambiarEstado(id)}>
          {fabricado ? "Reabrir" : "Marcar como fabricado"}
        </button>
      )}{" "}
      {onEliminar && (
        <button type="button" onClick={() => onEliminar(id)}>
          Eliminar
        </button>
      )}
    </li>
  );
};

export default FilaPedido;