import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Diff Pages
import Solver from "./solver";
import Home from "./home";
import Error from "./error";

const Final = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/solver">
          <Solver />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};
export default Final;
