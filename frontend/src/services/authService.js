import axios from "axios";

const API = "http://localhost:5000/api/auth"; // your backend

export const loginWithEmail = async (email, password) => {
  const res = await axios.post(`${API}/login`, { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};
