import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";
function GenreMovieList() {
  return (
    <div>
      {GenresList.genre.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-28" key={item.id}>
              <h2 className="text-[20px] font-bold">{item.name}</h2>
              <MovieList genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
