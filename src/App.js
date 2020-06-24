import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/Experience">
              <Experience />
            </Route>
            <Route exact path="/Education">
              <Education />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
