import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Bibliotecajuegos from "./components/Bibliotecajuegos";
import Estadisticaspersonales from "./components/Estadisticaspersonales";
import Juegodetalle from "./components/Juegodetalle";
import Formulariojuego from "./components/Formulariojuego";
import Tarjetajuego from "./components/Tarjetajuego";
import Editarjuego from "./components/Editarjuego";
import Resenajuego from "./components/Resenajuego";
import Formularioresena from "./components/Formularioresena";
import Contacto from "./components/Contacto";
import "./App.css";


function App() {
  const [filtro, setFiltro] = useState("");

  return (
    
    <Router>
      <Header setFiltro={setFiltro} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/bibliotecajuegos" element={<Bibliotecajuegos filtro={filtro} setFiltro={setFiltro} />} />
        <Route path="/estadisticaspersonales" element={<Estadisticaspersonales />} />
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/juego/:id" element={<Juegodetalle />} />
        <Route path="/crear" element={<Formulariojuego />} />
        <Route path="/tarjetajuego" element={<Tarjetajuego />} />
        <Route path="/editar/:id" element={<Editarjuego />} />
        <Route path="/resenas/:juegoId" element={<Resenajuego />} />
        <Route path="/formularioresena/:juegoId" element={<Formularioresena />} />
        <Route path="/estadisticaspersonales" element={<Estadisticaspersonales />} />

      
    
      </Routes>
    </Router>
  
  );
}

export default App;