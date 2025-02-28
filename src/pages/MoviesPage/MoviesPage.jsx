import useKidsMovies from '../../hooks/movies/useKidsMovies.js';
import useClassicMovies from '../../hooks/movies/useClassicMovies.js';
import useCurrentYearMovies from '../../hooks/movies/useCurrentYearMovies.js';

import SwiperLazy from '../../components/SwiperLazy/SwiperLazy.jsx';

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
      <SwiperLazy
        name={`New in ${currentYear}`}
        data={currentYearMovies}
        isLoading={isCurrentYearMoviesLoading}
        error={currentYearError}
      />
      <SwiperLazy
        name="Classics"
        data={classicMovies}
        isLoading={isClassicMoviesLoading}
        error={classicMoviesError}
      />
      <SwiperLazy
        name="For Kids"
        data={kidsMovies}
        isLoading={isKidsMoviesLoading}
        error={kidsMoviesError}
      />
    </>
  );
};
export default MoviesPage;
