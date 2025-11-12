import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { juegosBase, obtenerJuegosGuardados, normalizar } from "./Usejuegos"
import "./Header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    const query = searchText.trim().toLowerCase()
    if (!query) return

    const guardados = obtenerJuegosGuardados()
    const todos = [...juegosBase, ...guardados]

    const juegoEncontrado = todos.find((j) =>
      normalizar(j.nombre).includes(normalizar(query))
    )

    if (juegoEncontrado) {
      navigate(`/juego/${normalizar(juegoEncontrado.nombre)}`)
    } else {
      navigate("/juego/no-encontrado")
    }

    setSearchOpen(false)
    setSearchText("")
  }

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">LockerGames</div>
        <button
          className="search-btn"
          onClick={() => setSearchOpen(!searchOpen)}
          title="Buscar"
        >
          <FaSearch />
        </button>

        {searchOpen && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
        )}
      </div>

      <div className="right-section">
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/bibliotecajuegos" onClick={() => setMenuOpen(false)}>Juegos</Link>
          <Link to="/Estadisticaspersonales" onClick={() => setMenuOpen(false)}>Estadísticas</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          title="Menú"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  )
}