import { useState } from "react";
import App from "./App";
export default function Game() {
    const [history, setHistory] = useState( [Array(9).fill(null)] );
    const [currentMove, setCurrentMove] = useState(0)
    const currsquares = history[ currentMove ]
    const xNext = currentMove % 2 === 0


    function handleplay(squares){
        const nextHistory = [...history.slice(0, currentMove + 1), squares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    const moves = history.map((x, ind) => {
        let words;
        if(ind <= 0) words = "Go To Game Start";
        else{
            words =    `Go to move #${ind}`
        }
        return (
            <li className="listele" onClick = {() => jumpto(ind)} key = {ind}> {words}</li>
        )
    })

    function jumpto(ind){
        setCurrentMove(ind)
    }


  return (
    <div className="game">
      <div className="game-board">
        <App xNext = {xNext} onPlay = {handleplay} squares = {currsquares} />
      </div>
      <div className="time-travel">
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
function changecursor(){
    document.style.cursor = "pointer"
}