import React from "react";
import { valid } from "./valid";

export const solve = (arr) => {
  let board = [];
  let tmp = [];

  for (var _ = 0; _ < 81; _++) {
    tmp.push(arr[_]);
    if ((_ + 1) % 9 === 0) {
      board.push(tmp);
      tmp = [];
    }
  }

  function dfs(matrix) {
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        if (matrix[row][col] !== "") {
          continue;
        } else {
          for (var i = 1; i < 10; i++) {
            // Hits all the numbers from 1 - 9
            let val = i.toString();
            matrix[row][col] = val;
            if (valid(matrix) === true) {
              if (dfs(matrix) === true) {
                return true;
              }
            } else {
              matrix[row][col] = "";
            }
          }
          matrix[row][col] = "";
          return false;
        }
      }
    }
    return true;
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
