import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getJuego, eliminarJuego } from "./services/juegoService"
import Resenajuego from "./Resenajuego"
import Formularioresena from "./Formularioresena"
import "./Juegodetalle.css"

const JUEGOS_BASE_IDS = [
  "691932dd087e3238ed89a255",
  "69193300087e3238ed89a257",
  "69193338087e3238ed89a25a",
  "69193345087e3238ed89a25c",
  "69193379087e3238ed89a25e",
  "69193386087e3238ed89a260",
  "69193394087e3238ed89a262",
  "691933b0087e3238ed89a264",
  "691933bd087e3238ed89a266",
  "691933c9087e3238ed89a268"
]

export default function Juegodetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [juego, setJuego] = useState(null)
  const [recargarResenas, setRecargarResenas] = useState(false)

  const esBase = JUEGOS_BASE_IDS.includes(id)

  useEffect(() => {
    async function cargar() {
      const data = await getJuego(id)
      setJuego(data)
    }
    cargar()
  }, [id, recargarResenas])

  if (!juego) return <h2>Cargando...</h2>

  async function borrar() {
    await eliminarJuego(id)
    navigate("/bibliotecajuegos")
  }

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={juego.imagen} className="detalle-imagen" />

        <div className="detalle-info">
          <h1>{juego.nombre}</h1>
          <p><b>Categoría:</b> {juego.categoria}</p>
          <p><b>Descripción:</b> {juego.descripcion}</p>
          <p><b>Historia:</b> {juego.historia}</p>
          <p><b>Estado:</b> {juego.estado}</p>
          <p><b>Horas jugadas:</b> {juego.horasJugadas}</p>

          <div className="botones-container">
            <button className="btn editar" onClick={() => navigate(`/editar/${id}`)}>
              Editar
            </button>

            {!esBase && (
              <button className="btn eliminar" onClick={borrar}>
                Eliminar
              </button>
            )}

            <button className="btn volver" onClick={() => navigate("/bibliotecajuegos")}>
              Volver
            </button>
          </div>

          {}
          <Resenajuego juegoId={juego._id} key={recargarResenas} />
          <Formularioresena
            juegoId={juego._id}
            onCrear={() => setRecargarResenas(!recargarResenas)}
          />
        </div>
      </div>
    </div>
  )
}