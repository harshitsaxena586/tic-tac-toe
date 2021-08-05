import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../AppContextProvider";
import ScoreHead from "../scoreHead/ScoreHead";
import Square from "../square/Square";
import "./gameBoard.css";
export default function GameBoard() {
  const { state, dispatch } = useApp();

  const onClickHandler = (index) => {
    let currentValue = state.squares[index];
    if (currentValue !== 0) {
      return;
    } else if (state.currentTurn === 1) {
      currentValue = 1;
    } else currentValue = 2;

    dispatch({ type: "UPDATE_SQUARE", payload: { currentValue, index } });
  };

  return (
    <div className="gameBoardWrap">
      <ScoreHead />
      <div className="board shadow">
        {state.squares.map((square, idx) => {
          return (
            <Square
              key={idx}
              index={idx}
              value={square}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </div>
      <div>
        <Link to="/">
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="settings shadow"
          >
            <img src="/assets/set.png" alt="Settings" />
          </button>
        </Link>
      </div>
    </div>
  );
}
