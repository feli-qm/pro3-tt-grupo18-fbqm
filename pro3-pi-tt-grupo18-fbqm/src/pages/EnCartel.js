import { Component } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { options } from "../options";

class EnCartel extends Component {
  constructor(props){
      super(props)
      this.state = {
          movielist: [],
          page: 1
      }
  }

  componentDidMount(){
    this.loadMovies()
}

loadMovies(){
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=56c25df0bc04ec0dd18325a8ea74e10c&page=${this.state.page}`; // prop para decidir entre popular y cartelera para reutilizar el comp

    fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
        const numeroPelis = this.props.limit !== undefined ? this.props.limit : data.results.length;
        this.setState({
            movielist: data.results.slice(0,numeroPelis),
            page: this.state.page+1
        })
    })
    .catch(err => console.error(err))
}

render(){
  return (
    <>
      <div>
        <h2>Peliculas en cartel</h2>
        <MovieGrid movies={this.state.movielist}/>
        <button onClick={()=>this.loadMovies()}>Cargar mas</button>
      </div>
    </>
  )
}
}

export default EnCartel;