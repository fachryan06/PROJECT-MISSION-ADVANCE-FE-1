import { create } from "zustand";

import Suzume from "../../assets/images/beranda/content/suzume.png";
import jurasicWorld from "../../assets/images/beranda/content/jurassic-world.png";
import Sonic from "../../assets/images/beranda/content/sonic.png";
import allOfUsAreDead from "../../assets/images/beranda/content/all-of-us-are-dead.png";
import bigHero6 from "../../assets/images/beranda/content/big-hero-6.png";

const topRating = create((get) => ({
  movies: [
    {
      id: 11,
      poster: Suzume,
      status: "Episode Baru",
      trending: "",
    },

    {
      id: 12,
      poster: jurasicWorld,
      status: "",
      trending: "",
    },

    {
      id: 13,
      poster: Sonic,
      status: "",
      trending: "",
    },

    {
      id: 1,
      poster: allOfUsAreDead,
      status: "",
      trending: "",
    },

    {
      id: 33,
      poster: bigHero6,
      status: "",
      trending: "",
    },
  ],

  getMovieById: (id) => get().movies.find((movie) => movie.id === id) || null,
}));

export default topRating;
