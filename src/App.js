import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Recipe from "./components/recipe/recipe";
import Header from "./components/Header/header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/cocktail/:id">
            <Recipe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
