import '../MovieCard/MovieCard.css'
import Loading from '../Loading/Loading';
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = (props) => {
    console.log(props.movies);
    return (
      <>
        { (!props.movies) ? (
          <Loading />
        ) : (
          <div className="movie-card-container">{props.movies.map((movie) => <MovieCard key={movie.id} movies={movie}/>)}</div>
        )}
      </>
    )
  }
  
  export default MovieGrid