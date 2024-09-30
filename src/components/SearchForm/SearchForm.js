import { Component } from "react";
import './SearchForm.css'

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: ''
    };
  }

  handleInputChange(event) {
    this.setState({
      valor: event.target.value
    })
  }

  handleInputSubmit() {
    this.props.history.push('/resultadoBusqueda/', { valor: this.state.valor })
  }

  render() {

    return (
      <>
        <div className="search-form-container">
          <h2>Buscador de Peliculas</h2>
          <form className="search-form" onSubmit={(event) => this.handleInputSubmit(event)}>
            <input
              onChange={(event) => this.handleInputChange(event)}
              type='text'
              name="valor"
              value={this.state.valor}
            />
            <button onClick={() => this.handleInputSubmit()}>Buscar</button>
          </form>
        </div>
      </>
    );
  }
}

export default SearchForm;