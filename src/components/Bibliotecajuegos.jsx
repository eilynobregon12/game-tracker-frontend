import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaGamepad } from "react-icons/fa"
import Formulariojuego from "./Formulariojuego"
import Tarjetajuego from "./Tarjetajuego"
import { juegosBase, obtenerJuegosGuardados, guardarJuegos, normalizar } from "./Usejuegos"
import "./Bibliotecajuegos.css"

export default function Bibliotecajuegos({ filtro = "" }) {
  const navigate = useNavigate()
  const [juegos, setJuegos] = useState([])

  const cargarJuegos = () => {
    const guardados = obtenerJuegosGuardados()
    const combinados = [...juegosBase, ...guardados]
    const sinDuplicados = combinados.filter(
      (j, index, self) => index === self.findIndex((x) => x.id === j.id)
    )
    setJuegos(sinDuplicados)
  }

  useEffect(() => {
    cargarJuegos()
  }, [])

  const agregarJuego = (nuevo) => {
    const guardados = obtenerJuegosGuardados()
    const nuevoJuego = { ...nuevo, id: Date.now() }
    const actualizados = [...guardados, nuevoJuego]
    guardarJuegos(actualizados)
    cargarJuegos()
  }

  const eliminarJuego = (id) => {
    const guardados = obtenerJuegosGuardados()
    const actualizados = guardados.filter((j) => j.id !== id)
    guardarJuegos(actualizados)
    cargarJuegos()
  }

  const abrirDetalle = (juego) => {
    navigate(`/juego/${normalizar(juego.nombre)}`)
  }

  const juegosFiltrados = juegos.filter((j) =>
    j.nombre.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div className="biblioteca-container">
      <h2 className="titulo-biblioteca">
        <FaGamepad className="icono-juego" /> biblioteca de juegos
      </h2>
      <div className="juegos-grid">
        {juegosFiltrados.length > 0 ? (
          juegosFiltrados.map((j) => (
            <Tarjetajuego
              key={`${j.id}-${j.nombre}`}
              juego={j}
              onClick={() => abrirDetalle(j)}
              onEliminar={
                juegosBase.some((base) => base.id === j.id)
                  ? null
                  : () => eliminarJuego(j.id)
              }
            />
          ))
        ) : (
          <p className="no-encontrado">juego no encontrado 😢</p>
        )}
        <div className="tarjeta-agregar">
          <Formulariojuego onAgregar={agregarJuego} />
        </div>
      </div>
    </div>
  )
}