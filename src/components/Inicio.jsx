import { useState } from "react";
import "./Inicio.css";
import fondo1 from "./assets/fondo1.jpg";
import fondo2 from "./assets/fondo2.jpg";
import fondo3 from "./assets/fondo3.jpg";
import fondo4 from "./assets/fondo4.jpg";
import fondo5 from "./assets/fondo5.jpg";
import fondo6 from "./assets/fondo6.jpg";
import fondo7 from "./assets/fondo7.jpg"; 
import fondo8 from "./assets/fondo8.jpg";
import fondo9 from "./assets/fondo9.jpg"; 
import fondo10 from "./assets/fondo10.jpg";
import fondo11 from "./assets/fondo11.jpg";




function Inicio() {
  const imagenes = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6,fondo7 ,fondo8,fondo9,fondo10,fondo11,];
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <section
      className="inicio-banner"
      style={{ backgroundImage: "url(" + imagenes[indice] + ")" }} 
    >
      <div className="inicio-overlay">
        <div className="contenedor-texto">
          <h1 className="titulo">LockerGames</h1>
          <button className="empezar">Empezar</button>
        </div>

        <button className="flecha izquierda" onClick={anterior}>
          ❮
        </button>
        <button className="flecha derecha" onClick={siguiente}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default Inicio;