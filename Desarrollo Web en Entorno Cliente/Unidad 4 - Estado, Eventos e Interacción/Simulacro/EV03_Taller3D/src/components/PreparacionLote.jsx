import React from 'react'

const PreparacionLote = ({ material, onCambiarMaterial, gramosDisponibles, onCambiarGramos, propuesta, gramosPrevistos, gramosLibres, idsMarcados, onAlternarMarca, onCerrarLote }) => {
    return (
        <>
            <h2>Preparación y cierre de lote</h2>
            <label>
                Material del lote
                <select value={material} onChange={onCambiarMaterial}>
                    <option value="PLA">PLA</option>
                    <option value="PETG">PETG</option>
                </select>
            </label>

            <label>
                Cantidad disponible
                <select value={gramosDisponibles} onChange={onCambiarGramos}>
                    <option value={100}>100 g</option>
                    <option value={150}>150 g</option>
                    <option value={200}>200 g</option>
                </select>
            </label>

            {propuesta.length === 0 ? (<p>No hay pedidos pendientes de {material} que quepan en {gramosDisponibles}g.</p>) : (
                <ul>
                    {propuesta.map((pedido) => (
                        <li key={pedido.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={idsMarcados.includes(pedido.id)}
                                    onChange={() => onAlternarMarca(pedido.id)} />
                                <b> {pedido.referencia}.</b> {pedido.pieza} | {pedido.unidades} uds. | {pedido.pesoTotal}g
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            <p>
                Gramos previstos: {gramosPrevistos}g | Gramos libres: {gramosLibres}g
            </p>

            <button
                type="button"
                disabled={idsMarcados.length === 0}
                onClick={onCerrarLote}>
                Cerrar lote
            </button>
        </>
    );
};

export default PreparacionLote;