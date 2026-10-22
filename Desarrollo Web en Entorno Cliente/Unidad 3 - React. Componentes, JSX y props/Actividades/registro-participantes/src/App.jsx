import React from 'react'
import { Cabecera } from './components/Cabecera'
import { FormularioRegistro } from './components/FormularioRegistro'
import { Contador } from './components/Contador'
import { ListaParticipantes } from './components/ListaParticipantes'
import { participantes } from './js/participantes'

export const App = () => {
    const listaParticipantes = participantes;
    const listaParticipantesComprobados = participantes.filter(participante => participante.comprobado);

    return (
        <>
            <Cabecera />
            <FormularioRegistro />
            <Contador total={listaParticipantes.length} />
            <ListaParticipantes participantes={listaParticipantes} titulo="Lista de Participantes" />
            <ListaParticipantes participantes={listaParticipantesComprobados} titulo="Lista de Participantes Comprobados" />
        </>
    )
}
