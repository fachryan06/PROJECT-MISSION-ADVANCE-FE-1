import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// import watchingMovies from "../../../store/beranda/watchingMovies";
import { fetchMovies } from "../../../services/beranda/watchingService";
import { createMovie } from "../../../services/profil/myListService";

import Star from "../../../assets/images/beranda/icon/star.svg";
import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

function Watching() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesData();
  });

  const fetchMoviesData = async () => {
    try {
      const data = await fetchMovies();
      // console.log("Fetched Movies:", data);
      const watchingMovies = data.filter(
        (movie) => movie.category === "watching"
      );
      setMovies(watchingMovies);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching movies:", error);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  const handleAddToMyList = async (movie) => {
    await createMovie(movie);
  };

  return (
    <div>
      <section className="relative p-2 text-white w-full overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-0 mb-4">
            Melanjutkan Tonton Film
          </h3>

          <div className="relative flex gap-3 md:gap-8 mb-4 w-full overflow-scroll md:overflow-hidden">
            {movies.map((movie) => (
              <div key={movie.id} className="relative">
                <h6 className="absolute bottom-4 md:bottom-3 left-3 md:left-4 text-[10px] md:text-[18px]">
                  {movie.title}
                </h6>
                <div className="w-[180px] md:w-[302px]">
                  <img src={movie.poster} alt={`${movie.titles}`} />
                </div>
                <img
                  src={Star}
                  alt="image"
                  className="absolute bottom-4 md:bottom-3 right-8 md:right-11 w-[15px] md:w-[auto]"
                />
                <p className="absolute bottom-4 md:bottom-3 right-4 text-[10px] md:text-[18px]">
                  {movie.rating}
                </p>

                <button
                  onClick={() => handleAddToMyList(movie)}
                  className="z-10 cursor-pointer absolute bg-info hover:bg-infoHover w-[44.56px] md:w-[120px] h-[16px] md:h-[35px] rounded-[12px] md:rounded-[24px] top-16 md:top-24 left-16 md:left-24 flex justify-center items-center"
                >
                  <p className="text-[5.74px] md:text-[14px]">+ Daftar Saya</p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex justify-between w-full top-[9rem] md:top-[9rem]">
          <div className="flex w-[44px] -ml-2">
            <img src={leftArrow} alt="image" />
          </div>

          <div className="flex w-[44px] mr-2">
            <img src={rightArrow} alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Watching;
