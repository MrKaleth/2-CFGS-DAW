import React, { useState } from 'react' // 1. Importamos useState
import { Cabecera } from './components/Cabecera'
import { FormularioRegistro } from './components/FormularioRegistro'
import { Contador } from './components/Contador'
import { ListaParticipantes } from './components/ListaParticipantes'
import { participantes as datosIniciales } from './js/participantes'

export const App = () => {
    const [listaParticipantes, setListaParticipantes] = useState(datosIniciales);

    const listaParticipantesComprobados = listaParticipantes.filter(p => p.comprobado);

    const anyadirParticipante = (nuevo) => {
        setListaParticipantes([...listaParticipantes, nuevo]);
        console.log(nuevo);

    }

    return (
        <>
            <Cabecera />
            <FormularioRegistro anyadirParticipante={anyadirParticipante} nextId={listaParticipantes.length + 1} />
            <Contador total={listaParticipantes.length} />
            <ListaParticipantes participantes={listaParticipantes} titulo="Lista de Participantes" />
            <ListaParticipantes participantes={listaParticipantesComprobados} titulo="Lista de Participantes Comprobados" />
        </>
    )
}
