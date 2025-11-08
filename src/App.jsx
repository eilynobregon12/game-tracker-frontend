import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Bibliotecajuegos from "./components/Bibliotecajuegos";




function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/juegos" element={<Bibliotecajuegos />} />
        </Routes>
     
    </Router>
  );
}

export default App;
