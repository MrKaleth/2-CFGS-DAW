import { useState } from 'react'
import { Cabecera } from './components/Cabecera'
import { ListaActividades } from './components/ListaActividades'
import { actividades } from './js/actividades'
import { ResumenActividades } from './components/ResumenActividades'
ResumenActividades

export const App = () => {
  const listaActividades = actividades;
  const listaActividadesAbiertas = actividades.filter(actividad => actividad.abierta);
  const idDestacada = 3;
  const actividadDestacada = actividades.filter(actividad => actividad.id === idDestacada)
  const numeroPlazas = actividades.reduce((acumulador, actividad) => acumulador + actividad.plazas, 0);

  return (
    <>
      <Cabecera />
      <div>
        <ListaActividades actividades={listaActividades} titulo="Lista de Actividades" />
      </div>
      <div>
        <ListaActividades actividades={listaActividadesAbiertas} titulo="Lista de Actividades con Inscripción Abierta" />
      </div>
      <div>
        <ListaActividades actividades={actividadDestacada} titulo="Actividad Destacada" />
      </div>
      <div>
        <ResumenActividades actividades={listaActividades} actividadesAbiertas={listaActividadesAbiertas}
          numeroPlazas={numeroPlazas} />
      </div>
    </>
  )
}

