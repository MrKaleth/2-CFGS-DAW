import { useState } from "react"
import { Cabecera } from "./components/Cabecera"
import Contador from "./components/Contador"
import FormularioRegistro from "./components/FormularioRegistro"
import ListaParticipantes from "./components/ListaParticipantes"
import FiltrosParticipante from "./components/FiltrosParticipante"
import { participantes } from "./js/participantes"

const App = () => {

    const [listadoParticipantes, setListadoParticipantes] = useState(participantes);
    const [busqueda, setBusqueda] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("todos");
    const [filtroOrden, setFiltroOrden] = useState("registro");

    const terminoBusqueda = busqueda.trim().toLowerCase();

    const participantesFiltrados = listadoParticipantes.filter(p => {
        const coincideTexto = p.nombre.toLowerCase().includes(terminoBusqueda) ||
            p.email.toLowerCase().includes(terminoBusqueda);

        let coincideEstado = true;
        if (filtroEstado === "comprobados") {
            coincideEstado = p.comprobado === true;
        } else if (filtroEstado === "pendientes") {
            coincideEstado = p.comprobado === false;
        }

        return coincideTexto && coincideEstado;
    });

    const participantesOrdenados = [...participantesFiltrados].sort((a, b) => {
        if (filtroOrden === "az") {
            return a.nombre.localeCompare(b.nombre);
        } else if (filtroOrden === "za") {
            return b.nombre.localeCompare(a.nombre);
        } else {
            return a.id - b.id;
        }
    });

    const listaParticipantesComprobados = participantesOrdenados.filter(p => p.comprobado);

    const hayFiltrosActivos = busqueda !== "" || filtroEstado !== "todos" || filtroOrden !== "registro";

    const resetFiltros = () => {
        setBusqueda("");
        setFiltroEstado("todos");
        setFiltroOrden("registro");
    }

    const anadirParticipante = (nuevo) => {
        const correoNuevo = nuevo.email.trim().toLowerCase();
        const existeCorreo = listadoParticipantes.some(p => p.email.trim().toLowerCase() === correoNuevo);
        let exito = false;

        if (existeCorreo) {
            alert("Error: Ya existe un participante registrado con este correo electrónico.");
        } else {
            const participante = {
                id: calculaID() + 1,
                ...nuevo
            }
            setListadoParticipantes(listadoParticipantes => [
                ...listadoParticipantes,
                participante
            ]);
            exito = true;
        }

        return exito;
    }

    const calculaID = () => { return listadoParticipantes.reduce((max, p) => Math.max(p.id, max), 0) }

    const eliminarParticipante = (id) => {
        setListadoParticipantes(listadoParticipantes => listadoParticipantes.filter(participante => participante.id !== id))
    }

    const cambiarComprobado = (id) => {
        setListadoParticipantes(actuales => actuales.map(p => p.id === id ?
            {
                ...p,
                comprobado: !p.comprobado
            } : p)
        )
    }

    const eliminarTodos = () => {
        setListadoParticipantes([]);
    }

    const comprobarTodos = () => {
        setListadoParticipantes(actuales => actuales.map(p => ({
            ...p,
            comprobado: true
        })));
    }

    return (
        <>
            <Cabecera />
            <FormularioRegistro anadirParticipante={anadirParticipante} />
            <Contador total={listadoParticipantes.length} />

            {listadoParticipantes.length > 0 && (<div>
                <button onClick={eliminarTodos}>Eliminar todos</button>
                <button onClick={comprobarTodos}>Comprobar todos</button>
            </div>)}

            <FiltrosParticipante busqueda={busqueda} setBusqueda={setBusqueda} filtroEstado={filtroEstado}
                setFiltroEstado={setFiltroEstado} filtroOrden={filtroOrden}
                setFiltroOrden={setFiltroOrden} resetFiltros={resetFiltros} />

            {hayFiltrosActivos && (
                <p>Mostrando {participantesOrdenados.length} de {listadoParticipantes.length} participantes</p>
            )}

            <ListaParticipantes participantes={participantesOrdenados} titulo="Lista de Participantes"
                eliminarParticipante={eliminarParticipante} cambiarComprobado={cambiarComprobado} />
            <ListaParticipantes participantes={listaParticipantesComprobados} titulo="Lista de Participantes Comprobados" />
        </>
    )
}

export default App