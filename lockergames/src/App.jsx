import React from "react";
import Navbarsearchonly from "./components/Navbarsearchonly";
import Menuhamburguesa from "./components/Menuhamburguesa";
import "./App.css";


function App() {
  return (
    <div className="header-container">
      <Navbarsearchonly />
      <Menuhamburguesa />
    </div>
  );
}

export default App;
