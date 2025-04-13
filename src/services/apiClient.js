import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
