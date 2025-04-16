import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const usePopularAnimeMovies = () =>
  useApi<Movie>(
    '/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&with_origin_country=JP'
  );

export default usePopularAnimeMovies;
