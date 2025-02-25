import useApi from '../useApi';

const useTopRatedTvShows = () => useApi('/tv/top_rated?language=en-US&page=1');

export default useTopRatedTvShows;
