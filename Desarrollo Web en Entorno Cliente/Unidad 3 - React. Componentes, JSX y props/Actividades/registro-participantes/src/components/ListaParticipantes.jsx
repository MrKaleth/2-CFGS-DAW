import React from 'react'
import { Participante } from './Participante'

export const ListaParticipantes = ({ participantes, titulo, eliminarParticipante }) => {
    return (
        <>
            <h3>{titulo}</h3>
            {
                (participantes.length === 0) ? <p>No hay Participantes</p> :
                    <ul>
                        {participantes.map(
                            participante => <Participante key={participante.id} participante={participante}
                                eliminarParticipante={eliminarParticipante} />)}
                    </ul>
            }
        </>
    )
}
