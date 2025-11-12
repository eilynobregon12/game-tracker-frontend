import { useState } from "react"
import "./Formulariojuego.css"

function Formulariojuego({ onAgregar }) {
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [imagen, setImagen] = useState("")

  const normalizar = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    if (!nombre || !categoria) return
    const nuevoJuego = {
      nombre,
      nombreNormalizado: normalizar(nombre),
      categoria,
      descripcion,
      imagen: imagen || "https://via.placeholder.com/300",
    }
    onAgregar(nuevoJuego)
    setNombre("")
    setCategoria("")
    setDescripcion("")
    setImagen("")
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario-juego">
      <input
        type="text"
        placeholder="Nombre del juego"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <textarea
        placeholder="Descripción del juego"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar Juego</button>
    </form>
  )
}

export default Formulariojuego