import { Component } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { options } from "../options";

class MasPopulares extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movielist: [],
      filteredMovies: [],
      filterValue: "",
      actualPage: 1
    }
  }

  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`; // prop para decidir entre popular y cartelera para reutilizar el comp

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movielist: data.results,
          filteredMovies: data.results,
          actualPage: this.state.actualPage + 1
        })
      })
      .catch(err => console.error(err))
  }

  handleFilteredChange(e) {
    const userValue = e.target.value;

    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.movielist.filter(movie => movie.title.toLowerCase().includes( userValue.toLowerCase() ))
    })
  }

  handleResetFilter(){
    this.setState({
      filterValue:'',
      filteredMovies: this.state.movielist
    })
  }

  handleLoadMore() {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`; // prop para decidir entre popular y cartelera para reutilizar el comp

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movielist: this.state.movielist.concat(data.results),
          filteredMovies: this.state.movielist.concat(data.results),
          actualPage: this.state.actualPage + 1
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <div className="filter-container">
          <h2 className="page-name">Peliculas mas populares</h2>
          
          <div className="input-container">
            <input type="text" onChange={(e) => this.handleFilteredChange(e)} value={this.state.filterValue} />
            <button onClick={() => this.handleResetFilter()}>Reset filter</button>
          </div>

          <MovieGrid movies={this.state.filteredMovies} />
          <button className="btn-cargar-mas" onClick={() => this.handleLoadMore()}>Cargar mas</button>
        </div>
      </>
    )
  }
}

export default MasPopulares;