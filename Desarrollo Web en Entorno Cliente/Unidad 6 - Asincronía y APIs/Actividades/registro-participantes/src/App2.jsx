import { useState } from "react"
import { Cabecera } from "./components/Cabecera"
import Contador from "./components/Contador"
import FormularioRegistro from "./components/FormularioRegistro"
import ListaParticipantes2 from "./components/ListaParticipantes2"
import { participantes2, comprobarParticipante } from "./js/participantes2"
import FiltrosParticipantes from "./components/FiltroParticipantes"


const App2 = () => {

    const [listadoParticipantes, setListadoParticipantes] = useState(participantes2);
    const [textoBuscado, setTextoBuscado] = useState("");
    const [filtro, setFiltro] = useState("");
    const [orden, setOrden] = useState("");

    const [idEnEdicion, setIdEnEdicion] = useState(null);

    const iniciarEdicion = (id) => setIdEnEdicion(id);

    const participanteEnEdicion = listadoParticipantes.find(
        p => p.id === idEnEdicion
    );

    const listaParticipantesComprobados =
        listadoParticipantes.filter(
            participante => participante.comprobado
        );

    const participantesVisibles = listadoParticipantes
        .filter(
            p => p.nombre.toLowerCase().includes(textoBuscado)
                || p.email.toLowerCase().includes(textoBuscado)
        )
        .filter(
            participante => {
                if (filtro === "true") {
                    return participante.comprobado;
                }
                if (filtro === "false") {
                    return !participante.comprobado;
                }
                return true;
            }
        )

    if (orden) {
        if (orden === "asc") {
            participantesVisibles.sort(
                (a, b) =>
                    a.nombre.localeCompare(b.nombre, "es")
            )
        } else {
            participantesVisibles.sort(
                (a, b) =>
                    b.nombre.localeCompare(a.nombre, "es")
            )
        }
    }

    const anadirParticipante = (nuevo) => {
        // listadoParticipantes.push(nuevo);
        //Comprobamos que no hay otro usuario con el mismo email
        const nombre = nuevo.nombre.trim();
        const email = nuevo.email.toLowerCase();

        if (!nombre) return "Error. Nombre vacío";
        if (!email) return "Error. Email vacío";
        if (compruebaMail(email)) return "Error. Email repetido";

        // if (!compruebaMail(nuevo.email.trim().toLowerCase())) {
        const participante = {
            id: calculaID() + 1,
            ...nuevo
        }

        setListadoParticipantes(listadoParticipantes => [
            ...listadoParticipantes,
            participante
        ]);
        //Limpiamos Formulario
        // limpiarFormulario();
        // document.querySelector("#nombre").focus();
        //} else {
        //Mensaje de error si se repite el email
        //  document.querySelector("#mensaje").innerHTML = "ERROR. Email repetido";
        //}

        return "";
    }

    const actualizarParticipante = (datos) => {
        const nombre = datos.nombre.trim();
        const email = datos.email.toLowerCase();

        if (!nombre) return "Error. Nombre vacío";
        if (!email) return "Error. Email vacío";
        if (compruebaMail(email, idEnEdicion)) return "Error. Email repetido";

        setListadoParticipantes(
            (actuales) => actuales.map(
                p => {
                    if (p.id === idEnEdicion) {
                        return {
                            ...p,
                            nombre,
                            email,
                        }
                    } else {
                        return p;
                    }
                })
        );

        return "";
    }

    const compruebaMail = (email, idEnEdicion = null) => {
        return listadoParticipantes.some(
            p => p.email.trim().toLowerCase() === email && p.id !== idEnEdicion
        )
    }

    //const limpiarFormulario = () => {
    //document.querySelector("#nombre").value = "";
    //document.querySelector("#email").value = "";
    //document.querySelector("#mensaje").innerHTML = ""
    //}

    const calculaID = () => {
        return listadoParticipantes.reduce(
            (max, p) => Math.max(p.id, max), 0
        )
    }





    const eliminarParticipante = (id) => {
        setListadoParticipantes(
            listadoParticipantes =>
                listadoParticipantes.filter(
                    participante => participante.id !== id
                ))
    }

    const cambiarComprobado = (id) => {
        setListadoParticipantes(
            actuales =>
                actuales.map(
                    p => p.id === id ?
                        {
                            ...p,
                            comprobado: !p.comprobado
                        } :
                        p
                ))
    }

    const eliminarTodos = () => {
        setListadoParticipantes([]);
    }

    const todosComprobados = () => {
        setListadoParticipantes(
            actuales =>
                actuales.map(
                    p => ({
                        ...p,
                        comprobado: true,
                    })
                ))
    }

    const buscar = (event) => {
        const texto = event.target.value.toLowerCase().trim();
        setTextoBuscado(texto);
    }

    const filtrar = (event) => {
        setFiltro(event.target.value)
    }

    const ordenar = (event) => {
        setOrden(event.target.value);
    }


    const quitarFiltros = () => {
        setTextoBuscado("");
        setFiltro("");
        setOrden("");
    }

    

    // console.log(listadoParticipantes);
    return (
        <>
            <Cabecera />
            <p>El id en edición es: {idEnEdicion}</p>
            <FormularioRegistro
                key={idEnEdicion ? `edicion-${idEnEdicion}` : "alta"}
                anadirParticipante={anadirParticipante}
                participanteEnEdicion={participanteEnEdicion}
                actualizarParticipante={actualizarParticipante}
            />

            <Contador total={listadoParticipantes.length} />

            <FiltrosParticipantes textoBuscado={textoBuscado} buscar={buscar} filtrar={filtrar} ordenar={ordenar} quitarFiltros={quitarFiltros} />

            <ListaParticipantes2
                participantes={participantesVisibles}
                titulo="Lista de Participantes"
                eliminarParticipante={eliminarParticipante}
                cambiarComprobado={cambiarComprobado}
                eliminarTodos={eliminarTodos}
                todosComprobados={todosComprobados}
                iniciarEdicion={iniciarEdicion}

            />
            <ListaParticipantes2
                participantes={listaParticipantesComprobados}
                titulo="Lista de Participantes Comprobados"
            />

        </>
    )
}

export default App2