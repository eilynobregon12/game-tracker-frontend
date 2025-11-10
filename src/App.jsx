import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Inicio from "./components/Inicio";
import Bibliotecajuegos from "./components/Bibliotecajuegos";

import { useState } from "react";
import "./App.css";

function App() {
  const [filtro, setFiltro] = useState("");

  return (
    <Router>
      <Header setFiltro={setFiltro} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Bibliotecajuegos" element={<Bibliotecajuegos filtro={filtro} />} />
      </Routes>
    </Router>
  );
}

export default App;
