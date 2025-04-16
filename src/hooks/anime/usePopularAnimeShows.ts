import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const usePopularAnimeShows = () =>
  useApi<TvShow>(
    '/discover/tv?include_adult=false&with_genres=16&with_origin_country=JP&sort_by=popularity.desc'
  );

export default usePopularAnimeShows;
