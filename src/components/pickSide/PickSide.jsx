import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../AppContextProvider";
import "./pickSide.css";
export default function PickSide() {
  const { dispatch, state } = useApp();
  const [playerOneMove, setplayerOneMove] = useState(0);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (playerOneMove === 0) {
      alert("Please choose one move");
    }

    if (playerOneMove !== 2) {
      navigate("/gameboard");
      return;
      //if player one selects X(option 1) no change required as it's default case
    }

    dispatch({
      type: "SET_PLAYER_STATUS",
      payload: [
        { ...state.playerOne, move: 2 },
        { ...state.playerTwo, move: 1 },
      ],
    });

    navigate("/gameboard");
  };
  return (
    <div className="pickSide">
      <h1>Pick your side {state.playerOne.name}</h1>
      <div className="optionsWrap">
        <label onClick={() => setplayerOneMove(1)}>
          <img
            src="/assets/xxs.png"
            alt="X"
            className={playerOneMove === 2 ? "blur" : ""}
          />
          <input type="radio" name="pickSide" value={1} />
        </label>

        <label onClick={() => setplayerOneMove(2)}>
          <img
            className={playerOneMove === 1 ? "blur" : ""}
            src="/assets/oo.png"
            alt="O"
          />
          <input type="radio" name="pickSide" value={2} />
        </label>
      </div>

      <button onClick={onClickHandler} className="continue ">
        Continue
      </button>
    </div>
  );
}
