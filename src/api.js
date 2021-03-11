import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e3b520c9beb238c22b59f13bcfdae38e",
    language: "ko-KO",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      // params: encodeURIComponent(term),
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      // params: encodeURIComponent(term),
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
