import axios from "axios";

const API = axios.create({
  baseURL: "https://nexstock-backend.onrender.com", // backend
  withCredentials: true,
});

export default API;
