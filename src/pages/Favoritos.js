import React, { Component } from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'

class Favoritos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      Promise.all(
        parsedArray.map((id) =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=56c25df0bc04ec0dd18325a8ea74e10c`)
            .then((response) => response.json()))
      ).then((movie) => {
        this.setState({
          movies: movie,
        });
      })
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.length > 0 ? (<MovieGrid movies={this.state.movies} />) : (<p>No agregaste peliculas en favs</p>)}
      </>
    );
  }
}

export default Favoritos;