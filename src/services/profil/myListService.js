import { toast } from "react-toastify";

import { apiClient } from "../apiClient";

export const fetchMovies = async () => {
  try {
    const response = await apiClient.get(`/myList`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const createMovie = async (movie) => {
  try {
    const movies = await fetchMovies();
    const exists = movies.find((item) => item.movieId === movie.id);
    // const exists = movie.categoryId !== 1;

    if (!exists) {
      await apiClient.post(`/myList`, {
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
        status: movie.status,
        trending: movie.trending,
        rating: movie.rating,
      });
      toast.success(`${movie.title} berhasil di tambahkan ke daftar anda!`);
    } else {
      toast.error(`${movie.title} sudah ada di daftar anda!`);
    }
  } catch (error) {
    console.error("Error data:", error);
    throw error;
  }
};

export const deleteMovies = async (movie) => {
  try {
    await apiClient.delete(`/movies/${movie.movieId}/myList/${movie.id}`);
    toast.success(`${movie.title} berhasil dihapus dari daftar anda!`);
  } catch (error) {
    console.error("Gagal menghapus film:", error);
  }
};

export const updateMovies = async (movieId, id, updatedMovie) => {
  try {
    const responseMyList = await apiClient.put(
      `/movies/${movieId}/myList/${id}`,
      updatedMovie
    );
    await apiClient.put(`/movies/${id}`, updatedMovie);
    return responseMyList.data;
    // return responseMovies.data;
    // toast.success(`${movie.title} berhasil dihapus dari daftar anda!`);
  } catch (error) {
    console.error("Gagal menghapus film:", error);
  }
};
