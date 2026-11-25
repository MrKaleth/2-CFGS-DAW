
const Peliculas = ({ pelicula, confirmar, eliminar }) => {
  const { id, titulo, genero, duracion, confirmada } = pelicula;

  // { id: 1, titulo: "El puente", genero: "Drama", duracion: 18, confirmada: false }
  return (
    <>

      {confirmar ?
        <>
          <li>{titulo} -  {genero} - {duracion} min - {confirmada ? "Confirmada" : "Pendiente"}
            <button onClick={() => confirmar(id)}>{pelicula.confirmada ? "Pendiente" : "Confirmar"}</button>
            <button onClick={() => eliminar(id)}>Retirar</button>
          </li>
        </>
        :
        <li>{titulo}  - {duracion} min </li>
      }
    </>
  )
}

export default Peliculas