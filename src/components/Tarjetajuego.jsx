import { Link } from "react-router-dom";

function TarjetaJuego({ juego }) {
  return (
    <div className="tarjeta-juego">
      <img src={juego.imagen} alt={juego.nombre} />
      <h3>{juego.nombre}</h3>
      <p>{juego.descripcion}</p>
      <p><strong>Categoría:</strong> {juego.categoria}</p>

      <Link to={`/juego/${juego._id}`} className="btn-detalle">
        Ver detalles
      </Link>
    </div>
  );
}

export default TarjetaJuego;