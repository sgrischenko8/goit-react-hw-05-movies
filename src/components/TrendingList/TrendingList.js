import { Link } from 'react-router-dom';

const TrendingList = ({ trendMovies }) => {
  return (
    <ul>
      {trendMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
