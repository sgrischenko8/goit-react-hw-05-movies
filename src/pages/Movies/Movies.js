import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import * as API from '../../services/api';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setLoading(false);
    }
    if (search === '') {
      return;
    }

    renderSearchedMovies(search);
  }, [search]);

  const handleSubmit = event => {
    setSearchedMovies([]);
    const query = event.target.firstElementChild.value;
    query.trim() !== '' ? setSearchParams({ query }) : setSearchParams({});
    event.preventDefault();
    renderSearchedMovies(query);
    event.target.firstElementChild.value = '';
  };

  async function renderSearchedMovies(query) {
    setLoading(true);
    try {
      const data = await API.fetchMovieByTitle(query);
      const movies = data.map(el => ({
        id: el.id,
        title: el.title || el.name || el.original_title,
      }));
      setSearchedMovies(movies);
    } catch (e) {
      console.log(e);
      setError('Something goes bad... Please, try later');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" className={styles.input}></input>
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error ? <p>{error}</p> : <MoviesList searchedMovies={searchedMovies} />}
    </>
  );
};

export default Movies;
