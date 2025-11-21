import axios from "axios";

const API_URL = "http://localhost:5000/api/juego";

export const getJuegos = async () => {
  const resp = await axios.get(API_URL);
  return resp.data;
};

export const getJuego = async (id) => {
  const resp = await axios.get(`${API_URL}/${id}`);
  return resp.data;
};

export const crearJuego = async (datos) => {
  const resp = await axios.post(API_URL, datos);
  return resp.data;
};

export const eliminarJuego = async (id) => {
  const resp = await axios.delete(`${API_URL}/${id}`);
  return resp.data;
};

export const editarJuego = async (id, datos) => {
  const resp = await axios.put(`${API_URL}/${id}`, datos);
  return resp.data;
};