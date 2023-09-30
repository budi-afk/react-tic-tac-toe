/* eslint-disable react/prop-types */
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
    // cek apakah board sudah ada isinya / sudah ada pemenangnya
    if (squares[i] || calculateWinner(squares)) return;

    // duplikat array
    const nextSquares = squares.slice();

    // cek apakah nextX = true, jika ya nilainya "X", jika tidak nilainya "O"
    nextSquares[i] = nextX ? "X" : "O";

    // ganti dengan array yang baru
    setSquares(nextSquares);

    // ubah nilai nextX jika "true" kemudian jadi "false", dan sebaliknya
    setNextX(!nextX);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = `Winner is : ${winner}`;
  } else {
    status = "Now turn : " + (nextX ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] === squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return false;
}
