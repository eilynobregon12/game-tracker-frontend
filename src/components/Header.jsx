import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Usejuego from "./Usejuego";
import "./Header.css";

export default function Header({ setFiltro }) {
  const { juegos } = Usejuego(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [errorBusqueda, setErrorBusqueda] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchText.trim().toLowerCase();
    if (!query) return;

    const juegoEncontrado = juegos.find(j =>
      j.nombre.toLowerCase().includes(query)
    );

    if (juegoEncontrado) {
      navigate(`/juego/${juegoEncontrado._id}`);
      setErrorBusqueda(""); 
      setSearchOpen(false); 
    } else {
      setErrorBusqueda("Juego no encontrado"); 
    }

    if (setFiltro) setFiltro(query);
    setSearchText("");
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">LockerGames</div>

        <button
          className="search-btn"
          onClick={() => {
            setSearchOpen(!searchOpen);
            if (!searchOpen) setErrorBusqueda(""); 
          }}
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
            {errorBusqueda && <p className="error-busqueda">{errorBusqueda}</p>}
          </div>
        )}
      </div>

      <div className="right-section">
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/bibliotecajuegos" onClick={() => setMenuOpen(false)}>Juegos</Link>
          <Link to="/estadisticaspersonales" onClick={() => setMenuOpen(false)}>Estadísticas</Link>
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
  );
}