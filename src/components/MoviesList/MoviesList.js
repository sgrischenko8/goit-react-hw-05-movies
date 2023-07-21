import { Link } from 'react-router-dom';

const MoviesList = () => {
  const movieId = 5049849;
  return (
    <>
      <ul>
        <li>
          <Link to={`${movieId}`}>Name</Link>
        </li>
      </ul>
    </>
  );
};

export default MoviesList;
