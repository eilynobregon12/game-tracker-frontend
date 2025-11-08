import React, { useState } from "react";
import "./BibliotecaJuegos.css";

const juegosIniciales = [
  {
    id: 1,
    nombre: "Candy Crush",
    imagen: "https://upload.wikimedia.org/wikipedia/en/4/4f/Candy_Crush_Saga_logo.svg",
    categoria: "Puzzle",
  },
  {
    id: 2,
    nombre: "Minecraft",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    categoria: "Aventura",
  },
  {
    id: 3,
    nombre: "Roblox",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/16/Roblox_Logo_2022.svg",
    categoria: "Social",
  },
  {
    id: 4,
    nombre: "Geometry Dash",
    imagen: "https://upload.wikimedia.org/wikipedia/en/2/21/Geometry_Dash_Logo.PNG",
    categoria: "Plataformas",
  },
];

function BibliotecaJuegos({ filtro }) {
  const [juegos] = useState(juegosIniciales);

  // Filtrado dinámico (desde la barra de búsqueda del Header)
  const juegosFiltrados = juegos.filter((juego) =>
    juego.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="biblioteca-container">
      <h2>🎮 Biblioteca de Juegos</h2>

      <div className="juegos-grid">
        {juegosFiltrados.length > 0 ? (
          juegosFiltrados.map((juego) => (
            <div key={juego.id} className="tarjeta-juego">
              <img src={juego.imagen} alt={juego.nombre} />
              <h3>{juego.nombre}</h3>
              <p>{juego.categoria}</p>
            </div>
          ))
        ) : (
          <p className="no-encontrado">No se encontraron juegos 😢</p>
        )}
      </div>
    </div>
  );
}

export default BibliotecaJuegos;