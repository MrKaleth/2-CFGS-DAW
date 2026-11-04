import React from 'react'
import { Corto } from './Corto';

export const ProgramaDestacado = ({ cortos }) => {
    return (
        <>
            <h3>Programa Recomendado.</h3>
            {(cortos.length === 0) ? (<p>No hay cortometrajes recomendados.</p>) : (
                <ul>
                    {cortos.map(corto => (
                        <li key={corto.id}>{corto.titulo} - {corto.director} - {corto.puntuacion}</li>
                    ))}
                </ul>
            )}

            <p>Obras Recomendadas: {cortos.length !== 0 ? cortos.length : 0}</p>
            <p>Duración total: {cortos.length !== 0 ? cortos.reduce((acumulador, corto) => acumulador + corto.duracion, 0) : 0} minutos</p>
            <p>Puntuacion media: {cortos.length !== 0 ? (cortos.reduce((acumulador, corto) => acumulador + corto.puntuacion, 0) / cortos.length).toFixed(2) : 0}</p>
        </>
    )
}


