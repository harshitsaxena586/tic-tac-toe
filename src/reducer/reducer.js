import checkWinner from "../utils/checkWinner";

export const reducer = (state, { type, payload }) => {
  switch (type) {
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
