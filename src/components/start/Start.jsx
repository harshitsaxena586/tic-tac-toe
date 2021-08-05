import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../AppContextProvider";
import "./start.css";
export default function Start() {
  const { dispatch, state } = useApp();
  const [playerOne, setplayerOne] = useState("");
  const [playerTwo, setplayerTwo] = useState("");
  const navigate = useNavigate();
  const onClickHandler = () => {
    dispatch({
      type: "SET_PLAYER_STATUS",
      payload: [
        { ...state.playerOne, name: playerOne },
        { ...state.playerTwo, name: playerTwo },
      ],
    });

    navigate("/pickside");
  };

  return (
    <div className="start">
      <img src="/assets/fg.png" alt="tic tac toe" />
      <h1>Enter Player Names</h1>
      <input
        autofocus
        placeholder="player one"
        onChange={(e) => setplayerOne(e.target.value)}
      />
      <br></br>
      <input
        onChange={(e) => setplayerTwo(e.target.value)}
        placeholder="player two"
      />
      <button onClick={onClickHandler} className="continue ">
        Continue
      </button>
    </div>
  );
}
