import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import MovieMainInfo from './MovieMainInfo/MovieMainInfo';
import * as API from '../../services/api';
import Loader from 'components/Loader/Loader';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function renderMovieDetails() {
      setLoading(true);

      try {
        const data = await API.fetchMovieDetails(movieId);
        const details = {
          poster: data.poster_path,
          title: data.title,
          year: Number.parseInt(data.release_date),
          score: data.vote_average ? Math.round(data.vote_average * 10) : 0,
          genres: data.genres ? data.genres : [],
          descr: data.overview,
        };
        setMovieDetails(details);
      } catch (e) {
        console.log(e);
        setError('Something goes bad... Please, try later');
      } finally {
        setLoading(false);
      }
    }
    renderMovieDetails();
  }, [movieId]);

  return (
    <>
      <Link
        to={backLinkLocationRef.current}
        className={styles.btn}
        onClick={() => setLoading(true)}
      >
        &larr; Go back
      </Link>
      {isLoading && <Loader />}
      <>
        {error ? (
          <p className={styles.no_data}>{error}</p>
        ) : (
          <MovieMainInfo movieDetails={movieDetails} />
        )}

        <div className={styles.additional_info_links}>
          <p className={styles.add_text}> Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default MovieDetails;
