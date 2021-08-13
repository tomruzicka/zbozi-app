import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleMeal from "./pages/SingleMeal";
import Error from "./pages/Error";

//  components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/meal/:id">
          <SingleMeal />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
