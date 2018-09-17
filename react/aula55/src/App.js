// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// Continuação do ToDoist
// 1. Criar um componente Input;
// 2. Criar um componente Button;
// 3. Criar componente mestre App;
// 4. No componente Input, passar a função onChange
// como prop;
// 5. No componente Button, passar a função onClick como
// prop.
// 6. Ao clicar no botão, inserir no estado do “App” o valor
// que está no input.

import React from 'react';
import Botao from './botao.js'
import Input from './input.js'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      melancia: [],
      valor: ""
    }
  }

abacate (evento) {
  const valor = evento.target.value;
  this.setState({
    valor

})
console.log(valor)
}

clicado () {
  // console.log ('oi')

  const lista = [
    ...this.state.melancia,
    this.state.valor
  ]

  this.setState ({
    melancia: lista
  })

}

  render () {
    return (
      <div>
        <h1>To do List</h1>
        
        <Input
          banana={this.abacate.bind(this)}
        />
        
        <Botao rabanete='Enviar' cliquei={this.clicado.bind(this)} />
        <ul> 
          {
            this.state.melancia.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>

    )
  }

}

export default App;

/* <div>
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
</div> */
