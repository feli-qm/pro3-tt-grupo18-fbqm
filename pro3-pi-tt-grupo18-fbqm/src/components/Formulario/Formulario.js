import { Component } from "react";

class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {valor: ''};
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    handleChange(event) {
      this.setState({valor: event.target.value}, ()=>console.log(event));
    }
  
    render() {
      return (
       <form onSubmit={(event)=>this.handleSubmit(event)}>
         <label></label>
         <input type="text" onChange={(event)=>this.handleChange
            (event)} value={this.state.valor} />
         <input type="submit" value="Submit" />
       </form>
      );
    }
  }
  
  export default Formulario