import { create } from "zustand";
import theTomorrowWar from "../../assets/images/beranda/content/the-tomorrow-war.png";
import Quantumania from "../../assets/images/beranda/content/quantumania.png";
import guardiansOfTheGalaxy from "../../assets/images/beranda/content/guardians-of-the-galaxy.png";
import aManCalledOtto from "../../assets/images/beranda/content/a-man-called-otto-2.png";
import littleMermaid from "../../assets/images/beranda/content/little-mermaid.png";

const trendingMovies = create((get) => ({
  movies: [
    {
      id: 31,
      poster: theTomorrowWar,
      status: "",
      trending: "Top 10",
    },

    {
      id: 21,
      poster: Quantumania,
      status: "",
      trending: "Top 10",
    },

    {
      id: 22,
      poster: guardiansOfTheGalaxy,
      status: "",
      trending: "Top 10",
    },

    {
      id: 23,
      poster: aManCalledOtto,
      status: "",
      trending: "Top 10",
    },

    {
      id: 24,
      poster: littleMermaid,
      status: "",
      trending: "Top 10",
    },
  ],

  getMovieById: (id) => get().movies.find((movie) => movie.id === id) || null,
}));

export default trendingMovies;
