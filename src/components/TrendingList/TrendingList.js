import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

TrendingList.propTypes = {
  trendMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TrendingList;
