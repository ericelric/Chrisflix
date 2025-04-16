import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const usePopularTvShows = () =>
  useApi<TvShow>(
    'discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc'
  );

export default usePopularTvShows;
