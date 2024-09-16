import React, { Component } from 'react'

class Favoritos extends Component {
  constructor(props) {
    super(props)

    this.setState = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState
    const parsedArray = JSON.parse(storage)
    Promise.all(

      parsedArray.map((id) => {
        //COMPLETAR
        fetch('URL de movie')
          .then(response => response.json())
          .then(movie =>
            this.setState({
              movies: [...this.state.movies, movie]
            })
          )
      })
    )
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div>{!this.state.isLoading ? "GRILLA" : "Loading..."} </div>
    )
  }
}

        export default Favoritos
