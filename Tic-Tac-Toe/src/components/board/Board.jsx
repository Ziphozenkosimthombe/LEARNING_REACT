import { useState } from "react";
import Square from "../square/Square";
const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if(squares[i] || calculateWinner(squares)){
      return
    }
    const Nextsquare = [...squares];
    if (xIsNext){ 
      Nextsquare[i] = 'X';
    }else{

      Nextsquare[i] = 'O';
    }
    setSquares(Nextsquare);
    setXIsNext(!xIsNext);
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = `Player ${winner} win the game!!!.....`;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }else if (winner === null && squares.every((square) => square !== null)){
    status = `It's a draw!`;
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  }
  else{
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  return (
    <>  
    <div className="flex justify-center font-bold text-4xl">{status}</div>
    <div className="flex justify-center mt-10">
      <div className="board-row after:clear after:content-none after:block">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row after:clear after:content-none after:table">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
      </div>
      <div className="board-row after:clear after:content-none after:table">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
      </div>  
    </div>
    </>
   
  )
}

export default Board;



const calculateWinner = (squares) =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i of lines){
    const [a, b, c] = i;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}