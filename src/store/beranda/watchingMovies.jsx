import { create } from "zustand";
import dontLookUp from "../../assets/images/beranda/content/dont-look-up.png";
import theBatman from "../../assets/images/beranda/content/the-batman.png";
import blueLock from "../../assets/images/beranda/content/blue-lock.png";
import aManCalledOtto from "../../assets/images/beranda/content/a-man-called-otto.png";

const watchingMovies = create(() => ({
  movies: [
    {
      title: "Don't Look Up",
      poster: dontLookUp,
      rating: "4.5/5",
    },

    {
      title: "The Batman",
      poster: theBatman,
      rating: "4.2/5",
    },

    {
      title: "Blue Lock",
      poster: blueLock,
      rating: "4.6/5",
    },

    {
      title: "A Man Called Otto",
      poster: aManCalledOtto,
      rating: "4.6/5",
    },
  ],
}));

export default watchingMovies;
