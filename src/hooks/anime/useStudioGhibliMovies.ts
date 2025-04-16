import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const useStudioGhibliMovies = () =>
  useApi<Movie>(
    '/discover/movie?with_companies=10342&sort_by=release_date.desc&vote_count.gte=500'
  );

export default useStudioGhibliMovies;
