import useApi from '../useApi';

const useTopRatedMovies = () =>
  useApi('/movie/top_rated?language=en-US&page=1');

export default useTopRatedMovies;
