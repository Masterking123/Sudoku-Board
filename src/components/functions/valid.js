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
  const errors = [];

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] !== "") {
        for (var k = 0; k < 9; k++) {
          if (k !== j && board[i][j] === board[i][k]) {
            errors.push([i, j]);
          }
          if (k !== i && board[i][j] === board[k][j]) {
            errors.push([i, j]);
          }
        }
        let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (board[i][j] in boxes[index]) {
          errors.push([i, j]);
        } else {
          boxes[index][board[i][j]] = index;
        }
      }
    }
  }
  if (errors.length >= 1) {
    console.log(errors);
    return [false, errors];
  }
  return [true, null];
};
