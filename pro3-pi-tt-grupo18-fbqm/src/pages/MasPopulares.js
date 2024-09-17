import { Component } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { options } from "../options";

class MasPopulares extends Component {
  constructor(props){
      super(props)
      this.state = {
          movielist: []
      }
  }

  componentDidMount(){

    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=1'; // prop para decidir entre popular y cartelera para reutilizar el comp

    fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
        const numeroPelis = this.props.limit !== undefined ? this.props.limit : data.results.length;
        this.setState({
            movielist: data.results.slice(0,numeroPelis)
        })
    })
    .catch(err => console.error(err))
}

render(){
  return (
    <>
      <div>
        <h2>Peliculas mas populares</h2>
        <MovieGrid movies={this.state.movielist}/>
      </div>
    </>
  )
}
}

export default MasPopulares;