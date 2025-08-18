import axios from "axios";

export const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTQ0ZmJhYmNmMzJlYTQwNmJhYjkzMjc1NGY0MmJlZSIsIm5iZiI6MTc1NDcyMTUxMi44NTc5OTk4LCJzdWIiOiI2ODk2ZWNlODI2MjY0ODE2NTk4ZWE1YTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Za_H8Ju1J1bPaYD6IrPFBHfX6CnOWEtLrIu9C7y_3Do";

export const baseURL = "https://api.themoviedb.org/3/";
export const baseImg = "https://image.tmdb.org/t/p/w200";
export const baseBackdrop = "https://image.tmdb.org/t/p/original";

export const apis = {
  getTopRated: async () => {
    return axios.get(baseURL + "movie/top_rated" + "?language=en-US&page=1", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getPopulars: async () => {
    return axios.get(baseURL + "movie/popular" + "?language=en-US&page=1", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getNowPlaying: async (id) => {
    return axios.get(baseURL + `movie/now_playing` + "?language=en-US&page=1", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getUpcoming: async (id) => {
    return axios.get(baseURL + `movie/upcoming` + "?language=en-US&page=1", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getPeople: async () => {
    return axios.get(baseURL + "person/popular" + "?language=en-US&page=1", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getDetails: async (id) => {
    return axios.get(baseURL + `movie/${id}` + "?language=en-US", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getActorDetails: async (person_id) => {
    return axios.get(baseURL + `person/${person_id}` + "?language=en-US", {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getActorList: async (id) => {
    return axios.get(baseURL + `movie/${id}/credits?language=en-US`, {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
    });
  },

  getActorMovies: async (person_id) => {
    return axios.get(
      baseURL + `person/${person_id}/movie_credits` + "?language=en-US",
      {
        headers: {
          Authorization: API_KEY,
          Accept: "application/json",
        },
      }
    );
  },
};
