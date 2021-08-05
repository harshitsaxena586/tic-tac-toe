import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer/reducer";

const AppContext = createContext();

let initialState = {
  currentTurn: 2,
  squares: Array(9).fill(0),
  winner: null,
  playerOne: { move: 1, name: "Player1", wins: 0 },
  playerTwo: { move: 2, name: "Player2", wins: 0 },
};

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  return useContext(AppContext);
};
