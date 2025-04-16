import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const useKidsMovies = () =>
  useApi<Movie>(
    '/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&certification_country=US&certification.lte=G&with_genres=16,10751'
  );

export default useKidsMovies;
