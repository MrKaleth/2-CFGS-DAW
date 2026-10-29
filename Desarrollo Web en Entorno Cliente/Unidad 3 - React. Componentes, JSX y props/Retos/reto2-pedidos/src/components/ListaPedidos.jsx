import React from 'react'
import { Pedido } from './Pedido'

export const ListaPedidos = ({ pedidos, titulo }) => {
    return (
        <>
            <h3>{titulo} <span>({pedidos.length})</span></h3>

            {(pedidos.length === 0) ? (<p>No hay pedidos registrados.</p>) : (
                <ul>
                    {pedidos.map(pedido => (
                        <Pedido
                            key={pedido.id}
                            id={pedido.id}
                            cliente={pedido.cliente}
                            importe={pedido.importe}
                            estado={pedido.estado}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}
