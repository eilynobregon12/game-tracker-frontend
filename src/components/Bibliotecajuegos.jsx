import React, { useState } from "react";
import "./Bibliotecajuegos.css";


import fondo2 from "./assets/fondo2.jpg";
import fondo3 from "./assets/fondo3.jpg";
import fondo4 from "./assets/fondo4.jpg";
import fondo5 from "./assets/fondo5.jpg";
import fondo6 from "./assets/fondo6.jpg";
import fondo7 from "./assets/fondo7.jpg";
import fondo8 from "./assets/fondo8.jpg";
import fondo9 from "./assets/fondo9.jpg";
import fondo10 from "./assets/fondo10.jpg";
import fondo11 from "./assets/fondo11.jpg";

const juegosIniciales = [
  { id: 1, nombre: "Subway Surfers", imagen: fondo2, categoria: "Arcade" },
  { id: 2, nombre: "Honor of Kings", imagen: fondo3, categoria: "MOBA" },
  { id: 3, nombre: "Skullgirls", imagen: fondo4, categoria: "Lucha" },
  { id: 4, nombre: "Minecraft", imagen: fondo5, categoria: "Aventura" },
  { id: 5, nombre: "Candy Crush", imagen: fondo6, categoria: "Puzzle" },
  { id: 6, nombre: "Plantas vs Zombies", imagen: fondo7, categoria: "Estrategia" },
  { id: 7, nombre: "Geometry Dash", imagen: fondo8, categoria: "Plataformas" },
  { id: 8, nombre: "Roblox", imagen: fondo9, categoria: "Social" },
  { id: 9, nombre: "Mobile Legends", imagen: fondo10, categoria: "MOBA" },
  { id: 10, nombre: "Among Us", imagen: fondo11, categoria: "Social" },
];

function Bibliotecajuegos({ filtro }) {
  const [juegos] = useState(juegosIniciales);

  const juegosFiltrados = juegos.filter((juego) =>
    juego.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="biblioteca-container">
      <h2>🎮 Biblioteca de Juegos</h2>

      <div className="juegos-grid">
        {juegosFiltrados.length > 0 ? (
          juegosFiltrados.map((juego) => (
            <div
              key={juego.id}
              className="tarjeta-juego"
              style={{ backgroundImage: `url(${juego.imagen})` }}
            >
              <div className="info-juego">
                <h3>{juego.nombre}</h3>
                <p>{juego.categoria}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-encontrado">No se encontraron juegos 😢</p>
        )}
      </div>
    </div>
  );
}

export default Bibliotecajuegos;
