import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDRhYmE4MDFlZDRmYjA0NzQ5ZGFmMTc0MmY0YWNjYSIsInN1YiI6IjY2NTRjY2Y1MGY1OTY4ZDNjNjFiYmM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eS9HI_r4JuCf0JBx8kZa2JaIa2wm3T3j1TMsk8_jxwc",
  },
});

export default instance;
