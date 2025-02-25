import useApi from '../useApi';

const useTrendingTvShows = () => useApi('/trending/tv/day?language=en-US');

export default useTrendingTvShows;
