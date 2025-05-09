import useNowPlayingMovies from "../../hooks/movies/useNowPlayingMovies";
import usePopularMovies from "../../hooks/movies/usePopularMovies";
import useTopRatedMovies from "../../hooks/movies/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/movies/useUpcomingMovies";
import useUpcomingTvShows from "../../hooks/tvShows/useUpcomingTvShows";
import usePopularTvShows from "../../hooks/tvShows/usePopularTvShows";
import useTopRatedTvShows from "../../hooks/tvShows/useTopRatedTvShows";
import useTrendingTvShows from "../../hooks/tvShows/useTrendingTvShows";

import SwiperLazy from "../../components/SwiperLazy/SwiperLazy";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./HomePage.css";

const HomePage = (): React.JSX.Element => {
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
      <HeroBanner bannerType={"combined"} />
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
