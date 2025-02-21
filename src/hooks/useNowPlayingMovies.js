import useApi from './useApi';

const useNowPlayingMovies = () =>
  useApi('/movie/now_playing?language=en-US&page=1');

export default useNowPlayingMovies;
