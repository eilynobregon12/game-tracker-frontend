import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./FormularioJuego.css"

export default function FormularioJuego() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    urlImagen: "",
    categoria: "",
    historia: "",
    estado: "",
    horasJugadas: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const juegoEnviar = {
        ...formData,
        imagen: formData.urlImagen,
        horasJugadas: Number(formData.horasJugadas),
        creadoPorUsuario: true
      }

      await fetch("http://localhost:5000/api/juego", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(juegoEnviar)
      })

      navigate("/bibliotecajuegos")
    } catch (error) {
      console.error("Error creando juego:", error)
    }
  }

  const handleCancel = () => {
    navigate("/bibliotecajuegos")
  }

  return (
    <div className="fondo-form">
      <div className="formulario-juego-card">
        <h2 className="titulo-form">Crear Juego</h2>

        <form onSubmit={handleSubmit} className="formulario-juego">

          <input
            type="text"
            name="nombre"
            placeholder="Nombre del juego"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleChange}
            required
          ></textarea>

          <textarea
            name="historia"
            placeholder="Historia del juego"
            value={formData.historia}
            onChange={handleChange}
          ></textarea>

          <input
            type="text"
            name="urlImagen"
            placeholder="URL de la imagen"
            value={formData.urlImagen}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleChange}
            required
          />

          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          >
            <option value="">Selecciona estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="jugando">Jugando</option>
            <option value="completado">Completado</option>
          </select>

          <input
            type="number"
            name="horasJugadas"
            placeholder="Horas jugadas"
            value={formData.horasJugadas}
            onChange={handleChange}
            min="0"
          />

          <button type="submit" className="btn-crear">Crear</button>
          <button type="button" className="btn-cancelar" onClick={handleCancel}>
            Cancelar
          </button>

        </form>
      </div>
    </div>
  )
}