import { Link, useLocation } from 'react-router-dom';

const TrendingList = ({ trendMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {trendMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
