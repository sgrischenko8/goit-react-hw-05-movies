import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const title = 'Title';
  return (
    <main>
      <Link to="/">
        <button type="button">Go back</button>
      </Link>
      <img src="https://via.placeholder.com/200x100" alt="" />
      <h1>
        {title}
        {movieId}
      </h1>
      <p>
        User score:<span>%</span>
      </p>
      <h2>Overview</h2>
      <p>Description About film</p>
      <h2>Genres</h2>
      <p>list of genres</p>
      <h3> Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
