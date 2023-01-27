import { useState } from "react";
import Square from "./Square";
export default function App( {xNext, onPlay, squares} )  {

  function handleclick(i) {
    if(squares[i] || getWinner(squares)) return; 
    const newsquares = squares.slice();
    newsquares[i] = xNext ? "X" : "O";
    onPlay(newsquares);
  }

  let status; 
  const winner = getWinner(squares)
    if(winner){
      status = ('Winner : ' + winner + " !!")
    }else{
      status = ('Next player: ' + (xNext ? 'X' : 'O'))
    }

  return (
      <div className="game">
        <h1> Tic - Tac - Toe </h1>
        <div className="status">{status}</div>
        <div className="board">
        <div className="board-row">
          <Square id={0} value={squares[0]} onSquareClick={() => handleclick(0)} />
          <Square id={1} value={squares[1]} onSquareClick={() => handleclick(1)} />
          <Square id={2} value={squares[2]} onSquareClick={() => handleclick(2)} />
        </div>
        <div className="board-row">
          <Square id={3} value={squares[3]} onSquareClick={() => handleclick(3)} />
          <Square id={4} value={squares[4]} onSquareClick={() => handleclick(4)} />
          <Square id={5} value={squares[5]} onSquareClick={() => handleclick(5)} />
        </div>
        <div className="board-row">
          <Square id={6} value={squares[6]} onSquareClick={() => handleclick(6)} />
          <Square id={7} value={squares[7]} onSquareClick={() => handleclick(7)} />
          <Square id={8} value={squares[8]} onSquareClick={() => handleclick(8)} />
        </div>
      </div>
      </div>
      
  );
}

function getWinner(squares){
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ]
  for(let i = 0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
