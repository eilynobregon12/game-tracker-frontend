import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 Importa Link
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header">
      {/* IZQUIERDA */}
      <div className="left-section">
        <div className="logo">LockerGames</div>
        <button
          className="search-btn"
          onClick={() => setSearchOpen(!searchOpen)}
          title="Buscar"
        >
          🔍
        </button>
      </div>

      {/* DERECHA */}
      <div className="right-section">
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/bibliotecajuegos" onClick={() => setMenuOpen(false)}>Juegos</Link>
          <Link to="/estadisticas" onClick={() => setMenuOpen(false)}>Estadísticas</Link>
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

      {/* BUSCADOR */}
      {searchOpen && (
        <div className="search-bar">
          <input type="text" placeholder="Buscar juegos..." />
        </div>
      )}
    </header>
  );
}
