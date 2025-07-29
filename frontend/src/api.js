import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Uses .env variable
});

API.interceptors.request.use((req) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user)?.token;
    if (token) req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
