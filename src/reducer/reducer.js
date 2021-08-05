import checkWinner from "../utils/checkWinner";

let initialState = {
    currentTurn: 2,
    squares: Array(9).fill(0),
    winner: null,
    playerOne: { move: 1, name: "Player1", wins: 0 },
    playerTwo: { move: 2, name: "Player2", wins: 0 },
  };
  
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "RESET": {
      return initialState;
    }
    case "UPDATE_SQUARE":
      let newSquares = [...state.squares];
      newSquares[payload.index] = payload.currentValue;
      return {
        ...state,
        currentTurn: state.currentTurn === 1 ? 2 : 1,
        squares: newSquares,
        winner: checkWinner(newSquares),
      };
    case "SET_PLAYER_STATUS": {
      return { ...state, playerOne: payload[0], playerTwo: payload[1] };
    }
    case "INCREMENT_SCORE_P2": {
      return {
        ...state,
        winner: null,
        squares: Array(9).fill(0),
        playerTwo: { ...state.playerTwo, wins: state.playerTwo.wins + 1 },
      };
    }
    case "INCREMENT_SCORE_P1": {
      return {
        ...state,
        winner: null,
        squares: Array(9).fill(0),
        playerOne: { ...state.playerOne, wins: state.playerOne.wins + 1 },
      };
    }
    case "DRAW":
      return { ...state, winner: null, squares: Array(9).fill(0) };
    default:
      return state;
  }
};
