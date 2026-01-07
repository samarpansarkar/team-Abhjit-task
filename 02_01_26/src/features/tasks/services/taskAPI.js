import axios from "axios";

const API_URL = "http://localhost:3001/tasks";

export const taskAPI = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
