//versao com Square como um FUCNTIONAL COMPONENT

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Em React, um componente é funcional quando só precisa de um metodo render e naõ precisa manter seu próprio estado.
//Ao inves de extender React.Componen, usamos apenas uma function que tem como input props e que retorna o que deve ser renderizado.


function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  );
}
//In a class, we used an arrow function to access the correct this value, but in a functional component we don’t need to worry about this.

class SquareOld extends React.Component {
  render() {

    return (
      //<button className="square" onClick={function() { alert('click'); }}> //sem arrow function
      //<button className="square" onClick={() => alert('click')}> //Com arrow function
      <button 
        className="square" 
        onClick={() => this.props.onClick()} 
        >
        {this.props.value} 
      </button>
    //{this.state.value}  => square altera o proprio estado
    );

    //agora o Square é um controlled component pois recebe valores do Board e informa ao Board quando há um click
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null), //este estado é privado do board
      xIsNext: true,
    };
  }

  handleClick(i){
    const quadrados = this.state.squares.slice(); //Imutabilidade = crio uma copia do array de estados

    //se alguem ganhou OU o a posicao já foi usada, não permite clique
    if (calcularVencedor(quadrados) || quadrados[i]) {
      return;
    }
    quadrados[i] =  this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: quadrados, 
      xIsNext: !this.state.xIsNext,
    });
    
    
  }

  renderSquare(i) {
    // return <Square value={i} />; ///board passando uma prop para square

    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />  //board passa ao square duas props: o estado do proprio square e o onClick

      //In React, however, it is a convention to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.
    );
  }

  renderHeader() {
    return (
      <Header>
      </Header>
    );
  }

  render() {
    const vencedor = calcularVencedor(this.state.squares);
    let status;
    if (vencedor) {
      status = 'Vencedor: ' + vencedor;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="header">{this.renderHeader()}</div>

        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() { 
      return (
        <p className="header">JOGO DA VELHA DA PAULA =^.^=
        </p>
      );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calcularVencedor(quadrados) {
  const linhas = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6],
  ];

  for (let i = 0; i< linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
      return quadrados[a];
    }
  }
  return null;
}