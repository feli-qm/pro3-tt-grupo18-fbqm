import { Component } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import Loading from '../components/Loading/Loading'

class SearchResults extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            movielist: [],
            cargando: true,
            error: null
        }
    }

    componentDidMount(){
        const api_key = "56c25df0bc04ec0dd18325a8ea74e10c";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${this.props.location.state.valor}&page=1`;

        this.setState({cargando: true})

        fetch(url)
            .then( response => response.json() )

            .then( (data) => {

                if (data.results) {
                    this.setState({
                        movielist: data.results,
                        cargando: false
                    });
                } 
                else {
                    this.setState({
                        movielist: [],
                        cargando: false
                    })  
                }
            })

            .catch(err => {
                console.error('El error encontrado en search results: ', err)
                this.setState({
                    cargando: false,
                    error: "Error al buscar películas"
                })
            })
    }

    render() {
        const { movielist, cargando, error } = this.state;

        return (
            <>
                <section>
                    <h2>Resultado de búsqueda: {this.props.location.state?.valor}</h2>

                    {cargando ? 
                            (<Loading />) 
                        : error ? 
                            (<p>{error}</p>)
                        : (movielist.length > 0) ? 
                            (<MovieGrid movies={this.state.movielist} />)
                        : (<p>No se encontraron resultados para tu búsqueda</p>)
                    }
                </section>
                
            </>
        )
    }
};

export default SearchResults;