import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const useTopRatedAnimeShows = () =>
  useApi<TvShow>(
    '/discover/tv?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&vote_count.gte=100'
  );

export default useTopRatedAnimeShows;
