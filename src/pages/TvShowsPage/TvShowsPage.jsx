import useTvShows from '../../hooks/useTvShows.js';
import './TvShowsPage.css';

const TvShowsPage = () => {
  const { data, error, isLoading } = useTvShows();

  return (
    <>
      <h1>TV Shows</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data?.length > 0 ? (
          data.map((movie) => <li key={movie.id}>{movie.name}</li>)
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </>
  );
};
export default TvShowsPage;
