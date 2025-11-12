import fondo2 from "./assets/fondo2.jpg"
import fondo3 from "./assets/fondo3.jpg"
import fondo4 from "./assets/fondo4.jpg"
import fondo5 from "./assets/fondo5.jpg"
import fondo6 from "./assets/fondo6.jpg"
import fondo7 from "./assets/fondo7.jpg"
import fondo8 from "./assets/fondo8.jpg"
import fondo9 from "./assets/fondo9.jpg"
import fondo10 from "./assets/fondo10.jpg"
import fondo11 from "./assets/fondo11.jpg"

export const juegosBase = [
  {
    id: 1,
    nombre: "Subway Surfers",
    descripcion: "Corre por las vías, salta y deslízate para esquivar obstáculos y trenes mientras recoges monedas y power-ups.",
    historia: "Creado por Kiloo y SYBO Games en 2012, Subway Surfers se convirtió en uno de los endless runners más populares por su estética colorida y actualizaciones constantes.",
    categoria: "Arcade",
    imagen: fondo2,
    link: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
  },
  {
    id: 2,
    nombre: "Honor of Kings",
    descripcion: "Un MOBA competitivo con partidas rápidas 5v5 y héroes con habilidades únicas.",
    historia: "Desarrollado por TiMi Studios y publicado por Tencent, Honor of Kings dominó gran parte del mercado asiático desde su lanzamiento en 2015.",
    categoria: "MOBA",
    imagen: fondo3,
    link: "https://play.google.com/store/apps/details?id=com.levelinfinite.sgameGlobal"
  },
  {
    id: 3,
    nombre: "Skullgirls",
    descripcion: "Frenéticas peleas 2D con un roster artístico, combos técnicos y estilo visual único.",
    historia: "Lanzado en 2012 por Lab Zero Games; conocido por su arte dibujado a mano y su alta profundidad en el combate.",
    categoria: "Lucha",
    imagen: fondo4,
    link: "https://play.google.com/store/apps/details?id=com.autumn.skullgirls"
  },
  {
    id: 4,
    nombre: "Minecraft",
    descripcion: "Construye, explora y sobrevive en mundos generados proceduralmente llenos de recursos y criaturas.",
    historia: "Creado por Markus Persson en 2009 y desarrollado por Mojang, Minecraft revolucionó los juegos de creación y supervivencia.",
    categoria: "Aventura",
    imagen: fondo5,
    link: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"
  },
  {
    id: 5,
    nombre: "Candy Crush",
    descripcion: "Resuelve puzzles combinando dulces en niveles con objetivos y boosters variados.",
    historia: "Desarrollado por King en 2012; Candy Crush se volvió un fenómeno casual por su accesibilidad y diseño de niveles.",
    categoria: "Puzzle",
    imagen: fondo6,
    link: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
  },
  {
    id: 6,
    nombre: "Plantas vs Zombies",
    descripcion: "Defiende tu jardín usando plantas con habilidades únicas contra oleadas de zombis.",
    historia: "PopCap Games lanzó este clásico de estrategia casual en 2009, destacando por su humor y diseño adictivo.",
    categoria: "Estrategia",
    imagen: fondo7,
    link: "https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row"
  },
  {
    id: 7,
    nombre: "Geometry Dash",
    descripcion: "Plataformas rítmicas en las que saltos perfectos y timing son la clave para superar niveles.",
    historia: "RobTop Games lanzó Geometry Dash en 2013; se hizo famoso por su dificultad y niveles creados por la comunidad.",
    categoria: "Plataformas",
    imagen: fondo8,
    link: "https://play.google.com/store/apps/details?id=com.robtopx.geometryjump"
  },
  {
    id: 8,
    nombre: "Roblox",
    descripcion: "Plataforma donde los usuarios crean y juegan millones de experiencias y juegos creados por la comunidad.",
    historia: "Lanzado en 2006, Roblox evolucionó hasta convertirse en un ecosistema de creación y social gaming masivo.",
    categoria: "Creativo",
    imagen: fondo9,
    link: "https://play.google.com/store/apps/details?id=com.roblox.client"
  },
  {
    id: 9,
    nombre: "Mobile Legends",
    descripcion: "MOBA móvil con partidas cortas, gran variedad de héroes y partidas 5v5 accesibles.",
    historia: "Desarrollado por Moonton en 2016, se popularizó en SE Asia por su jugabilidad optimizada para móviles.",
    categoria: "MOBA",
    imagen: fondo10,
    link: "https://play.google.com/store/apps/details?id=com.mobile.legends"
  },
  {
    id: 10,
    nombre: "Among Us",
    descripcion: "Juego social de deducción donde crewmates completan tareas y buscan al impostor entre ellos.",
    historia: "Innersloth lanzó Among Us en 2018 pero explotó en popularidad en 2020 gracias a streamers y partidas sociales.",
    categoria: "Social",
    imagen: fondo11,
    link: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia"
  }
]

export function normalizar(texto = "") {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
}

export const obtenerJuegosGuardados = () => {
  return JSON.parse(localStorage.getItem("juegos")) || []
}

export const guardarJuegos = (juegos) => {
  localStorage.setItem("juegos", JSON.stringify(juegos))
}

export const obtenerTodosLosJuegos = () => {
  const guardados = obtenerJuegosGuardados()
  return [...juegosBase, ...guardados]
}