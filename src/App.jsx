import React from "react";
import Navbarsearchonly from "./components/Navbarsearchonly";
import Menuhamburguesa from "./components/Menuhamburguesa";
import "./App.css";
import Inicio from "./components/inicio"; 

function App() {
  return (
    <div>
      <div className="header-container">
        <Navbarsearchonly />
        <Menuhamburguesa />
      </div>

      <Inicio />
    </div>
  );
}

export default App;