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
        console.log(this.props.populares);
        
        const {id, title, poster_path, overview} = this.props.populares;
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return (
            <article className="movie-card">
                <div className='movieCard-content'>
                    <Link to={`/detalle/id/${id}`}><img src={imgUrl} alt=""/></Link><br />
                    <Link to={`/detalle/id/${id}`}><h2>{title}</h2></Link><br />
                    <p className={this.state.showExtra ? "show":"hide"}>{overview}</p><br />
                    <button onClick={() => this.handleShowExtra()}>{this.state.showExtra ? "Ocultar descripcion": "Ver descripcion"}</button><br />
                    <Link to={`/detalle/id/${id}`}><button>Ir a detalle</button></Link><br />
                    <button>Agregar/quitar de favoritos</button><br />
                </div>
            </article>
        )
    }
}

export default PopularCard;