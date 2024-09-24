import { Component } from "react";
import { options } from "../../options";
import Loading from "../Loading/Loading";
import FavButton from "../FavButton/FavButton";
import './DetallePelicula.css';

class DetallePelicula extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pelicula: null
        };
    }

    componentDidMount() {

        // busco el ID en la ruta de navegación
        const { id } = this.props.match.params;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                this.setState({ pelicula: data })
            })
            .catch(err => console.log(err))
    }

    render(){

        const { pelicula } = this.state;

        console.log('pelicula: ', pelicula);
        
        if (!pelicula){
            return <Loading />
        }
        else {
            console.log("pelicula.genres: ", pelicula.genres);
            
            return (
                <>
                <h2 className="page-name">Detalle de la pelicula</h2>
                <section className="movie-detail-container">
                    <div className="movie-image">
                        <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={pelicula.title} />
                    </div>
                    <div className="movie-details">
                        <h2><strong>{pelicula.title}</strong></h2>
                        <p><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                        <p><strong>Calificación:</strong> {pelicula.vote_average}/10</p>
                        <p><strong>Duración:</strong> {pelicula.runtime} minutos</p>
                        <p><strong>Sinopsis:</strong> {pelicula.overview}</p>
                        <p><strong>Género:</strong> {pelicula.genres.map(genero => genero.name).join(', ')}</p>
                        <FavButton id={pelicula.id} />
                    </div>
                </section>
                </>
            );
            
        }
    }
}

export default DetallePelicula;