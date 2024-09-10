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

    vistaDescripcion(){
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
                    <Link to={`/maspopulares`}></Link>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <p className={this.state.showExtra ? "show":"hide"}>Ver mas</p>
                    <button onClick={() => this.handleShowExtra()}>{this.state.showExtra ? "Ver menos": "Ver mas"}</button>
                </div>
            </article>
        )
    }
}

export default PopularCard;