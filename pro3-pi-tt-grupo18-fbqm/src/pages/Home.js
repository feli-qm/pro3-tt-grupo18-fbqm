import Formulario from "../components/Form/Form";
import Populares from "../components/Populares/Populares";

const Home = () => {
  return (
    <>
      <h2>Formulario de busqueda</h2>
      <Formulario />
      <h2>Peliculas mas populares</h2>
      <Populares limit={5}/>
      <h2>Peliculas en cartel</h2>
    </>
  )
}

export default Home