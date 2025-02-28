import useCurrentYearTvShows from '../../hooks/tvShows/useCurrentYearTvShows.js';
import useKidsTvShows from '../../hooks/tvShows/useKidsTvShows.js';
import useFreeTvShows from '../../hooks/tvShows/useFreeTvShows.js';

import SwiperLazy from '../../components/SwiperLazy/SwiperLazy.jsx';

const TvShowsPage = () => {
  const {
    data: currentTvShows,
    isLoading: isCurrentTvLoading,
    error: currentTvError,
    currentYear,
  } = useCurrentYearTvShows();
  const {
    data: freeTvShows,
    isLoading: isFreeTvLoading,
    error: freeTvError,
  } = useFreeTvShows();
  const {
    data: kidsTvShows,
    isLoading: isKidsTvLoading,
    error: kidsTvError,
  } = useKidsTvShows();

  return (
    <>
      <h1>TV Shows</h1>
      <SwiperLazy
        name={`New in ${currentYear}`}
        data={currentTvShows}
        isLoading={isCurrentTvLoading}
        error={currentTvError}
      />
      <SwiperLazy
        name="Free To Watch"
        data={freeTvShows}
        isLoading={isFreeTvLoading}
        error={freeTvError}
      />
      <SwiperLazy
        name="For Kids"
        data={kidsTvShows}
        isLoading={isKidsTvLoading}
        error={kidsTvError}
      />
    </>
  );
};
export default TvShowsPage;
