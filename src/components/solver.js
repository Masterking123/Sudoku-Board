import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { valid } from "./functions/valid";
import { solve } from "./functions/solve";

const Solver = () => {
  const [grid, setGrid] = useState(["", ""]);

  const createRandom = () => {
    let newGrid = [...grid];
    for (var __ = 0; __ < 81; __++) {
      newGrid[__] = Math.floor(Math.random() * 9) + 1;
    }
    setGrid(newGrid);
  };

  const onSolve = () => {
    if (valid(grid) === true) {
      let result = solve(grid);
      setGrid(result);
    } else {
      alert("This Grid has some errors");
    }
  };

  const onValid = () => {
    if (valid(grid) === true) {
      alert("This Grid is good to solve");
    } else {
      alert("This Grid has some errors");
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "0") {
      e.target.value = null;
    } else if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    } else {
      let index = e.target.id.slice(5, e.target.id.length);
      let newArr = [...grid];
      newArr[index] = e.target.value;
      setGrid(newArr);
    }
  };

  useEffect(() => {
    let emptyGrid = [];
    for (var _ = 0; _ < 81; _++) {
      emptyGrid.push("");
    }
    setGrid([
      "5",
      "3",
      "",
      "",
      "7",
      "",
      "",
      "",
      "",
      "6",
      "",
      "",
      "1",
      "9",
      "5",
      "",
      "",
      "",
      "",
      "9",
      "8",
      "",
      "",
      "",
      "",
      "6",
      "",
      "8",
      "",
      "",
      "",
      "6",
      "",
      "",
      "",
      "3",
      "4",
      "",
      "",
      "8",
      "",
      "3",
      "",
      "",
      "1",
      "7",
      "",
      "",
      "",
      "2",
      "",
      "",
      "",
      "6",
      "",
      "6",
      "",
      "",
      "",
      "",
      "2",
      "8",
      "",
      "",
      "",
      "",
      "4",
      "1",
      "9",
      "",
      "",
      "5",
      "",
      "",
      "",
      "",
      "8",
      "",
      "",
      "7",
      "9",
    ]);
  }, []);

  var tdCells = [];
  var trCells = [];
  var count = 0;

  for (var i = 0; i < 81; i++) {
    count++;
    tdCells.push(
      <td>
        <input
          id={"cell-" + i}
          type="number"
          onWheel="this.blur()"
          onChange={handleChange}
          value={grid[i]}
        />
      </td>
    );
    if (count % 9 === 0) {
      trCells.push(<tr>{tdCells}</tr>);
      tdCells = [];
    }
  }

  return (
    <>
      <div className="solver_page">
        <div className="heading">
          <h1>Sudoku Solver</h1>
          <div>
            <table>{trCells}</table>
          </div>
          <button className="btn" id="solveButton" onClick={onSolve}>
            Solve
          </button>
          <button className="btn" id="validButton" onClick={onValid}>
            Valid
          </button>
          <button className="btn">
            <Link to="/" style={{ textDecoration: "none" }}>
              Back to Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Solver;
