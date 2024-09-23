import { Component } from "react";

class SearchForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      valor: ''
    };
  }

  handleInputChange(event){
    this.setState({
      valor: event.target.value
    })
  }

  handleInputSubmit(){
    this.props.history.push('/resultadoBusqueda/', { valor: this.state.valor })
  }

  render() {
    console.log(this.state.valor);
    
    return (
      <>
        <h2>Formulario de busqueda</h2>
        <form onSubmit={(event) => this.handleInputSubmit(event)}>
          <input onChange={ (event) => this.handleInputChange(event) } type='text' name="valor" value={this.state.valor} />
          <button onClick={ () => this.handleInputSubmit() }>Buscar</button>
        </form>
      </>
    );
  }
}

export default SearchForm;