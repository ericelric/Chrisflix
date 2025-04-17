import useKidsMovies from "../../hooks/movies/useKidsMovies";
import useClassicMovies from "../../hooks/movies/useClassicMovies";
import useCurrentYearMovies from "../../hooks/movies/useCurrentYearMovies";

import SwiperLazy from "../../components/SwiperLazy/SwiperLazy";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const MoviesPage = (): React.JSX.Element => {
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
      <HeroBanner bannerType={"movie"} />
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
