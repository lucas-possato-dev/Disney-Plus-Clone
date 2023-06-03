const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function LargeMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer">
      <img
        className="w-[150px] md:w-[260px] rounded-lg border-[3px] border-transparent hover:border-[3px] hover:border-gray-200 "
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt="movie"
      />
      <h2 className="w-[150px] md:w-[260px] mt-2">{movie.title}</h2>
    </section>
  );
}

export default LargeMovieCard;
