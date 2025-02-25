import useApi from '../useApi';

const usePopularMovies = () => useApi('/movie/popular?language=en-US&page=1');

export default usePopularMovies;
