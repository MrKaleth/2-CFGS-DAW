import React from 'react'
import { Corto } from './Corto'


export const ListaCortos = ({ cortos, titulo, mensaje }) => {
    return (
        <>
            <h3>{titulo}. <span>({cortos.length})</span></h3>

            {(cortos.length === 0) ? (<p>{mensaje}</p>) : (
                <ul>
                    {cortos.map(corto => (
                        <Corto key={corto.id}
                            titulo={corto.titulo}
                            director={corto.director}
                            genero={corto.genero}
                            duracion={corto.duracion}
                            puntuacion={corto.puntuacion}
                            inscrito={corto.inscrito}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}
