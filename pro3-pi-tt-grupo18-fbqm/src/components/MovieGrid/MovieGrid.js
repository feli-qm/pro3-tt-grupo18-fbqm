import "./MovieGrid.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = (props) => {
    return (
      <>
      <div className="movieCard-grid movie-card">{props.movies.map((movie) => <MovieCard movies={movie}/>)}</div>
      </>
    )
  }
  
  export default MovieGrid