import React from 'react'
import { Cabecera } from './components/Cabecera'
import { ListaCursos } from './components/ListaCursos'
import { ResumenCursos } from './components/ResumenCursos'
import { cursos } from './js/cursos'

export const App = () => {
  const listaCursos = cursos;
  const listaCursosActivos = cursos.filter(curso => curso.activo);
  const listaCursosLargaDuracion = cursos.filter(curso => curso.horas > 45); // Ampliación opcional

  return (
    <>
      <Cabecera />

      <ListaCursos cursos={listaCursos} titulo='Todos los cursos.' />

      <ListaCursos cursos={listaCursosActivos} titulo='Cursos activos.' />

      <ListaCursos cursos={listaCursosLargaDuracion} titulo='Cursos de larga duración.' />

      <ResumenCursos totalCursos={listaCursos.length} totalActivos={listaCursosActivos.length} />
    </>
  )
}
