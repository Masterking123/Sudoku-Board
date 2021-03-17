import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXqgW1JWA4WqSKo4UdRwF7u223TowRTtFMQ&usqp=CAU"
            alt="Image Cannot Be Loaded"
          />
          <h1>ERROR 404: Page Not Found</h1>
          <h3>
            Note to Self: The image is place holder and use photoshop to fix it!
            :D
          </h3>
          <button className="btn">
            <Link to="/" style={{ textDecoration: "none" }}>
              Back To Home Page
            </Link>
          </button>
        </header>
      </div>
    </>
  );
};

export default Error;
