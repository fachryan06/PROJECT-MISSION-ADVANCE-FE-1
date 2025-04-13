import { create } from "zustand";
import { toast } from "react-toastify";

const myList = create((set, get) => ({
  movies: [
    {
      id: 1,
      poster: "images/profil/content/all-of-us-are-dead.png",
      status: "",
      trending: "Top 10",
    },

    {
      id: 2,
      poster: "images/profil/content/babymax.png",
      status: "Episode Baru",
      trending: "",
    },

    {
      id: 3,
      poster: "images/profil/content/my-hero-academia.png",
      status: "Episode Baru",
      trending: "",
    },

    {
      id: 4,
      poster: "images/profil/content/blue-lock.png",
      status: "Episode Baru",
      trending: "",
    },

    {
      id: 5,
      poster: "images/profil/content/ted-lasso.png",
      status: "Episode Baru",
      trending: "Top 10",
    },

    {
      id: 6,
      poster: "images/profil/content/duty-after-school.png",
      status: "Episode Baru",
      trending: "Top 10",
    },
  ],

  addToMyList: (movie) => {
    const existingMovie = get().movies.find((item) => item.id === movie.id);
    if (!existingMovie) {
      set((state) => ({
        movies: [...state.movies, movie],
      }));
      toast.success("Film Berhasil Ditambahkan");
    } else {
      toast.error("Film Sudah Ada di Daftar Anda!");
    }
  },

  removeFromMyList: (id) => {
    set((state) => ({
      movies: state.movies.filter((item) => item.id !== id),
    }));
    toast.success("Film Dihapus Dari Daftar Saya");
  },
}));

export default myList;
