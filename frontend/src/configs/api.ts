import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST || "localhost";
const API_PORT = import.meta.env.VITE_API_PORT || 3001;

export const api = axios.create({
  baseURL: `http://${API_HOST}:${API_PORT}`,
});
