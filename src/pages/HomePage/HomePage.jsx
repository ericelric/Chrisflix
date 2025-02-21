import useTopRatedMovies from '../../hooks/useTopRatedMovies.js';
import './HomePage.css';

const HomePage = () => {
  const { data, error, isLoading } = useTopRatedMovies();

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
export default HomePage;
