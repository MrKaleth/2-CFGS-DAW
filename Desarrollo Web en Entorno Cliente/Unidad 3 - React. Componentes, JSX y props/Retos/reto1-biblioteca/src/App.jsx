import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { ListaLibros } from './components/ListaLibros'
import { libros } from './js/libros'
import { ResumenLibros } from './components/ResumenLibros'

export const App = () => {
  const listaLibros = libros;
  const listaLibrosDisponibles = libros.filter(libro => libro.disponible);

  return (
    <>
      <ListaLibros libros={listaLibros} titulo="Lista de Libros" />
      <ListaLibros libros={listaLibrosDisponibles} titulo="Lista de Libros Disponibles" />
      <ResumenLibros libros={listaLibros} librosDisponibles={listaLibrosDisponibles} />
    </>
  )
}


