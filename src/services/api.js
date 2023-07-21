// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjYyNzc1YTVhOGEzYzdmZGRkYjc2MzIzZDNmMTlkOCIsInN1YiI6IjY0YjlhMjIzNGQyM2RkMDBjODE0MWI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLdnARHkjKTyBV9FyUdNG6ci8vaQ-ehHoCsUiaX2PKk';

// export const fetchMovies = async () => {
//   const { data } = await axios({
//     options: {
//       method: 'GET',
//       url: '/trending/movie/day',
//       headers: {
//         accept: 'application/json',
//         Authorization: API,
//       },
//     },
//   });

//   return data.results;
// };

export const fetchMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API,
    },
  };

  fetch('https://api.themoviedb.org/3/trending/movie/day', options)
    .then(response => response.json())
    .then(response => {
      console.log(response.results);
      return response.results;
    })
    .catch(err => console.error(err));
};
