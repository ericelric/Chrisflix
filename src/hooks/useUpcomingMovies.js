import useApi from './useApi';

const useUpcomingMovies = () => useApi('/movie/upcoming?language=en-US&page=1');

export default useUpcomingMovies;
