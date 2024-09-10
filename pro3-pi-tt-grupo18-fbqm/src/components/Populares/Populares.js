import "./Populares.css";
import PopularCard from "../PopularCard/PopularCard";
import { Component } from "react";
import { options } from "../../options";


class Populares extends Component {
    constructor(props){
        super(props)
        this.state = {
            populares: []
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => this.setState({
            populares: data.results.slice(0,5)
        }))
        .catch(err => console.error(err))
    }
    render(){
        return(
            <section className="movieCard-grid">
                <div className="movie-card">
                    {
                        this.state.populares.length > 0 ?
                        this.state.populares.map((popular, index) =>
                        <PopularCard populares={popular} key={index} />)
                        :
                        <p>Cargando...</p>
                    }
                </div>

            </section>
        )
    }
}

export default Populares;