import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const useNowPlayingMovies = () =>
  useApi<Movie>('/movie/now_playing?language=en-US&page=1');

export default useNowPlayingMovies;
