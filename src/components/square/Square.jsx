import React from "react";
import "./square.css";
const values = {
  0: null,
  1: <img src="/assets/xscene.png" alt="x" />,
  2: <img src="/assets/oscene.png" alt="o" />,
};

export default function Square({ value, onClickHandler, index }) {
  return (
    <div
      onClick={() => {
        onClickHandler(index);
      }}
      className="square"
    >
      {values[value]}
    </div>
  );
}
