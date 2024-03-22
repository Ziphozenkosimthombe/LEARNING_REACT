import { useState } from 'react';
const Square = ({value, onSquareClick}) => {
  return (
    <div>
        <button className="border border-red-300 text-center font-bold text-6xl float-left bg-slate-200 mr-1 mt-1 p-0 h-32 w-32"
        onClick={onSquareClick}
        >{value}</button>
    </div>
  )
}

export default Square;