import React, { useState } from "react";
import "./Menuhamburguesa.css";

function Menuhamburguesa() {
  const [abierto, setAbierto] = useState(false);

  const toggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <nav className="menu">
      <div className="menu-icono" onClick={toggleMenu}>
        <div className={abierto ? "linea activo" : "linea"}></div>
        <div className={abierto ? "linea activo" : "linea"}></div>
        <div className={abierto ? "linea activo" : "linea"}></div>
      </div>

      <ul className={abierto ? "menu-links visible" : "menu-links"}>
        <li><a href="#Inicio">Inicio</a></li>
        <li><a href="#Juegos">Juegos</a></li>
        <li><a href="#Estadisticas">Estadísticas</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Menuhamburguesa;
