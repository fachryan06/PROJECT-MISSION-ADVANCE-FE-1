import { create } from "zustand";

import littleMermaid from "../../assets/images/beranda/content/little-mermaid.png";
import dutyAfterSchool from "../../assets/images/beranda/content/duty-after-school.png";
import bigHero6 from "../../assets/images/beranda/content/big-hero-6.png";
import allOfUsAreDead from "../../assets/images/beranda/content/all-of-us-are-dead.png";
import Missing from "../../assets/images/beranda/content/missing.png";

const newRelease = create((get) => ({
  movies: [
    {
      id: 31,
      poster: littleMermaid,
      status: "",
      trending: "Top 10",
    },

    {
      id: 6,
      poster: dutyAfterSchool,
      status: "Episode Baru",
      trending: "",
    },

    {
      id: 33,
      poster: bigHero6,
      status: "",
      trending: "Top 10",
    },

    {
      id: 1,
      poster: allOfUsAreDead,
      status: "Episode Baru",
      trending: "",
    },

    {
      id: 35,
      poster: Missing,
      status: "",
      trending: "",
    },
  ],

  getMovieById: (id) => get().movies.find((movie) => movie.id === id) || null,
}));

export default newRelease;
