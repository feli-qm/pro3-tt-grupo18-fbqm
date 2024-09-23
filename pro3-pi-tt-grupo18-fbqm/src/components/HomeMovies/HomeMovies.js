import MovieCard from "../MovieCard/MovieCard";
import { Component } from "react";
import { options } from "../../options";
import { Link } from "react-router-dom";

class HomeMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }
    
    componentDidMount(){

        const apiUrl = this.props.url; // prop para decidir entre popular y cartelera para reutilizar el comp

        fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            const numeroPelis = this.props.limit !== undefined ? this.props.limit : data.results.length;
            this.setState({
                movies: data.results.slice(0,numeroPelis)
            })
        })
        .catch(err => console.error(err))
    }

    render(){
        return(
            <>
                <section className="movieCard-grid">
                    <div>
                        <Link to={this.props.link}>Ver todas</Link>
                    </div>
                    <div className="movie-card-container">
                        {
                            this.state.movies.length > 0 ?
                            this.state.movies.map((movie, index) =>
                            <MovieCard movies={movie} key={index} />)
                            :
                            <p>Cargando...</p>
                        }
                    </div>
                </section>
            </>
        )
    }
}

export default HomeMovies;