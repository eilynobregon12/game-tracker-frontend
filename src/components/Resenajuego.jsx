import { useEffect, useState } from "react";
import { obtenerResenasPorJuego, editarResena, eliminarResena } from "./services/resenaService";
import "./Resenajuego.css";

const Resenajuego = ({ juegoId }) => {
  const [resenas, setResenas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [editComentario, setEditComentario] = useState("");
  const [editEstrellas, setEditEstrellas] = useState(0);

 
  const cargarResenas = async () => {
    try {
      const data = await obtenerResenasPorJuego(juegoId);
      setResenas(data);
    } catch (error) {
      console.error("Error al obtener reseñas", error);
    }
  };

  useEffect(() => {
    cargarResenas();
  }, [juegoId]);

 
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro quieres eliminar esta reseña?")) return;
    try {
      await eliminarResena(id);
      setResenas(resenas.filter((r) => r._id !== id)); 
    } catch (error) {
      console.error("Error eliminando reseña", error);
    }
  };

  
  const handleEditar = (resena) => {
    setEditandoId(resena._id);
    setEditComentario(resena.comentario);
    setEditEstrellas(resena.estrellas);
  };

  const guardarEdicion = async () => {
    try {
      await editarResena(editandoId, { comentario: editComentario, estrellas: editEstrellas });
      setResenas(
        resenas.map((r) =>
          r._id === editandoId ? { ...r, comentario: editComentario, estrellas: editEstrellas } : r
        )
      );
      setEditandoId(null);
    } catch (error) {
      console.error("Error editando reseña", error);
    }
  };

  return (
    <div className="resenas-lista">
      <h3>Reseñas</h3>
      {resenas.length === 0 && <p>No hay reseñas todavía.</p>}

      {resenas.map((r) => (
        <div key={r._id} className="resena-container">
          {editandoId === r._id ? (
            <div className="resena-editar">
              <textarea
                value={editComentario}
                onChange={(e) => setEditComentario(e.target.value)}
              />
              <div className="estrellas-editar">
                <label>
                  ⭐ Estrellas:
                  <input
                    type="number"
                    min="0"
                    max="5"
                    value={editEstrellas}
                    onChange={(e) => setEditEstrellas(Number(e.target.value))}
                  />
                </label>
              </div>
              <button onClick={guardarEdicion}>Guardar</button>
              <button onClick={() => setEditandoId(null)}>Cancelar</button>
            </div>
          ) : (
            <>
              <strong>{r.usuario}:</strong> {r.comentario}
              <div className="resena-estrellas">
                {r.estrellas} ⭐
              </div>
              <button onClick={() => handleEditar(r)}>Editar</button>
              <button onClick={() => handleEliminar(r._id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Resenajuego;