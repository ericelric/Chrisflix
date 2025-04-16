import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const useClassicMovies = () =>
  useApi<Movie>(
    '/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&primary_release_date.lte=1999-12-31'
  );

export default useClassicMovies;
