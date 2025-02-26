import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import './SearchResultsPage.css';
import SwiperImage from '../../components/SwiperImage/SwiperImage';
import SwiperTitle from '../../components/SwiperTitle/SwiperTitle';
import SearchPlaceholder from '../../components/SearchPlaceholder/SearchPlaceholder';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { data, isLoading } = useSearch(query);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [lastValidQuery, setLastValidQuery] = useState('');

  useEffect(() => {
    if (query) {
      setLastValidQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (!query) return;
    setMovies(data.filter((item) => item.media_type === 'movie'));
    setTvShows(data.filter((item) => item.media_type === 'tv'));
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
                {movies.map(({ id, backdrop_path, poster_path, title }) => (
                  <li className="search-results__item" key={id}>
                    <SwiperImage
                      backdrop_path={backdrop_path}
                      poster_path={poster_path}
                      title={title}
                    />
                    <div className="search-results__text-wrapper">
                      <SwiperTitle title={title} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tvShows.length > 0 && (
            <div>
              <h2 className="search-results__headline">TV Shows</h2>
              <ul className="search-results">
                {tvShows.map(({ id, backdrop_path, poster_path, name }) => (
                  <li className="search-results__item" key={id}>
                    <SwiperImage
                      backdrop_path={backdrop_path}
                      poster_path={poster_path}
                      name={name}
                    />
                    <div className="search-results__text-wrapper">
                      <SwiperTitle name={name} />
                    </div>
                  </li>
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
