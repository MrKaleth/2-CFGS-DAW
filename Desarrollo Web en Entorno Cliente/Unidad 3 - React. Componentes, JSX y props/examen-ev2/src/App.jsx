import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { ListaCortos } from './components/ListaCortos'
import { cortos } from './js/cortos.js'
import { ProgramaDestacado } from './components/ProgramaDestacado.jsx'
import { Diagnostico } from './components/Diagnostico.jsx'

export const App = () => {
  const listaCortos = cortos;
  const listaSeleccionOficial = cortos.filter(corto => corto.inscrito && corto.apto && corto.duracion <= 20);
  const idDestacado = 4;
  const cortoDestacado = cortos.filter(corto => corto.id === idDestacado);
  const programaRecomendado = listaSeleccionOficial.filter(corto => corto.puntuacion >= 8.5);

  return (
    <>
      <ListaCortos cortos={listaCortos} titulo="Lista de Cortometrajes del Festival" mensaje="No hay cortometrajes registrados." />
      <ListaCortos cortos={listaSeleccionOficial} titulo="Selección oficial" mensaje="No hay cortometrajes en la selección oficial." />
      <ListaCortos cortos={cortoDestacado} titulo="Cortometraje Destacado" mensaje="No se ha encontrado el cortometraje destacado." />
      <ProgramaDestacado cortos={programaRecomendado} />
      <Diagnostico cortos={listaCortos}/>
    </>
  )
}




