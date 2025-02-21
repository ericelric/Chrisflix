import useApi from './useApi';

const useTvShows = () => useApi('/tv/popular?language=en-US&page=1');

export default useTvShows;
