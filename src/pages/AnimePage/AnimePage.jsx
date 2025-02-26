import usePopularAnimeMovies from '../../hooks/anime/usePopularAnimeMovies.js';
import usePopularAnimeShows from '../../hooks/anime/usePopularAnimeShows.js';
import useClassicAnime from '../../hooks/anime/useClassicAnime.js';
import LazySwiper from '../../components/SwiperLazy/SwiperLazy.jsx';

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

  return (
    <>
      <h1>Anime</h1>
      <LazySwiper
        name="Popular Anime Movies"
        data={animeMovies}
        isLoading={isAnimeMoviesLoading}
        error={animeMoviesError}
      />
      <LazySwiper
        name="Popular Anime Shows"
        data={animeShows}
        isLoading={isAnimeShowsLoading}
        error={animeShowsError}
      />
      <LazySwiper
        name="Classics"
        data={classicAnime}
        isLoading={isClassicAnimeLoading}
        error={classicAnimeError}
      />
    </>
  );
};
export default AnimePage;
