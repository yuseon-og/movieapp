import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e3b520c9beb238c22b59f13bcfdae38e",
    language: "en-US",
  },
});
api.get("tv/popular");

export default api;
