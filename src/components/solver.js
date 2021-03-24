import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { valid } from "./functions/valid";
import { solve } from "./functions/solve";

const Solver = () => {
  const [grid, setGrid] = useState([]);
  const [highlight, setHighlight] = useState([]);

  const createRandom = () => {
    let newGrid = [...grid];
    for (var __ = 0; __ < 81; __++) {
      newGrid[__] = Math.floor(Math.random() * 9) + 1;
    }
    setGrid(newGrid);
  };

  const onClear = () => {
    let emptyGrid = [];
    for (let i = 0; i < 81; i++) {
      emptyGrid.push("");
    }
    setGrid(emptyGrid);
  };

  const onSolve = () => {
    if (valid(grid)[0] === true) {
      let result = solve(grid);
      let bool = true;
      for (let _ = 0; _ < 81; _++) {
        if (result[_] !== grid[_]) {
          bool = false;
          break;
        }
      }
      if (bool === false) {
        setGrid(result);
      } else {
        alert("This grid has no solutions");
      }
    } else {
      alert("This Grid has some errors");
    }
  };

  const onValid = () => {
    if (valid(grid)[0] === true) {
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
    let boolGrid = [];
    for (var _ = 0; _ < 81; _++) {
      emptyGrid.push("");
    }
    setGrid(emptyGrid);
    setHighlight(emptyGrid);
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
          isHighlight={highlight[i]}
        />
      </td>
    );
    if (count % 9 === 0) {
      trCells.push(<tr>{tdCells}</tr>);
      tdCells = [];
    }
  }
  console.log(trCells[0]);

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
          <button className="btn" id="clearButton" onClick={onClear}>
            Clear
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
