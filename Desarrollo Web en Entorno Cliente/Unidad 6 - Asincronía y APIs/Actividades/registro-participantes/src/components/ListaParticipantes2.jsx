import { Participante } from "./Participante"


const ListaParticipantes2 = ({ participantes, titulo, eliminarParticipante, cambiarComprobado, eliminarTodos, todosComprobados, iniciarEdicion, }) => {

    // const [textoBuscado, setTextoBuscado] = useState("")

    // const buscar = (event) => {
    //     const texto = event.target.value.toLowerCase().trim();
    //     setTextoBuscado(texto);
    //     console.log(texto);
    // }
    // const participantesVisibles = participantes.filter(
    //     p => p.nombre.toLowerCase().includes(textoBuscado) || p.email.toLowerCase().includes(textoBuscado)
    // )

    return (
        <>
            <h3>{titulo}</h3>
            {/* {buscar && <input id="buscar" type="text" onChange={buscar} placeholder="Buscar" />
            } */}
            {
                (participantes.length === 0) ?
                    <p>No hay Participantes</p>
                    :
                    <ul>
                        {participantes.map(
                            participante =>

                                <Participante
                                    key={participante.id}
                                    participante={participante}
                                    eliminarParticipante={eliminarParticipante}
                                    cambiarComprobado={cambiarComprobado}
                                    iniciarEdicion={iniciarEdicion}
                                />
                        )
                        }
                    </ul>

            }
            {(eliminarTodos && participantes.length !== 0) &&
                <button onClick={eliminarTodos}>Eliminar Todos</button>
            }
            {(todosComprobados && participantes.length > 0) &&
                <button onClick={todosComprobados}>Todos Comprobados</button>
            }

        </>
    )
}

export default ListaParticipantes2