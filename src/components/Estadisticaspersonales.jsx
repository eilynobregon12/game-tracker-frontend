import { useState } from "react";
import "./Estadisticaspersonales.css";

export default function Estadisticaspersonales() {
  const [jugador, setJugador] = useState("");
  const [juego, setJuego] = useState("");
  const [horas, setHoras] = useState("");
  const [puntuacion, setPuntuacion] = useState(1);
  const [registro, setRegistro] = useState([]);

  const calcularRango = (horas) => {
    if (horas <= 20) return "Básico";
    if (horas <= 50) return "Intermedio";
    if (horas <= 79) return "Avanzado";
    return "Experto";
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!jugador || !juego || !horas || !puntuacion) return;

    setRegistro([
      ...registro,
      {
        jugador,
        juego,
        horas: Number(horas),
        rango: calcularRango(Number(horas)),
        puntuacion: Number(puntuacion),
      },
    ]);

    setJuego("");
    setHoras("");
    setPuntuacion(1);
  };

  const totalHoras = registro.reduce((sum, r) => sum + r.horas, 0);

  return (
    <div className="estadisticas-container">
      <h1>Estadísticas Personales</h1>

      <form onSubmit={handleAgregar} className="estadisticas-form">
        <input
          type="text"
          placeholder="Nombre del jugador"
          value={jugador}
          onChange={(e) => setJugador(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre del juego"
          value={juego}
          onChange={(e) => setJuego(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Horas jugadas"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          required
          min="0"
        />
        <select
          value={puntuacion}
          onChange={(e) => setPuntuacion(e.target.value)}
        >
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>
        <button type="submit">Agregar</button>
      </form>

      <h2>Juegos registrados:</h2>
      <div className="registro-grid">
        {registro.map((r, i) => (
          <div className="tarjeta-juego" key={i}>
            <p><strong>Jugador:</strong> {r.jugador}</p>
            <p><strong>Juego:</strong> {r.juego}</p>
            <p><strong>Horas jugadas:</strong> {r.horas}</p>
            <p><strong>Rango:</strong> {r.rango}</p>
            <p><strong>Puntuación:</strong> {"⭐".repeat(r.puntuacion)}</p>
          </div>
        ))}
      </div>

      <h3>Total de horas jugadas: {totalHoras}</h3>
    </div>
  );
}