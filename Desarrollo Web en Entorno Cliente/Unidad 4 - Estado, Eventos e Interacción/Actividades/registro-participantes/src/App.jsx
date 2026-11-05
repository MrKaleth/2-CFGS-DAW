import { useState } from "react"
import { Cabecera } from "./components/Cabecera"
import Contador from "./components/Contador"
import FormularioRegistro from "./components/FormularioRegistro"
import ListaParticipantes from "./components/ListaParticipantes"
import { participantes } from "./js/participantes"

const App = () => {

    const [listadoParticipantes, setListadoParticipantes] = useState(participantes);
    const listaParticipantesComprobados = listadoParticipantes.filter(p => p.comprobado);

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

    console.log(listadoParticipantes);
    return (
        <>
            <Cabecera />
            <FormularioRegistro anadirParticipante={anadirParticipante} />
            <Contador total={listadoParticipantes.length} />
            {listadoParticipantes.length > 0 && (<div>
                <button onClick={eliminarTodos}>Eliminar todos</button>
                <button onClick={comprobarTodos}>Comprobar todos</button>
            </div>)}
            <ListaParticipantes participantes={listadoParticipantes} titulo="Lista de Participantes"
                eliminarParticipante={eliminarParticipante} cambiarComprobado={cambiarComprobado} />
            <ListaParticipantes participantes={listaParticipantesComprobados} titulo="Lista de Participantes Comprobados" />
        </>
    )
}

export default App