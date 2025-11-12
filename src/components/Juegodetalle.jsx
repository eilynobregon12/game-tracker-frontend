import { useParams, useNavigate } from "react-router-dom"
import { juegosBase, obtenerJuegosGuardados, normalizar } from "./Usejuegos"
import "./Juegodetalle.css"

export default function Juegodetalle() {
  const { nombre } = useParams()
  const navigate = useNavigate()

  const guardados = obtenerJuegosGuardados()
  const todos = [...juegosBase, ...guardados]
  const juego = todos.find(
    (j) =>
      normalizar(j.nombre) === normalizar(nombre) ||
      j.nombreNormalizado === normalizar(nombre)
  )

  if (!juego) {
    return (
      <div className="no-encontrado">
        <h2>juego no encontrado</h2>
        <button onClick={() => navigate("/bibliotecajuegos")}>volver</button>
      </div>
    )
  }

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={juego.imagen} alt={juego.nombre} className="detalle-imagen" />
        <div className="detalle-info">
          <h1>{juego.nombre}</h1>
          <p className="genero">{juego.categoria}</p>
          <p className="descripcion">{juego.descripcion}</p>
          {juego.historia && <p className="historia">{juego.historia}</p>}
          {juego.link && (
            <a
              href={juego.link}
              target="_blank"
              rel="noopener noreferrer"
              className="boton-instalar"
            >
              Instalar ahora
            </a>
          )}
          <button onClick={() => navigate("/bibliotecajuegos")}>volver</button>
        </div>
      </div>
    </div>
  )
}