import "./Tarjetajuego.css"

export default function TarjetaJuego({ juego, onClick, onEliminar }) {
  const normalizar = (texto) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")

  const manejarClick = () => {
    const nombreNormalizado = normalizar(juego.nombre)
    onClick(nombreNormalizado)
  }

  return (
    <div
      className="tarjeta-juego"
      style={{ backgroundImage: `url(${juego.imagen})` }}
      onClick={manejarClick}
    >
      {onEliminar && (
        <button
          className="boton-eliminar"
          onClick={(e) => {
            e.stopPropagation()
            onEliminar()
          }}
        >
          ✖
        </button>
      )}
      <div className="info-juego">
        <h3>{juego.nombre}</h3>
        <p>{juego.categoria}</p>
      </div>
    </div>
  )
}