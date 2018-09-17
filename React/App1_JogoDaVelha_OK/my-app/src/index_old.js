//versao com square como um CONTROLLED COMPONENT


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
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
    };
  }

  handleClick(i){
    const quadrados = this.state.squares.slice(); //Imutabilidade = crio uma copia do array de estados
    quadrados[i] = 'X';
    this.setState({squares: quadrados});
    
    
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

  render() {
    const status = 'Next player: X';

    return (
      <div>
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
