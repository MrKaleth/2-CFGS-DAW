import React from 'react'
import { Cabecera } from './components/Cabecera'
import { FormularioRegistro } from './components/FormularioRegistro'
import { Contador } from './components/Contador'
import { ListaParticipantes } from './components/ListaParticipantes'
import { Participante } from './components/Participante'

export const App = () => {
    return (
        <>
            <Cabecera />
            <FormularioRegistro />
            <Contador />
            <ListaParticipantes>
                <Participante nombre="Bruno" email="b@b.es" cualquiera="2" />
                <Participante nombre="Javi" email="j@j.es" />
                <Participante nombre="BrunoÁngel" email="a@a.es" />
            </ListaParticipantes>
        </>
    )
}
