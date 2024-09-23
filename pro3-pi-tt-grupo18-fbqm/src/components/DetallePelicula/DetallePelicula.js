import { Component } from "react";
import { options } from "../../options";
import Loading from "../Loading/Loading";
import FavButton from "../FavButton/FavButton";

class DetallePelicula extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pelicula: null,
            esFavorito: false
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

        // FAVORITO!!
        const storge = localStorage.getItem('favoritos')
        if (storge !== null){
            const parsedArray = JSON.parse(storge)
            console.log('this.props: ', this.props);
            
            const estaEnFavoritos = parsedArray.includes(this.props.match.params.id)
            this.setState({
                esFavorito: estaEnFavoritos
            })
        }
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
                        <FavButton id={pelicula.id}/>
                    </div>
                </section>
            )
        }
    }
}

export default DetallePelicula;

