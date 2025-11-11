import { useState, useRef, useEffect } from "react";
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
  const imagenes = [
    fondo1, fondo2, fondo3, fondo4, fondo5,
    fondo6, fondo7, fondo8, fondo9, fondo10, fondo11
  ];

  // Añadimos el primer y último duplicados para efecto infinito
  const imagenesConClones = [
    imagenes[imagenes.length - 1], // clon del último
    ...imagenes,
    imagenes[0], // clon del primero
  ];

  const [indice, setIndice] = useState(1);
  const [transicion, setTransicion] = useState(true);
  const sliderRef = useRef(null);

  const siguiente = () => {
    setIndice((prev) => prev + 1);
  };

  const anterior = () => {
    setIndice((prev) => prev - 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (indice === imagenesConClones.length - 1) {
        // pasamos del clon del primero → al primero
        setTransicion(false);
        setIndice(1);
      } else if (indice === 0) {
        // pasamos del clon del último → al último
        setTransicion(false);
        setIndice(imagenes.length);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [indice, imagenes.length, imagenesConClones.length]);

  useEffect(() => {
    if (!transicion) {
      // después de quitar transición para el salto invisible, la reactivamos
      setTimeout(() => setTransicion(true), 20);
    }
  }, [transicion]);

  return (
    <section className="inicio-banner">
      <div
        ref={sliderRef}
        className="slider"
        style={{
          transform: "translateX(-" + indice * 100 + "%)",
          transition: transicion ? "transform 0.7s ease-in-out" : "none",
        }}
      >
        {imagenesConClones.map((img, i) => (
          <div
            key={i}
            className="slide"
            style={{ backgroundImage: "url(" + img + ")" }}
          ></div>
        ))}
      </div>

      <div className="inicio-overlay">
        <div className="contenedor-texto">
          <h1 className="titulo">LockerGames</h1>
          <button className="empezar">Empezar</button>
        </div>

        <button className="flecha izquierda" onClick={anterior}>❮</button>
        <button className="flecha derecha" onClick={siguiente}>❯</button>
      </div>
    </section>
  );
}

export default Inicio;