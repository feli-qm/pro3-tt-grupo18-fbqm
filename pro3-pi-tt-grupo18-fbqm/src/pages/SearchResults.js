import { Component } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";

class SearchResults extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            movielist: [],
            cargando: true
        }
    }

    componentDidMount(){
        const api_key = "56c25df0bc04ec0dd18325a8ea74e10c";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${this.props.location.state.valor}&page=1`;

        this.setState({cargando: true})

        fetch(url)
            .then( response => response.json() )
            .then( (data) => {
                console.log(data);
                if (data.results) {
                    this.setState({movielist: data.results});
                } else {
                    console.log('No se encuentra esa pelicula');   
                }
            })
            .catch(err => {
                console.log('error encontrado en search results: ', err)
                this.setState({cargando: false})
            })
    }

    render() {
        console.log(this.state);

        return (
            <>
                <h2>Resultado de búsqueda: {this.props.location.state?.valor}</h2>
                <MovieGrid movies={this.state.movielist}/>
            </>
        )
    }
};

export default SearchResults;