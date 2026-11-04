import React from 'react'

export const Diagnostico = ({ cortos }) => {
    const cortosInscritos = cortos.filter(corto => corto.inscrito);
    const cortosAptos = cortosInscritos.filter(corto => corto.apto);
    const listaSeleccionOficial = cortos.filter(corto => !corto.inscrito || !corto.apto || corto.duracion > 20);



    return (
        <>

            <h3>Diagnóstico de Participación.</h3>
            {(cortos.length === 0) ? (<p>No hay cortometrajes inscritos para evaluar</p>) : (<div>
                <p>Total inscritos: {cortosInscritos.length}</p>
                <p>Inscritos Aptos: {cortosAptos.length}</p>
                <p>Inscritos no Aptos: {cortosInscritos.length - cortosAptos.length}</p>
                <p>{cortosInscritos.length === cortosAptos.length ? "Todos los cortometrajes inscritos son aptos" : "Existen cortometrajes inscritos no aptos"}</p>
                <ul>
                    {listaSeleccionOficial.map(corto => (
                        <li key={corto.id}>{corto.titulo} - {corto.director} - {corto.puntuacion}. No apto por: </li>
                    ))}
                </ul>
            </div>)}
        </>
    )
}
