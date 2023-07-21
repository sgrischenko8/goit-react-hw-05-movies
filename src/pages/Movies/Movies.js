import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  return (
    <main>
      <form>
        <input type="search"></input>
        <button type="button">Search</button>
      </form>
      <MoviesList />
    </main>
  );
};

export default Movies;
