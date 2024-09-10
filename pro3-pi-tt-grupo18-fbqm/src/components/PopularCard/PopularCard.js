import '../PopularCard/PopularCard.css';
import { Component } from "react";
import { Link } from 'react-router-dom';

class PopularCard extends Component {
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
        const {title, poster_path, overview} = this.props.populares;
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return (
            <article className="movie-card">
                <div className='movieCard-content'>
                    <img src={imgUrl} alt=""/>
                    <h2>{title}</h2>
                    <p className={this.state.showExtra ? "show":"hide"}>{overview}</p>
                    <button onClick={() => this.handleShowExtra()}>{this.state.showExtra ? "Ocultar descripcion": "Ver descripcion"}</button>
                    <Link to="/detalle"><button>Ir a detalle</button></Link>
                    <button>Agregar/quitar de favoritos</button>

                </div>
            </article>
        )
    }
}

export default PopularCard;