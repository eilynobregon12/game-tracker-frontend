import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bibliotecajuegos from './components/Bibliotecajuegos';
import Formulariojuego from './components/Formulariojuego';
import Listareseñas from './components/Listareseñas';
import Estadisticaspersonales from './components/Estadisticaspersonales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bibliotecajuegos />} />
        <Route path="/agregar" element={<Formulariojuego />} />
        <Route path="/reseñas" element={<Listareseñas />} />
        <Route path="/estadisticas" element={<Estadisticaspersonales />} />
      </Routes>
    </Router>
  );
}
