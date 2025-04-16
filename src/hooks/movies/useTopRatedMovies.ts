import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const useTopRatedMovies = () =>
  useApi<Movie>('/movie/top_rated?language=en-US&page=1');

export default useTopRatedMovies;
