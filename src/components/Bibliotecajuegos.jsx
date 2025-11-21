live simport { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJuegos } from "./services/juegoService";
import Tarjetajuego from "./Tarjetajuego";
import "./Bibliotecajuegos.css";

export default function Bibliotecajuegos({ filtro, setFiltro }) {
  const [juegos, setJuegos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function cargar() {
      const data = await getJuegos();   
      setJuegos(data);                  
    }
    cargar();
  }, []);

  useEffect(() => {
    if (setFiltro) setFiltro("");
  }, [setFiltro]);

  const filtrados = juegos.filter((j) =>
    j.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="biblioteca-container">
      <h1>Mi Biblioteca</h1>

      <div className="biblioteca-grid">
        {filtrados.map((j) => (
          <Tarjetajuego key={j._id} juego={j} />
        ))}
      </div>

      <div className="agregar-boton-container">
        <button className="agregar-boton" onClick={() => navigate("/crear")}>
          Agregar Juego
        </button>
      </div>
    </div>
  );
}