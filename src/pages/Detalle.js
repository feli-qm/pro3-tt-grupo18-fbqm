import DetallePelicula from "../components/DetallePelicula/DetallePelicula"

const Detalle = (props) => {
  return (
    <>
      <DetallePelicula match={props.match} />
    </>
  )
}

export default Detalle;