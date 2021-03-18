import React from "react";

export const valid = (arr) => {
  let board = [];
  let tmp = [];
  for (var _ = 0; _ < 81; _++) {
    tmp.push(arr[_]);
    if ((_ + 1) % 9 === 0) {
      board.push(tmp);
      tmp = [];
    }
  }

  let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] !== "") {
        for (var k = 0; k < 9; k++) {
          if (k !== j && board[i][j] === board[i][k]) {
            return false;
          }
          if (k !== i && board[i][j] === board[k][j]) {
            return false;
          }
        }
        let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (board[i][j] in boxes[index]) {
          return false;
        } else {
          boxes[index][board[i][j]] = index;
        }
      }
    }
  }

  return true;
};
