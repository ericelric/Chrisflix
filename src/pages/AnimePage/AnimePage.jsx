import usePopularAnimeMovies from '../../hooks/anime/usePopularAnimeMovies.js';
import usePopularAnimeShows from '../../hooks/anime/usePopularAnimeShows.js';
import useClassicAnime from '../../hooks/anime/useClassicAnime.js';
import useStudioGhibliMovies from '../../hooks/anime/useStudioGhibliMovies.js';

import SwiperLazy from '../../components/SwiperLazy/SwiperLazy.jsx';
import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx';

const AnimePage = () => {
  const {
    data: animeMovies,
    isLoading: isAnimeMoviesLoading,
    error: animeMoviesError,
  } = usePopularAnimeMovies();
  const {
    data: animeShows,
    isLoading: isAnimeShowsLoading,
    error: animeShowsError,
  } = usePopularAnimeShows();
  const {
    data: classicAnime,
    isLoading: isClassicAnimeLoading,
    error: classicAnimeError,
  } = useClassicAnime();
  const {
    data: studioGhibliMovies,
    isLoading: isStudioGhibliLoading,
    error: studioGhibliError,
  } = useStudioGhibliMovies();

  return (
    <>
      <HeroBanner bannerType={'anime'} />
      <h1>Anime</h1>
      <SwiperLazy
        name="Popular Anime Movies"
        data={animeMovies}
        isLoading={isAnimeMoviesLoading}
        error={animeMoviesError}
      />
      <SwiperLazy
        name="Popular Anime Shows"
        data={animeShows}
        isLoading={isAnimeShowsLoading}
        error={animeShowsError}
      />
      <SwiperLazy
        name="Classics"
        data={classicAnime}
        isLoading={isClassicAnimeLoading}
        error={classicAnimeError}
      />
      <SwiperLazy
        name="Studio Ghibli"
        data={studioGhibliMovies}
        isLoading={isStudioGhibliLoading}
        error={studioGhibliError}
      />
    </>
  );
};
export default AnimePage;
