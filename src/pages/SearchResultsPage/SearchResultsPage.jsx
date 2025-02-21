import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { data, isLoading } = useSearch(query);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    if (!query) return;
    setMovies(data.filter((item) => item.media_type === 'movie'));
    setTvShows(data.filter((item) => item.media_type === 'tv'));
  }, [query, data]);

  return (
    <div>
      <h2>{`Search Results for "${query}"`}</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {movies.length > 0 && (
            <div>
              <h3>🎬 Movies</h3>
              <ul className="search-results">
                {movies.map((movie) => (
                  <li key={movie.id}>{movie.title}</li>
                ))}
              </ul>
            </div>
          )}

          {tvShows.length > 0 && (
            <div>
              <h3>📺 TV Shows</h3>
              <ul className="search-results">
                {tvShows.map((show) => (
                  <li key={show.id}>{show.name}</li>
                ))}
              </ul>
            </div>
          )}

          {!isLoading && data.length === 0 && query && <p>No results found.</p>}
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
