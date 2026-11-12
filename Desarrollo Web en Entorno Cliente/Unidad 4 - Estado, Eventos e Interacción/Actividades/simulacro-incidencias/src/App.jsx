import { useState } from "react"
import { FormularioRegistro } from "./components/FormularioRegistro"
import { ListaIncidencias } from "./components/ListaIncidencias"
import { FiltroIncidencias } from "./components/FiltroIncidencias"
import { incidencias } from "./js/incidencias"

const App = () => {

  const [listadoIncidencias, setListadoIncidencias] = useState(incidencias);
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroOrden, setFiltroOrden] = useState("registro");
  const [pagina, setPagina] = useState(1);

  const terminoBusqueda = busqueda.trim().toLowerCase();

  const incidenciasFiltradas = listadoIncidencias.filter(i => {
    const coincideTexto = i.codigo.toLowerCase().includes(terminoBusqueda) ||
      i.titulo.toLowerCase().includes(terminoBusqueda);

    let coincideEstado = true;
    if (filtroEstado === "pendientes") {
      coincideEstado = i.estado === "pendiente";
    } else if (filtroEstado === "resueltas") {
      coincideEstado = i.estado === "resuelta";
    }

    return coincideTexto && coincideEstado;
  });

  const incidenciasOrdenadas = [...incidenciasFiltradas].sort((a, b) => {
    if (filtroOrden === "az") {
      return a.titulo.localeCompare(b.titulo);
    } else if (filtroOrden === "za") {
      return b.titulo.localeCompare(a.titulo);
    } else {
      return a.id - b.id;
    }
  });

  // Paginación simple con slice (3 por página)
  const totalPaginas = Math.ceil(incidenciasOrdenadas.length / 3) || 1;
  const paginaActual = pagina > totalPaginas ? totalPaginas : pagina;
  const inicio = (paginaActual - 1) * 3;
  const fin = inicio + 3;
  const incidenciasPagina = incidenciasOrdenadas.slice(inicio, fin);

  const resetFiltros = () => {
    setBusqueda("");
    setFiltroEstado("todos");
    setFiltroOrden("registro");
    setPagina(1);
  }

  const anadirIncidencia = (nueva) => {
    const codigoNuevo = nueva.codigo.trim().toLowerCase();
    const existeCodigo = listadoIncidencias.some(i => i.codigo.trim().toLowerCase() === codigoNuevo);
    let exito = false;

    if (existeCodigo) {
      alert("Error: Ya existe una incidencia registrada con este código.");
    } else {
      const incidencia = {
        id: calculaID() + 1,
        ...nueva,
        estado: "pendiente"
      }
      setListadoIncidencias(listadoIncidencias => [
        ...listadoIncidencias,
        incidencia
      ]);
      exito = true;
    }

    return exito;
  }

  const calculaID = () => { return listadoIncidencias.reduce((max, i) => Math.max(i.id, max), 0) }

  const eliminarIncidencia = (id) => {
    setListadoIncidencias(listadoIncidencias => listadoIncidencias.filter(i => i.id !== id))
  }

  const cambiarEstado = (id) => {
    setListadoIncidencias(actuales => actuales.map(i => i.id === id ?
      {
        ...i,
        estado: i.estado === "pendiente" ? "resuelta" : "pendiente"
      } : i)
    )
  }

  return (
    <>
      <h1>Registro de Incidencias del IES Sotero Hernandez</h1>
      <FormularioRegistro anadirIncidencia={anadirIncidencia} />

      <FiltroIncidencias
        busqueda={busqueda} setBusqueda={(v) => { setBusqueda(v); setPagina(1); }}
        filtroEstado={filtroEstado} setFiltroEstado={(v) => { setFiltroEstado(v); setPagina(1); }}
        filtroOrden={filtroOrden} setFiltroOrden={(v) => { setFiltroOrden(v); setPagina(1); }}
        resetFiltros={resetFiltros}
      />

      {incidenciasOrdenadas.length === 0 ? (
        <p>No hay incidencias que mostrar</p>
      ) : (
        <p>Mostrando {inicio + 1}–{Math.min(fin, incidenciasOrdenadas.length)} de {incidenciasOrdenadas.length} resultados ({listadoIncidencias.length} incidencias registradas)</p>
      )}

      <div>
        <button onClick={() => setPagina(paginaActual - 1)} disabled={paginaActual === 1 || incidenciasOrdenadas.length === 0}>
          Anterior
        </button>
        <span> Página {incidenciasOrdenadas.length === 0 ? 0 : paginaActual} de {incidenciasOrdenadas.length === 0 ? 0 : totalPaginas} </span>
        <button onClick={() => setPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas || incidenciasOrdenadas.length === 0}>
          Siguiente
        </button>
      </div>

      <ListaIncidencias incidencias={incidenciasPagina} titulo="Lista de Incidencias"
        eliminarIncidencia={eliminarIncidencia} cambiarEstado={cambiarEstado} />
    </>
  )
}

export default App