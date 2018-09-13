import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lista: [],
      valor: ""
    }
  }

  guardarItem (evento) {
    const valor = evento.target.value;
    this.setState({
      valor
    })

      console.log(valor)
  }

  adicionarItem () {

      console.log('oi')

    const lista = [
      ...this.state.lista,
      this.state.valor
    ];
    this.setState({
      lista: lista
    })
  }


  render() {
    return (
      <div>
        <h1>To do List</h1>
        <input type="text" onChange={this.guardarItem.bind(this)}/>
        <button onClick={this.adicionarItem.bind(this)}>
          Adicionar
        </button>
        <ul> 
          {
            this.state.lista.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
      
    );
  }
}

export default App;
