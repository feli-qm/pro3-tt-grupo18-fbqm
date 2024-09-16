import './MovieCard.css';
import { Component } from "react";
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            esFavorito: false
        }

        this.state = {
            showExtra: false
        }
    }

    handleShowExtra(){
        this.setState({
            showExtra: !this.state.showExtra
        })
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if (storage !== null){
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
            this.setState({
                esFavorito: estaEnFavoritos
            })
        }
    }

    agregarFavorito(){
        const storage = localStorage.getItem('favoritos')
        if (storage !== null){
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.movie.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)

        }else{
            const primerMovie = [this.props.movie.id]
            const stringArray = JSON.stringify(primerMovie)
            localStorage.setItem('favoritos', stringArray)
        }
        this.setState({
            esFavorito: true
        })
    }

    sacarFavorito(){
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
        const stringArray = JSON.stringify(favoritosRestantes)
            localStorage.setItem('favoritos', stringArray)
        this.setState({
            esFavorito: false
        })
    }

    render(){
        console.log(this.props.movies);
        
        const {id, title, poster_path, overview} = this.props.movies;
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return (
            <article className="movie-card">
                <div className='movieCard-content'>
                    <Link to={`/detalle/id/${id}`}><img src={imgUrl} alt=""/></Link><br />
                    <Link to={`/detalle/id/${id}`}><h2>{title}</h2></Link><br />
                    <p className={this.state.showExtra ? "show":"hide"}>{overview}</p><br />
                    <button onClick={() => this.handleShowExtra()}>{this.state.showExtra ? "Ocultar descripcion": "Ver descripcion"}</button><br />
                    <Link to={`/detalle/id/${id}`}><button>Ir a detalle</button></Link><br />
                    <button onClick={()=> !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito ()}>{!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button><br />
                </div>
            </article>
        )
    }
}

export default MovieCard;