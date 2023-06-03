import { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 45;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 45;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[60px] absolute mx-4 mt-[155px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-[60px] absolute mx-4 mt-[155px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className=" md:h-[310px] mr-20 rounded-lg border-[4px] border-transparent hover:border-[4px] hover:border-gray-200 transition-all duration-100 ease-in-out cursor-pointer object-cover"
            alt="Trending"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
