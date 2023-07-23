import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ searchedMovies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {searchedMovies.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
