import PopularCard from "../PopularCard/PopularCard";
import { Component } from "react";

class Populares extends Component {
    constructor(props){
        super(props)
        this.state = {
            populares: []
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState({
            populares: data.results
        }))
        .catch(err => console.error(err))
    }
    render(){
        return(
            <section className="card-container">
                <div className="character-card">
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