const PresupuestoMaterial = ({ material, cambiarMaterial, pedidos, totalGramos }) => {
    return (
        <>
            <h2>Presupuesto de material</h2>

            <select value={material} onChange={cambiarMaterial}>
                <option value="PLA">PLA</option>
                <option value="PETG">PETG</option>
            </select>

            {pedidos.length === 0 ? (
                <p>No hay pedidos pendientes de este material en la lista.</p>
            ) : (
                <ul>
                    {pedidos.map((p) => (
                        <li key={p.referencia}>
                            {p.referencia} - {p.nombre} - {p.pesoTotal()}g
                        </li>
                    ))}
                </ul>
            )}

            <p>
                Pedidos incluidos: {pedidos.length} | Total: {totalGramos}g
            </p>
        </>
    );
};

export default PresupuestoMaterial;