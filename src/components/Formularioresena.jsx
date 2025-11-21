import { useState } from "react";
import { crearResena } from "./services/resenaService";
import "./Resenajuego.css";

export default function Formularioresena({ juegoId, onCrear }) {
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearResena({ juegoId, usuario, comentario, estrellas });
      setUsuario("");
      setComentario("");
      setEstrellas(0);
      if (onCrear) onCrear();
    } catch (error) {
      console.error("Error creando reseña", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-resena">
      <input
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Tu nombre"
        required
      />
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe tu reseña"
        required
      />
      <div className="selector-estrellas">
        <label>
          ⭐ Estrellas:
          <input
            type="number"
            min="0"
            max="5"
            value={estrellas}
            onChange={(e) => setEstrellas(Number(e.target.value))}
            style={{ width: "50px", marginLeft: "5px" }}
          />
        </label>
      </div>
      <button type="submit">Enviar reseña</button>
    </form>
  );
}