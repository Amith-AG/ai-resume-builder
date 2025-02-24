import axios from "axios"; // ✅ Correct

const API_BASE_URL = "http://localhost:5002/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
