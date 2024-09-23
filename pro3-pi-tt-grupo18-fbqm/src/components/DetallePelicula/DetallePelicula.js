// import '../PopularCard/PopularCard.css';
import { Component } from "react";
import { options } from "../../options";
import Loading from "../Loading/Loading";

class DetallePelicula extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pelicula: null,
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
                <section className="movie-card">
                    <div className='movieCard-content'>
                        <h2><strong>{pelicula.title}</strong></h2><br />
                        <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={pelicula.title} /><br />
                        <p><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                        <p><strong>Calificación:</strong> {pelicula.vote_average}/10</p>
                        <p><strong>Duración:</strong> {pelicula.runtime}</p>
                        <p><strong>Sinopsis:</strong> {pelicula.overview}</p>
                        <p><strong>Género:</strong> {pelicula.genres.map(genero => genero.name).join(', ')}</p>
                    </div>
                </section>
            )
        }
    }
}

export default DetallePelicula;

