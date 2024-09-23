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
        //const numeroPelis = this.props.limit !== undefined ? this.props.limit : data.results.length;
        this.setState({
          movielist: data.results,
          filteredMovies: data.results,
          actualPage: this.state.actualPage + 1
        })
      })
      .catch(err => console.error(err))
  }

  handleLoadMore() {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`; // prop para decidir entre popular y cartelera para reutilizar el comp

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        //const numeroPelis = this.props.limit !== undefined ? this.props.limit : data.results.length;
        this.setState({
          movielist: this.state.movielist.concat(data.results),
          filteredMovies: this.state.movielist.concat(data.results),
          actualPage: this.state.actualPage + 1
        })
      })
      .catch(err => console.error(err))
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value
    })
    this.filterMovies()
  }

  filterMovies() {
    if (this.state.searchQuery === '') {
      return this.state.movielist
    }

    const filteredMovies = this.state.movielist.filter((movie) => movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))

    console.log(filteredMovies)

  }

  render() {
    return (
      <>
        <div>
          <h2>Peliculas mas populares</h2>
          <input type="text" value={this.state.searchQuery} onChange={(e) => this.handleChange(e)} />
          <MovieGrid movies={this.state.movielist} />
          <button onClick={() => this.handleLoadMore()}>Cargar mas</button>
        </div>
      </>
    )
  }
}

export default MasPopulares;