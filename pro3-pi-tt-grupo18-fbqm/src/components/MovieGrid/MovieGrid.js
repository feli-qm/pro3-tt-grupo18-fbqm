import "./MovieGrid.css";
import MovieCard from "../MovieCard/MovieCard";
import { Component } from "react";
import { options } from "../../options";
import { Link } from "react-router-dom";

const MovieGrid = (props) => {
    return (
      <>
      {props.movies.map((movie) => <MovieCard movies={movie}/>)}
      </>
    )
  }
  
  export default MovieGrid

    /*render(){
        return(
            <section className="movieCard-grid">
                <div>
                    <Link to="/maspopulares">Ver todas</Link>
                </div>
                <div className="movie-card">
                    {
                        this.state.movies.length > 0 ?
                        this.state.movies.map((movie, index) =>
                        <MovieCard movies={movie} key={index} />)
                        :
                        <p>Cargando...</p>
                    }
                </div>
            </section>
        )
    }
}

export default Movies;*/