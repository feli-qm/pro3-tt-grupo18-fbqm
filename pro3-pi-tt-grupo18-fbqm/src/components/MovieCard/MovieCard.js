import './MovieCard.css';
import { Component } from "react";
import { Link } from 'react-router-dom';
import FavButton from '../FavButton/FavButton';

class MovieCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showExtra: false
        }
    }

    handleShowExtra(){
        this.setState({
            showExtra: !this.state.showExtra
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
                    <Link to={`/detalle/id/${id}`}><h2>{title}</h2></Link>

                    <button className='btn-ver-mas' onClick={() => this.handleShowExtra()}>{this.state.showExtra ? "Ocultar descripcion": "Ver descripcion"}</button><br />
                    <p className={this.state.showExtra ? "show":"hide"}>{overview}</p>

                    <Link to={`/detalle/id/${id}`}><button className='btn-detalle'>Ir a detalle</button></Link>

                    <FavButton id={id} />
                </div>
            </article>
        )
    }
}

export default MovieCard;