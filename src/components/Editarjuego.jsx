import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Editarjuego.css"

export default function EditarJuego() {
  const { id } = useParams()
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

  const [creadoPorUsuario, setCreadoPorUsuario] = useState(false)

  useEffect(() => {
    async function cargarJuego() {
      const res = await fetch(`http://localhost:5000/api/juego/${id}`)
      const data = await res.json()

      setFormData({
        nombre: data.nombre,
        descripcion: data.descripcion,
        urlImagen: data.imagen,
        categoria: data.categoria,
        historia: data.historia,
        estado: data.estado,
        horasJugadas: data.horasJugadas
      })

      setCreadoPorUsuario(data.creadoPorUsuario || false)
    }
    cargarJuego()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const juegoEnviar = {
        ...formData,
        imagen: formData.urlImagen,
        horasJugadas: Number(formData.horasJugadas)
      }

      await fetch(`http://localhost:5000/api/juego/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(juegoEnviar)
      })

      navigate("/bibliotecajuegos")
    } catch (error) {
      console.error("Error editando juego:", error)
    }
  }

  const handleCancel = () => {
    navigate("/bibliotecajuegos")
  }

  return (
    <div className="fondo-form">
      <div className="formulario-juego-card">
        <h2 className="titulo-form">Editar Juego</h2>

        <form onSubmit={handleSubmit} className="formulario-juego">

          {creadoPorUsuario && (
            <>
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
            </>
          )}

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

          <button type="submit" className="btn-crear">Guardar</button>
          <button type="button" className="btn-cancelar" onClick={handleCancel}>
            Cancelar
          </button>

        </form>
      </div>
    </div>
  )
}

