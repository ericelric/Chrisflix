import useNowPlayingMovies from '../../hooks/movies/useNowPlayingMovies.js';
import usePopularMovies from '../../hooks/movies/usePopularMovies.js';
import useTopRatedMovies from '../../hooks/movies/useTopRatedMovies.js';
import useUpcomingMovies from '../../hooks/movies/useUpcomingMovies.js';
import useUpcomingTvShows from '../../hooks/tvShows/useUpcomingTvShows.js';
import usePopularTvShows from '../../hooks/tvShows/usePopularTvShows.js';
import useTopRatedTvShows from '../../hooks/tvShows/useTopRatedTvShows.js';
import useTrendingTvShows from '../../hooks/tvShows/useTrendingTvShows.js';

import SwiperLazy from '../../components/SwiperLazy/SwiperLazy.jsx';
import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx';
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
      <HeroBanner bannerType={'combined'} />
      <h1>Movies</h1>
      <SwiperLazy
        name="Now Playing"
        data={nowPlayingMovies}
        isLoading={isPlayingLoading}
        error={nowPlayingError}
      />
      <SwiperLazy
        name="Upcoming"
        data={upcomingMovies}
        isLoading={isUpcomingLoading}
        error={upcomingMoviesError}
      />
      <SwiperLazy
        name="Popular"
        data={popularMovies}
        isLoading={isPopularLoading}
        error={popularMoviesError}
      />
      <SwiperLazy
        name="Top Rated"
        data={topRatedMovies}
        isLoading={isTopRatedLoading}
        error={topRatedMoviesError}
      />

      <div className="homepage__spacing"></div>

      <h1>TV Shows</h1>

      <SwiperLazy
        name="Trending"
        data={trendingTvShows}
        isLoading={isTrendingTvLoading}
        error={trendingTvShowsError}
      />
      <SwiperLazy
        name="Upcoming"
        data={upcomingTvShows}
        isLoading={isUpcomingTvLoading}
        error={upcomingTvShowsError}
      />
      <SwiperLazy
        name="Popular"
        data={popularTvShows}
        isLoading={isPopularTvLoading}
        error={popularTvShowsError}
      />
      <SwiperLazy
        name="Top Rated"
        data={topRatedTvShows}
        isLoading={isTopRatedTvLoading}
        error={topRatedTvShowsError}
      />
    </>
  );
};

export default HomePage;
