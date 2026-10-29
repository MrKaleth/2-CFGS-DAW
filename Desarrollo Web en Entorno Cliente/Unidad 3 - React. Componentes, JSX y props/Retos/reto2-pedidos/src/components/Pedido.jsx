import React from 'react'

export const Pedido = ({ id, cliente, importe, estado }) => {
    return (
        <>
            <li><b>ID: {id}</b>. {cliente} - {importe}€. <b>{estado}</b></li>
        </>
    )
}
