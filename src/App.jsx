import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Inicio from "./components/Inicio"
import Bibliotecajuegos from "./components/Bibliotecajuegos"
import Estadisticaspersonales from "./components/Estadisticaspersonales"
import Juegodetalle from "./components/Juegodetalle"
import Registro from "./components/Registro"
import Login from "./components/login"
import Formulariojuego from "./components/Formulariojuego"
import Tarjetajuego from "./components/Tarjetajuego"
import { useState } from "react"
import "./App.css"

function App() {
  const [filtro, setFiltro] = useState("")
  return (
    <Router>
      <Header setFiltro={setFiltro} />
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/bibliotecajuegos" element={<Bibliotecajuegos filtro={filtro} />} />
        <Route path="/estadisticaspersonales" element={<Estadisticaspersonales />} />
        <Route path="/juego/:nombre" element={<Juegodetalle />} />
        <Route path="/formulariojuego" element={<Formulariojuego />} />
        <Route path="/tarjetajuego" element={<Tarjetajuego />} />
      
      </Routes>
    </Router>
  )
}

export default App