import { Component } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { options } from "../options";

class EnCartel extends Component {
  constructor(props){
      super(props)
      this.state = {
          movielist: []
      }
  }

  componentDidMount(){

    const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=56c25df0bc04ec0dd18325a8ea74e10c';

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
        <h2>Peliculas en cartel</h2>
        <MovieGrid movies={this.state.movielist}/>
      </div>
    </>
  )
}
}

export default EnCartel;