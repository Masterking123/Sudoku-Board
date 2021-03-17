import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Solver = () => {
  const onSubmit = () => {};

  const onValid = () => {};

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

  const [grid, setGrid] = useState([0]);

  return (
    <>
      <div className="solver_page">
        <div className="heading">
          <h1>solver</h1>
          <div>
            <table>
              <tr>
                <td>
                  <input
                    id="cell-0"
                    type="number"
                    onWheel="this.blur()"
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
            </table>
          </div>
          <button className="btn" id="solveButton">
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
