import React from 'react'

export const Indicadores = ({ pedidos }) => {

    const tieneCancelados = pedidos.some(pedido => pedido.estado === 'cancelado');
    const todosEntregados = pedidos.length > 0 && pedidos.every(pedido => pedido.estado === 'entregado');

    return (
        <>
            <h3>Indicadores de Estado</h3>
            <ul>
                <li>
                    Pedidos cancelados: {tieneCancelados ? <b>Hay pedidos cancelados.</b> : <b>No hay pedidos cancelados.</b>}
                </li>
                <li>
                    Estado de la entrega: {todosEntregados ? <b>Todos los pedidos han sido entregados.</b> : <b>Quedan pedidos pendientes de entrega.</b>}
                </li>
            </ul>
        </>
    )
}

