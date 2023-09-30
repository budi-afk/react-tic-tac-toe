import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function Board() {
  // state untuk membuat 9 array kosong
  const [squares, setSquares] = useState(Array(9).fill(""));

  // state untuk nilai board
  const [nextX, setNextX] = useState(true);

  function handleClick(i) {
    // cek apakah board sudah ada isinya
    if (squares[i]) return;

    // duplikat array
    const nextSquares = squares.slice();

    // cek apakah nextX = true, jika ya nilainya "X", jika tidak nilainya "O"
    nextSquares[i] = nextX ? "X" : "O";

    // ganti dengan array yang baru
    setSquares(nextSquares);

    // ubah nilai nextX jika "true" kemudian jadi "false", dan sebaliknya
    setNextX(!nextX);
  }
  return (
    <div className="board">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  );
}
