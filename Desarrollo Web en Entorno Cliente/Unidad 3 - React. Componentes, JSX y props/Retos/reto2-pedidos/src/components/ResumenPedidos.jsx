import React from 'react'

export const ResumenPedidos = ({ pedidos, pedidosEntregados }) => {
    const importeTotalEntregados = pedidosEntregados.reduce((acumulador, pedido) => acumulador + pedido.importe, 0);
    const importeTotalFormateado = importeTotalEntregados.toFixed(2);
    const importeMedioEntregados = pedidosEntregados.length > 0 ? (importeTotalEntregados / pedidosEntregados.length).toFixed(2) : "0.00";

    return (
        <>
            <h3>Resumen.</h3>
            {
                (pedidos.length === 0) ?
                    <p>No hay pedidos registrados.</p> :
                    <div>
                        <ul>
                            <li>Número total de pedidos: <b>{pedidos.length}.</b></li>
                            <li>Importe total de los pedidos entregados: <b>{importeTotalFormateado}€</b></li>
                            <li>Importe medio de los pedidos entregados: <b>{importeMedioEntregados}€</b></li>
                        </ul>
                    </div>
            }
        </>
    )
}
