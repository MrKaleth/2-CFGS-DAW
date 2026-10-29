import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { ListaPedidos } from './components/ListaPedidos'
import { pedidos } from './js/pedidos'
import { ResumenPedidos } from './components/ResumenPedidos'
import { Indicadores } from './components/Indicadores'

export const App = () => {
  const listaPedidos = pedidos;
  const listaPedidosEntregados = pedidos.filter(pedido => pedido.estado === "entregado")
  return (
    <>
      <ListaPedidos pedidos={listaPedidos} titulo='Lista de Pedidos.' />
      <ListaPedidos pedidos={listaPedidosEntregados} titulo='Lista de Pedidos Entregados.' />
      <ResumenPedidos pedidos={listaPedidos} pedidosEntregados={listaPedidosEntregados} />
      <Indicadores pedidos={listaPedidos} />
    </>
  )
}


