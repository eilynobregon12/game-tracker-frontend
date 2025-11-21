import { useEffect, useState } from "react"; 

import { getJuegos } from "./services/juegoService";

export default function useJuegos() { const [juegosBase, setJuegosBase] = useState([]); const [juegosCreados, setJuegosCreados] = useState([]); const [cargando, setCargando] = useState(true);

useEffect(() => { async function cargar() { try { const data = await getJuegos(); setJuegosBase(data.filter(j => j.esBase === true)); setJuegosCreados(data.filter(j => j.esBase !== true)); } catch (error) { console.error("Error al obtener juegos", error); } finally { setCargando(false); } }

cargar();

}, []);

const juegos = [...juegosBase, ...juegosCreados];

return { juegos, juegosBase, juegosCreados, cargando }; }