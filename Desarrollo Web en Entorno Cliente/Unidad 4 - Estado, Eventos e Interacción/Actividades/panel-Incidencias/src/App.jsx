import { useState } from "react";
import { incidenciasIniciales } from "./data/incidencias.js";
import FormularioIncidencia from "./components/FormularioIncidencia.jsx";
import ControlesConsulta from "./components/ControlesConsulta.jsx";
import ListaIncidencias from "./components/ListaIncidencias.jsx";
import Paginacion from "./components/Paginacion.jsx";
import SeleccionPagina from "./components/SeleccionPagina.jsx";
import Cabecera from "./components/Cabecera.jsx";

const POR_PAGINA = 3;
const CONSULTA_INICIAL = { texto: "", estado: "todas", orden: "registro" };
const SELECCION_INICIAL = { criterio: "estado", valor: "resuelta" };

const normalizar = texto => texto.trim().toLowerCase();

const filtrar = (incidencias, consulta) => {
  const texto = normalizar(consulta.texto);

  return incidencias
    .filter(({ codigo, titulo }) =>
      normalizar(codigo).includes(texto) ||
      normalizar(titulo).includes(texto)
    )
    .filter(incidencia =>
      consulta.estado === "todas" || incidencia.estado === consulta.estado
    );
};

const ordenar = (resultados, orden) => {
  if (orden === "registro") return resultados;

  // sort modifica el array. Por eso ordenamos una copia.
  return [...resultados].sort((a, b) =>
    orden === "asc"
      ? a.titulo.localeCompare(b.titulo, "es")
      : b.titulo.localeCompare(a.titulo, "es")
  );
};

const App = () => {
  const [incidencias, setIncidencias] = useState(incidenciasIniciales);
  const [consulta, setConsulta] = useState(CONSULTA_INICIAL);
  const [pagina, setPagina] = useState(1);
  const [seleccion, setSeleccion] = useState(SELECCION_INICIAL);

  // Las listas y los contadores se calculan a partir del estado.
  const resultados = ordenar(filtrar(incidencias, consulta), consulta.orden);
  const totalPaginas = Math.ceil(resultados.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const filasPagina = resultados.slice(inicio, inicio + POR_PAGINA);

  // El criterio contiene el nombre de una propiedad: estado o prioridad.
  const filasSeleccionadas = filasPagina.filter(
    fila => fila[seleccion.criterio] === seleccion.valor
  );

  const actualizarRegistro = nuevoRegistro => {
    // Una baja o un cambio de estado puede vaciar la última página.
    const coincidencias = filtrar(nuevoRegistro, consulta).length;
    const ultimaPagina = Math.max(1, Math.ceil(coincidencias / POR_PAGINA));

    setIncidencias(nuevoRegistro);
    setPagina(actual => Math.min(actual, ultimaPagina));
  };

  const registrar = datos => {
    const codigo = datos.codigo.trim();
    const titulo = datos.titulo.trim();

    if (!codigo || !titulo) return "Introduce un código y un título.";

    const repetido = incidencias.some(
      fila => normalizar(fila.codigo) === normalizar(codigo)
    );

    if (repetido) return "Ya existe una incidencia con ese código.";

    // Si el registro está vacío, reduce devuelve 0 y el nuevo ID será 1.
    const mayorId = incidencias.reduce(
      (maximo, fila) => Math.max(maximo, fila.id), 0
    );

    actualizarRegistro([
      ...incidencias,
      { ...datos, id: mayorId + 1, codigo, titulo, estado: "pendiente" },
    ]);

    return "";
  };

  const cambiarEstado = id => {
    actualizarRegistro(incidencias.map(fila =>
      fila.id === id
        ? { ...fila, estado: fila.estado === "pendiente" ? "resuelta" : "pendiente" }
        : fila
    ));
  };

  const eliminar = id => {
    actualizarRegistro(incidencias.filter(fila => fila.id !== id));
  };

  const resolverVisibles = () => {
    // Seleccionamos los IDs visibles y recorremos el registro completo.
    const idsVisibles = filasPagina.map(fila => fila.id);

    actualizarRegistro(incidencias.map(fila =>
      idsVisibles.includes(fila.id) ? { ...fila, estado: "resuelta" } : fila
    ));
  };

  const cambiarConsulta = (campo, valor) => {
    setConsulta(actual => ({ ...actual, [campo]: valor }));
    setPagina(1);
  };

  const cambiarCriterio = criterio => {
    // Al cambiar de criterio, el valor elegido debe pertenecer al nuevo selector.
    setSeleccion({ criterio, valor: criterio === "estado" ? "resuelta" : "alta" });
  };

  const cambiarValor = valor => {
     setSeleccion(actual => ({ ...actual, valor }))
  }

  const restablecer = () => {
    setConsulta(CONSULTA_INICIAL);
    setSeleccion(SELECCION_INICIAL);
    setPagina(1);
  };

  const resumen = filasPagina.length > 0
    ? `Mostrando ${inicio + 1}–${inicio + filasPagina.length} de ${resultados.length} resultados`
    : "Mostrando 0 de 0 resultados";

  return (
    <>
    <Cabecera etiqueta="h1" titulo="Panel de incidencias del aula" />
      <FormularioIncidencia onRegistrar={registrar} />
      <ControlesConsulta
        consulta={consulta}
        onCambiar={cambiarConsulta}
        onRestablecer={restablecer}
      />

    <Cabecera etiqueta="h2" titulo="Incidencias de la página actual" />
      <p>{resumen} ({incidencias.length} incidencias registradas)</p>
      <ListaIncidencias
        filas={filasPagina}
        mensaje="No hay incidencias que mostrar"
        onCambiarEstado={cambiarEstado}
        onEliminar={eliminar}
      />
      <Paginacion
        pagina={pagina}
        total={totalPaginas}
        onCambiar={setPagina} />
      <button type="button"
        disabled={!filasPagina.length}
        onClick={resolverVisibles}>
        Resolver visibles
      </button>
      <button type="button" disabled={!incidencias.length}
        onClick={() => actualizarRegistro([])}>
        Eliminar todas
      </button>

      <SeleccionPagina
        seleccion={seleccion}
        filas={filasSeleccionadas}
        onCriterio={cambiarCriterio}
        onValor={cambiarValor}
      />
    </>
  );
};

export default App;