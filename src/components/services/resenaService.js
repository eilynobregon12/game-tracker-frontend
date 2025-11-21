import axios from "axios";

const API_URL = "http://localhost:5000/api/resena";

export const crearResena = async (datos) => {
  const res = await axios.post(API_URL, datos);
  return res.data;
};

export const obtenerResenasPorJuego = async (juegoId) => {
  const res = await axios.get(`${API_URL}/${juegoId}`);
  return res.data;
};

export const editarResena = async (id, datos) => {
  const res = await axios.put(`${API_URL}/${id}`, datos);
  return res.data;
};

export const eliminarResena = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};