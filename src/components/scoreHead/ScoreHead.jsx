import React from "react";
import { useApp } from "../../AppContextProvider";
import "./scoreHead.css";

export default function ScoreHead() {
  const { state } = useApp();
  const { playerOne, playerTwo } = state; //destructring for cleaner code

  return (
    <div className="scoreHead">
      <h1> {playerOne.name}</h1>
      <div className="score">
        {playerOne.wins} - {playerTwo.wins}
      </div>
      <h1>{playerTwo.name}</h1>
    </div>
  );
}
