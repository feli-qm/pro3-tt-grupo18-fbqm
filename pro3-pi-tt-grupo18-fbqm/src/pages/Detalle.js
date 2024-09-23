import DetallePelicula from "../components/DetallePelicula/DetallePelicula"

const Detalle = (props) => {
  return(
    <>
      <h2>Detalle de la pelicula</h2>
      <DetallePelicula match={props.match} />
    </>
  )
}

export default Detalle;