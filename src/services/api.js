import axios from "axios";

const API_KEY = `d90b62d88143f6b8eebbf19cbee39fa4`;

export default {
  getTrending() {
    return axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    );
  },

  searchMovie(query, page) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&${query}=king&${page}=1&include_adult=false`
    );
  },

  getMovieInfo(movie_id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
  },

  getMovieCast(movie_id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
    );
  },

  getReviews(movie_id, page) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&${page}`
    );
  },
};
