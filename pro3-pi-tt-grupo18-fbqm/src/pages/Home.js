import SearchForm from "../components/SearchForm/SearchForm"
import HomeMovies from "../components/HomeMovies/HomeMovies"

const Home = (props) => {
  return (
    <>
      <SearchForm history={props.history} />
      <h2 className="page-name" >Peliculas mas populares</h2>
      <HomeMovies link="/maspopulares" limit={5} url={'https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=1'}/>
      <h2 className="page-name">Peliculas en cartel</h2>
      <HomeMovies link="/encartel" limit={5} url={'https://api.themoviedb.org/3/movie/now_playing?api_key=56c25df0bc04ec0dd18325a8ea74e10c'}/>
    </>
  )
}

export default Home