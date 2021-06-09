import "./App.css";
import Box from "./component/box";
import { useState, useEffect } from "react";

const App = () => {
  // Initial State
  const defaultstate = ["", "", "", "", "", "", "", "", ""];

  // State
  const [value, setValue] = useState(defaultstate);
  const [player, setPlayer] = useState(false);

  // UpdateHandler
  const UpdateHandler = (val) => {
    let string = Array.from(value);
    string[val] = player ? "X" : "O";
    setValue(string);
    setPlayer(!player);
  };

  // Winner Algorithm
  const checkWinner = () => {
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
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  };

  // Use Effect
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      console.log("Winner", winner);
      if (winner === "O") alert("Soni  Won The Game");
      if (winner === "X") alert("Rahul Won The Game");
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <div className="home">
      <div className="header">
        <h1>Tic Toe Game</h1>
      </div>
      <div className="user">
        <p className="player">X: Player is Rahul</p>
        <p className="player">O: Player is Soni</p>
      </div>
      <div className="main">
        <div className="row">
          <Box currentValue={value[0]} onClick={() => UpdateHandler(0)} />
          <Box currentValue={value[1]} onClick={() => UpdateHandler(1)} />
          <Box currentValue={value[2]} onClick={() => UpdateHandler(2)} />
        </div>
        <div className="row">
          <Box currentValue={value[3]} onClick={() => UpdateHandler(3)} />
          <Box currentValue={value[4]} onClick={() => UpdateHandler(4)} />
          <Box currentValue={value[5]} onClick={() => UpdateHandler(5)} />
        </div>
        <div className="row">
          <Box currentValue={value[6]} onClick={() => UpdateHandler(6)} />
          <Box currentValue={value[7]} onClick={() => UpdateHandler(7)} />
          <Box currentValue={value[8]} onClick={() => UpdateHandler(8)} />
        </div>
        <button
          className="btn  btn-primary my-4 mx-0"
          onClick={() => setValue(defaultstate)}
        >
          Clear The Box
        </button>
      </div>
    </div>
  );
};

export default App;
