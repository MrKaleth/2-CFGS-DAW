import React from 'react'
import { Participante } from './Participante'

export const ListaParticipantes = ({ children }) => {
    return (
        <>
            <ul>
                {children}
            </ul>
        </>
    )
}
