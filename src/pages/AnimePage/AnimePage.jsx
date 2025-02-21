import useAnime from '../../hooks/useAnime.js';
import './AnimePage.css';

const AnimePage = () => {
  const { data, error, isLoading } = useAnime();

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
export default AnimePage;
