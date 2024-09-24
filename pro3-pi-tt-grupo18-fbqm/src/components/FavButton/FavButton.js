import { Component } from "react";
import './FavButton.css'

class FavButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            esFavorito: false
        }
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.id)
            this.setState({
                esFavorito: estaEnFavoritos
            })
        }
    }
    
    agregarFavorito(){
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
    
        } else {
            const primerMovie = [this.props.id]
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
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({
            esFavorito: false
        })
    }
    
    render() {
    return (
        <>
            <button className="favoritos-boton" onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>{!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button><br />
        </>
    )
}
}

export default FavButton;