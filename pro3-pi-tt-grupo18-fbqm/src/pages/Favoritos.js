import React, { Component } from 'react'
import MovieCard from '../components/MovieCard/MovieCard'

class Favoritos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    const storage = localStorage.getItem('favoritos')
    const parsedArray = JSON.parse(storage)
    Promise.all(
      parsedArray.map((id)=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=56c25df0bc04ec0dd18325a8ea74e10c`)
            .then(response => response.json())
          .then(movie =>
            {this.setState({
              movies: [...this.state.movies, movie]
            })
            console.log(movie)}
          )
      }) 
    )
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.isLoading ? this.state.movies.map(movie => <MovieCard key={movie.id} movies={movie}/>) : <p>Loading...</p>}
      </div>
    )
  }
}

export default Favoritos