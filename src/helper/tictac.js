const checkWinnerHorizontally = (arr) => {
  let i;

  for (i = 0; i < 9; i += 3) {
    if (arr[i] && arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return arr[i]
    }
  }

  return 0;
}

const checkWinnerVertically = (arr) => {
  let i;

  for (i = 0; i < 3; i++) {
    if (arr[i] && arr[i] === arr[i + 3] && arr[i] === arr[i + 6]) {
      return arr[i]
    }
  }

  return 0;
}

const checkWinnerDiagonally = (arr) => {
  if (arr[0] && arr[0] === arr[4] && arr[0] === arr[8]) {
    return arr[0];
  }

  if (arr[2] && arr[2] === arr[4] && arr[2] === arr[6]) {
    return arr[2];
  }

  return 0;
};

export const checkWinner = (cellArr) => {
  let winner = checkWinnerHorizontally(cellArr);
  if (!winner) { winner = checkWinnerVertically(cellArr); }
  if (!winner) { winner = checkWinnerDiagonally(cellArr); }

  return winner;
}