// import '../PopularCard/PopularCard.css';
import { Component } from "react";

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

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US`)
            .then(response => response.json())
            .then(data => {
                this.setState({ pelicula: data })
            })
            .catch(err => console.log(err))
    }

    render(){

        const { pelicula } = this.state;

        // creamos un if por si:
        //   (1) no existe la pelicula
        //   (2) o los detalles de la pelicula se estan/siguen cargandose
        if (!pelicula){
            return <p>Cargando los detalles de la pelicula...</p>
        }

        // si no es así, mostramos el detalle de la película
        // buscamos la información que necesitamos mostrar
        const { title, poster_path, vote_average, release_date, runtime, overview } = pelicula;
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

        // creamos una array con los generos de la pelicula
        // const generos = genres.map(genre => genre.name).join(", ");
        // <p>Generos: {generos}</p>
        // genres


        return (
            <section className="movie-detail">
                <div className='detail-content'>
                    <h2>{title}</h2><br />
                    <img src={imgUrl} alt={title} /><br />
                    <p>Fecha de estreno: {release_date}</p><br/>
                    <p>Calificación: {vote_average}/10</p>
                    <p>Duración: {runtime}</p><br/>
                    <p>Sinopsis: {overview}</p>
                </div>
            </section>
        )
    }
}

export default DetallePelicula;

