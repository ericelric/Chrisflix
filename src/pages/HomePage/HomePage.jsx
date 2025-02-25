import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies.js';
import usePopularMovies from '../../hooks/movies/usePopularMovies.js';
import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies.js';
import useUpcomingMovies from '../../hooks/movies/useUpcomingMovies.js';
import useUpcomingTvShows from '../../hooks/tvShows/useUpcomingTvShows.js';
import usePopularTvShows from '../../hooks/tvShows/usePopularTvShows.js';
import useTopRatedTvShows from '../../hooks/tvShows/useTopRatedTvShows.js';
import useTrendingTvShows from '../../hooks/tvShows/useTrendingTvShows.js';

import LazySwiper from '../../components/SwiperLazy/SwiperLazy.jsx';
import './HomePage.css';

const HomePage = () => {
  const {
    data: nowPlayingMovies,
    isLoading: isPlayingLoading,
    error: nowPlayingError,
  } = useNowPlayingMovies();
  const {
    data: upcomingMovies,
    isLoading: isUpcomingLoading,
    error: upcomingMoviesError,
  } = useUpcomingMovies();
  const {
    data: topRatedMovies,
    isLoading: isTopRatedLoading,
    error: topRatedMoviesError,
  } = useTopRatedMovies();
  const {
    data: popularMovies,
    isLoading: isPopularLoading,
    error: popularMoviesError,
  } = usePopularMovies();
  const {
    data: upcomingTvShows,
    isLoading: isUpcomingTvLoading,
    error: upcomingTvShowsError,
  } = useUpcomingTvShows();
  const {
    data: popularTvShows,
    isLoading: isPopularTvLoading,
    error: popularTvShowsError,
  } = usePopularTvShows();
  const {
    data: topRatedTvShows,
    isLoading: isTopRatedTvLoading,
    error: topRatedTvShowsError,
  } = useTopRatedTvShows();
  const {
    data: trendingTvShows,
    isLoading: isTrendingTvLoading,
    error: trendingTvShowsError,
  } = useTrendingTvShows();

  return (
    <>
      <h1>Movies</h1>
      <LazySwiper
        name="Now Playing Movies"
        data={nowPlayingMovies}
        isLoading={isPlayingLoading}
        error={nowPlayingError}
      />
      <LazySwiper
        name="Upcoming Movies"
        data={upcomingMovies}
        isLoading={isUpcomingLoading}
        error={upcomingMoviesError}
      />
      <LazySwiper
        name="Popular Movies"
        data={popularMovies}
        isLoading={isPopularLoading}
        error={popularMoviesError}
      />
      <LazySwiper
        name="Top Rated Movies"
        data={topRatedMovies}
        isLoading={isTopRatedLoading}
        error={topRatedMoviesError}
      />

      <div className="homepage__spacing"></div>

      <h1>TV Shows</h1>

      <LazySwiper
        name="Trending TV Shows"
        data={trendingTvShows}
        isLoading={isTrendingTvLoading}
        error={trendingTvShowsError}
      />
      <LazySwiper
        name="Upcoming TV Shows"
        data={upcomingTvShows}
        isLoading={isUpcomingTvLoading}
        error={upcomingTvShowsError}
      />
      <LazySwiper
        name="Popular TV Shows"
        data={popularTvShows}
        isLoading={isPopularTvLoading}
        error={popularTvShowsError}
      />
      <LazySwiper
        name="Top Rated TV Shows"
        data={topRatedTvShows}
        isLoading={isTopRatedTvLoading}
        error={topRatedTvShowsError}
      />
    </>
  );
};

export default HomePage;
