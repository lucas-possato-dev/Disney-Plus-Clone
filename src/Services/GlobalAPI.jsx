import axios from "axios";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c77850a6f693cb130b8811b0301b6832";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "c77850a6f693cb130b8811b0301b6832";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
