import MovieGrid from "../components/MovieGrid/MovieGrid";

const MasPopulares = () => {
  return (
    <>
      <div>
        <h2>Peliculas mas populares</h2>
        <MovieGrid url={'https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=1'} />
      </div>
    </>
  )
}

export default MasPopulares