import "./MovieGrid.css";
import MovieCard from "../MovieCard/MovieCard";
import { Component } from "react";
import { options } from "../../options";
import { Link } from "react-router-dom";

const MovieGrid = (props) => {
    return (
      <>
      <div className="movieCard-grid movie-card">{props.movies.map((movie) => <MovieCard movies={movie}/>)}</div>
      </>
    )
  }
  
  export default MovieGrid