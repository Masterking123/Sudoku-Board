import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <header className="home_page">
          <div className="heading">
            <h1>Sudoku: The Game of the ages!</h1>
            <button className="btn" id="playSolver">
              <Link to="/solver" style={{ textDecoration: "none" }}>
                Sudoku Solver
              </Link>
            </button>
            <button className="btn" id="playGame">
              <Link to="/game" style={{ textDecoration: "none" }}>
                Sudoku The Game
              </Link>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};
export default Home;
