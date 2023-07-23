import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import * as API from '../../services/api';
import { ReactComponent as PosterDummy } from '../../icons/picture.svg';
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

  const { poster, title, year, score, genres, descr } = movieDetails;

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
          <div className={styles.main_info}>
            {poster ? (
              <img
                className={styles.poster}
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/original${poster}`}
                alt={`poster of ${title}`}
              />
            ) : (
              <PosterDummy className={styles.poster} width={200} height={300} />
            )}
            <div className={styles.container_info}>
              <h1>
                {title} ({year})
              </h1>
              <p>User score: {score}%</p>
              <h2>Overview</h2>

              {descr ? (
                <p>{descr}</p>
              ) : (
                <span className={styles.no_data}>
                  We don't have overview for that movie
                </span>
              )}

              <h3>Genres</h3>
              {genres && (
                <ul className={styles.list}>
                  {genres.map(el => (
                    <li key={el.id}>{el.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
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
