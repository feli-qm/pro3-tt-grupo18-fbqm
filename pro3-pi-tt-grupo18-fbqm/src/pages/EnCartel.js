import MovieGrid from "../components/MovieGrid/MovieGrid";

const EnCartel = () => {
  return (
    <>
      <div>
        <h2>Peliculas en cartel</h2>
        <MovieGrid url={'https://api.themoviedb.org/3/movie/now_playing?api_key=56c25df0bc04ec0dd18325a8ea74e10c'} />
      </div>
    </>
  )
}

export default EnCartel