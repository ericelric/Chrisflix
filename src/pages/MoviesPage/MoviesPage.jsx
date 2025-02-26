import useKidsMovies from '../../hooks/movies/useKidsMovies.js';
import useClassicMovies from '../../hooks/movies/useClassicMovies.js';
import useCurrentYearMovies from '../../hooks/movies/useCurrentYearMovies.js';

import LazySwiper from '../../components/SwiperLazy/SwiperLazy.jsx';

const MoviesPage = () => {
  const {
    data: kidsMovies,
    isLoading: isKidsMoviesLoading,
    error: kidsMoviesError,
  } = useKidsMovies();
  const {
    data: classicMovies,
    isLoading: isClassicMoviesLoading,
    error: classicMoviesError,
  } = useClassicMovies();
  const {
    data: currentYearMovies,
    isLoading: isCurrentYearMoviesLoading,
    error: currentYearError,
    currentYear,
  } = useCurrentYearMovies();

  return (
    <>
      <h1>Movies</h1>
      <LazySwiper
        name={`New in ${currentYear}`}
        data={currentYearMovies}
        isLoading={isCurrentYearMoviesLoading}
        error={currentYearError}
      />
      <LazySwiper
        name="Classics"
        data={classicMovies}
        isLoading={isClassicMoviesLoading}
        error={classicMoviesError}
      />
      <LazySwiper
        name="For Kids"
        data={kidsMovies}
        isLoading={isKidsMoviesLoading}
        error={kidsMoviesError}
      />
    </>
  );
};
export default MoviesPage;
