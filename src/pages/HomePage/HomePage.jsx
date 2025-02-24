import useTopRatedMovies from '../../hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../../hooks/useUpcomingMovies.js';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies.js';
import usePopularMovies from '../../hooks/usePopularMovies.js';
import LazySwiper from '../../components/LazySwiper/LazySwiper.jsx';
import './HomePage.css';

const HomePage = () => {
  const { data: nowPlayingMovies, isLoading: isPlayingLoading } =
    useNowPlayingMovies();
  const { data: upcomingMovies, isLoading: isUpcomingLoading } =
    useUpcomingMovies();
  const { data: topRatedMovies, isLoading: isTopRatedLoading } =
    useTopRatedMovies();
  const { data: popularMovies, isLoading: isPopularLoading } =
    usePopularMovies();

  return (
    <>
      <LazySwiper
        name="Now Playing Movies"
        data={nowPlayingMovies}
        isLoading={isPlayingLoading}
      />
      <LazySwiper
        name="Upcoming Movies"
        data={upcomingMovies}
        isLoading={isUpcomingLoading}
      />
      <LazySwiper
        name="Popular Movies"
        data={popularMovies}
        isLoading={isPopularLoading}
      />
      <LazySwiper
        name="Top Rated Movies"
        data={topRatedMovies}
        isLoading={isTopRatedLoading}
      />
    </>
  );
};

export default HomePage;
