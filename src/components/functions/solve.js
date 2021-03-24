export const solve = (arr) => {
  function isValid(board, row, col, currNum) {
    let gridRow = Math.floor(row / 3) * 3;
    let gridCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === currNum) {
        return false;
      }
      if (board[i][col] === currNum) {
        return false;
      }
      let currRow = gridRow + Math.floor(i / 3);
      let currCol = gridCol + Math.floor(i % 3);
      if (board[currRow][currCol] === currNum) {
        return false;
      }
    }
    return true;
  }
  function dfs(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== "") {
          continue;
        } else {
          for (let k = 1; k < 10; k++) {
            let currNum = k.toString();
            if (isValid(board, i, j, currNum)) {
              board[i][j] = currNum;
              if (dfs(board)) {
                return true;
              }
            }
          }
          board[i][j] = "";
          return false;
        }
      }
    }
    return true;
  }

  let board = [];
  let tmp = [];

  for (var _ = 0; _ < 81; _++) {
    tmp.push(arr[_]);
    if ((_ + 1) % 9 === 0) {
      board.push(tmp);
      tmp = [];
    }
  }
  dfs(board);
  console.log(board);
  let result = [];
  for (var a = 0; a < 9; a++) {
    for (var b = 0; b < 9; b++) {
      result.push(board[a][b]);
    }
  }
  return result;
};
