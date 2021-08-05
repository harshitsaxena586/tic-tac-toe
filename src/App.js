import { Routes, Route } from "react-router-dom";
import { useApp } from "./AppContextProvider";
import Start from "./components/start/Start";
import PickSide from "./components/pickSide/PickSide";
import GameBoard from "./components/gameBoard/GameBoard";

import { Toaster, toast } from "react-hot-toast";

function App() {
  const { state, dispatch } = useApp();

  if (state.winner) {
    if (state.winner === "draw") {
      toast(`Match draw`, {
        icon: "🤝",
      });
      dispatch({ type: "DRAW" });
    }
    if (state.winner === state.playerOne.move) {
      dispatch({ type: "INCREMENT_SCORE_P1" });
      toast(`${state.playerOne.name}, Won the match`, {
        icon: "🎉",
      });
    } else if (state.winner === state.playerTwo.move)
      dispatch(
        { type: "INCREMENT_SCORE_P2" },
        toast(`${state.playerTwo.name}, Won the match`, {
          icon: "🎉",
        })
      );
  }

  return (
    <div className="App">
      <div>
        <Toaster />
      </div>

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/pickside" element={<PickSide />} />
        <Route path="/gameboard" element={<GameBoard />} />
      </Routes>

      {/* {state} */}
    </div>
  );
}

export default App;
