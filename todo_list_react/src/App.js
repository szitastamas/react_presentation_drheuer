import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import About from "./components/about/About";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <About />
        </div>
        <div className="col s6 offset-s2">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
