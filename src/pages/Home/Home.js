import { useState, useEffect } from 'react';
import TrendingList from '../../components/TrendingList/TrendingList';
import * as API from '../../services/api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function renderTrendMovies() {
      setLoading(true);

      try {
        const data = await API.fetchMovies();
        console.log(data);
        // const movies = data.map(el => ({
        //   id: el.id,
        //   title: el.title,
        // }));
        // setTrendMovies(movies);
      } catch (e) {
        console.log(e);
        setError('Something goes bad... Please, try later');
      } finally {
        setLoading(false);
      }
    }
    renderTrendMovies();
  }, []);

  // this code is just for GitHub deployment-----------
  const changeTrendMovies = () => {
    setTrendMovies([]);
  };
  console.log(changeTrendMovies);
  console.log(isLoading);
  console.log(error);
  // code above is just for GitHub deployment-----------

  return (
    <main>
      <h2>Trending today</h2>
      <TrendingList trendMovies={trendMovies} />
    </main>
  );
};

export default Home;
