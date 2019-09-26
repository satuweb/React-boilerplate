import React from 'react';
class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {acceso: true};
  
      // Necessario per accedere al corretto valore di `this` all'interno della callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        acceso: !state.acceso
      }));
    }
  
    render() {
      return (
        <button className={`button ${this.props.classStyle}`} onClick={this.handleClick}>
          {this.state.acceso ? 'Acceso' : 'Spento'}
        </button>
      );
    }
  }

  export default Button;