import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const usePopularMovies = () =>
  useApi<Movie>('/movie/popular?language=en-US&page=1');

export default usePopularMovies;
