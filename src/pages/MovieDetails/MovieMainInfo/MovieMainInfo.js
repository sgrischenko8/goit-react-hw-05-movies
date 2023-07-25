import { ReactComponent as PosterDummy } from '../../../icons/picture.svg';
import styles from './MovieMainInfo.module.css';

const MovieMainInfo = ({ movieDetails }) => {
  const { poster, title, year, score, genres, descr } = movieDetails;

  return (
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
  );
};

export default MovieMainInfo;
