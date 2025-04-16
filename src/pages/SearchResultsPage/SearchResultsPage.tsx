import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MovieResult, TvResult } from '../../types/Search';
import useSearch from '../../hooks/useSearch';
import './SearchResultsPage.css';
import SwiperImage from '../../components/SwiperImage/SwiperImage';
import SwiperTitle from '../../components/SwiperTitle/SwiperTitle';
import SearchPlaceholder from '../../components/SearchPlaceholder/SearchPlaceholder';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const { data, isLoading } = useSearch(query);
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [tvShows, setTvShows] = useState<TvResult[]>([]);
  const [lastValidQuery, setLastValidQuery] = useState('');

  useEffect(() => {
    if (query) {
      setLastValidQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (!query || !data) {
      setMovies([]);
      setTvShows([]);
      return;
    }
    setMovies(data.results.filter((item) => item.media_type === 'movie'));
    setTvShows(data.results.filter((item) => item.media_type === 'tv'));
  }, [query, data]);

  return (
    <div>
      {lastValidQuery && <h1>{`${lastValidQuery}`}</h1>}

      {isLoading ? (
        <SearchPlaceholder />
      ) : (
        <>
          {movies.length > 0 && (
            <div>
              <h2 className="search-results__headline">Movies</h2>
              <ul className="search-results">
                {movies.map((movie) => (
                  <Link
                    to={`/player/${movie.id}?media_type=movie`}
                    className="search-results__item"
                    key={movie.id}
                  >
                    <SwiperImage
                      backdrop_path={movie.backdrop_path}
                      poster_path={movie.poster_path}
                      title={movie.title}
                    />
                    <div className="search-results__text-wrapper">
                      <SwiperTitle title={movie.title} />
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {tvShows.length > 0 && (
            <div>
              <h2 className="search-results__headline">TV Shows</h2>
              <ul className="search-results">
                {tvShows.map((tvShow) => (
                  <Link
                    to={`/player/${tvShow.id}?media_type=tv`}
                    className="search-results__item"
                    key={tvShow.id}
                  >
                    <SwiperImage
                      backdrop_path={tvShow.backdrop_path}
                      poster_path={tvShow.poster_path}
                      name={tvShow.name}
                    />
                    <div className="search-results__text-wrapper">
                      <SwiperTitle name={tvShow.name} />
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {!isLoading && data && data.results.length === 0 && query && (
            <p>No results found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
