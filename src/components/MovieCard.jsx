const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        className="w-[110px] md:w-[200px] rounded-lg border-[3px] border-transparent hover:border-[3px] hover:border-gray-200 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"
        src={IMAGE_BASE_URL + movie.poster_path}
        alt="movie"
      />
    </>
  );
}

export default MovieCard;
