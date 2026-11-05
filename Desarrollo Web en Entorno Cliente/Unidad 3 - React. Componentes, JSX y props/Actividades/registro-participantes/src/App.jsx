import React, { useState } from 'react'
import { Cabecera } from './components/Cabecera'
import { FormularioRegistro } from './components/FormularioRegistro'
import { Contador } from './components/Contador'
import { ListaParticipantes } from './components/ListaParticipantes'
import { participantes as datosIniciales } from './js/participantes'

export const App = () => {
    const [listaParticipantes, setListaParticipantes] = useState(datosIniciales);

    const listaParticipantesComprobados = listaParticipantes.filter(p => p.comprobado);

    const siguienteId = listaParticipantes.reduce((max, p) => Math.max(p.id, max), 0) + 1;

    const anyadirParticipante = (nuevo) => {
        setListaParticipantes([...listaParticipantes, nuevo]);
        console.log(nuevo);
    }

    const eliminarParticipante = (id) => {
        setListaParticipantes(listaParticipantes => listaParticipantes.filter(p => p.id !== id))
    }

    const cambiarComprobado = (id) => {
        setListaParticipantes(listaParticipantes => listaParticipantes.map(p => p.id === id ? {
            ...p,
            comprobado: !p.comprobado
        } : p))
        console.log(listaParticipantes.map(p => p.id === id))
    }

    return (
        <>
            <Cabecera />

            <FormularioRegistro anyadirParticipante={anyadirParticipante} nextId={siguienteId} />
            <Contador total={listaParticipantes.length} />
            <ListaParticipantes participantes={listaParticipantes} titulo="Lista de Participantes"
                eliminarParticipante={eliminarParticipante} cambiarComprobado={cambiarComprobado} />
            <ListaParticipantes participantes={listaParticipantesComprobados} titulo="Lista de Participantes Comprobados"
            />
        </>
    )
}
