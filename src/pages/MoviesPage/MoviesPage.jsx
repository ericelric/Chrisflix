import useUpcomingMovies from '../../hooks/useUpcomingMovies.js';
import './MoviesPage.css';

const MoviesPage = () => {
  const { data, error, isLoading } = useUpcomingMovies();

  return (
    <>
      <h1>Movies</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data?.length > 0 ? (
          data.map((movie) => <li key={movie.id}>{movie.title}</li>)
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </>
  );
};
export default MoviesPage;
