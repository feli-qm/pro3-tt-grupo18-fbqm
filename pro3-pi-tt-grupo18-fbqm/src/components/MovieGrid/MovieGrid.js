import Loading from '../Loading/Loading';
import MovieCard from "../MovieCard/MovieCard";
import './MovieGrid.css'

const MovieGrid = (props) => {

    return (
      <>
        { (!props.movies) ? (
          <Loading />
        ) : (
          <div className="movieCard-grid">
            <div className="movie-card-container">
              {props.movies.map((movie) => <MovieCard key={movie.id} movies={movie}/>)}  
            </div>
          </div>
        )}
      </>
    )
  }
  
  export default MovieGrid