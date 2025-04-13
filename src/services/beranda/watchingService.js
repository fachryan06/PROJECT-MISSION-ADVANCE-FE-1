import { apiClient } from "../apiClient";

export const fetchMovies = async () => {
  try {
    const response = await apiClient.get(`/movies`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
