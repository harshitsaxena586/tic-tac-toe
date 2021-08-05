export default function checkWinner(squares) {
  // input [0, 0, 1, 0, 0, 0, 2, 0, 0]
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
  const reducer = (memo, [a, b, c]) => {
    if (
      squares[a] &&
      (squares[a] === squares[b]) & (squares[b] === squares[c])
    ) {
      return (memo = squares[a]);
    }
    return memo;
  };
  let winner = lines.reduce(reducer, "");

  if (!winner & squares.every((s) => s)) {
    return "draw";
  }
  return winner;
}
