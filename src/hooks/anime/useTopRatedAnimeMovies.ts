import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const useTopRatedAnimeMovies = () =>
  useApi<Movie>(
    '/discover/movie?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&vote_count.gte=100'
  );

export default useTopRatedAnimeMovies;
