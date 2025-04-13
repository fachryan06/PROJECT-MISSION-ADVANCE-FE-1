import { useState, useEffect } from "react";

import { fetchMovies } from "../../../services/beranda/watchingService";
import { createMovie } from "../../../services/profil/myListService";

import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesData();
  });

  const fetchMoviesData = async () => {
    try {
      const data = await fetchMovies();
      const watchingMovies = data.filter(
        (movie) => movie.category === "trending"
      );
      setMovies(watchingMovies);
      setLoading(false);
    } catch (err) {
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
      <section className="relative p-2 text-white overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
            Film Trending
          </h3>

          <div className="relative flex gap-5 md:gap-8 mb-4 w-full overflow-scroll md:overflow-hidden">
            {movies.map((movie, index) => (
              <div key={index} className="relative">
                <div className="w-[195px] md:w-[334px] rounded-md">
                  <img src={movie.poster} alt="image" />
                </div>

                <button
                  onClick={() => handleAddToMyList(movie)}
                  className="z-10 cursor-pointer absolute bg-info hover:bg-infoHover w-[44.56px] md:w-[120px] h-[16px] md:h-[35px] rounded-[12px] md:rounded-[24px] top-16 md:top-28 left-20 md:left-28 flex justify-center items-center"
                >
                  <p className="text-[5.74px] md:text-[14px]">+ Daftar Saya</p>
                </button>

                <div
                  className={`${
                    movie.trending == "" ? "hidden" : ""
                  } absolute bg-error w-[14.82px] md:w-[31px] h-[21.82px] md:h-[48px] rounded-tr-[1.91px] md:rounded-tr-[4px] rounded-bl-[1.91px] md:rounded-bl-[4px] top-0 md:top-0 right-1 md:right-3 flex justify-center items-center text-center`}
                >
                  <p className="text-[5.74px] md:text-[14px]">
                    {movie.trending}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex justify-between w-full top-[9rem] md:top-[14rem]">
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
};

export default Trending;
