import { useState, useEffect } from 'react';
import TrendingList from '../../components/TrendingList/TrendingList';
import Loader from 'components/Loader/Loader';
import * as API from '../../services/api';
import styles from './Home.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function renderTrendMovies() {
      setLoading(true);

      try {
        const data = await API.fetchMovies();
        const movies = data.map(el => ({
          id: el.id,
          title: el.title || el.name || el.original_title,
        }));
        setTrendMovies(movies);
      } catch (e) {
        console.log(e);
        setError('Something goes bad... Please, try later');
      } finally {
        setLoading(false);
      }
    }
    renderTrendMovies();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      {isLoading && <Loader />}
      {error ? (
        <p>{error}</p>
      ) : (
        <TrendingList trendMovies={trendMovies} setLoading={setLoading} />
      )}
    </>
  );
};

export default Home;
