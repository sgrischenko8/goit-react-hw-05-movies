import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjYyNzc1YTVhOGEzYzdmZGRkYjc2MzIzZDNmMTlkOCIsInN1YiI6IjY0YjlhMjIzNGQyM2RkMDBjODE0MWI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLdnARHkjKTyBV9FyUdNG6ci8vaQ-ehHoCsUiaX2PKk';

export const fetchMovies = async () => {
  const options = {
    method: 'GET',
    url: '/trending/all/day',
    headers: {
      accept: 'application/json',
      Authorization: API,
    },
  };
  const { data } = await axios.request(options).catch(function (error) {
    console.error(error);
  });
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const options = {
    method: 'GET',
    url: `/movie/${movieId}`,
    headers: {
      accept: 'application/json',
      Authorization: API,
    },
  };
  const { data } = await axios.request(options).catch(function (error) {
    console.error(error);
  });
  return data;
};

export const fetchReviews = async movieId => {
  const options = {
    method: 'GET',
    url: `/movie/${movieId}/reviews`,
    headers: {
      accept: 'application/json',
      Authorization: API,
    },
  };
  const { data } = await axios.request(options).catch(function (error) {
    console.error(error);
  });
  return data.results;
};

export const fetchCast = async movieId => {
  const options = {
    method: 'GET',
    url: `/movie/${movieId}/credits`,
    headers: {
      accept: 'application/json',
      Authorization: API,
    },
  };
  const { data } = await axios.request(options).catch(function (error) {
    console.error(error);
  });
  return data.cast;
};

export const fetchMovieByTitle = async query => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { query },
    headers: {
      accept: 'application/json',
      Authorization: API,
    },
  };

  const { data } = await axios.request(options).catch(function (error) {
    console.error(error);
  });
  return data.results;
};
