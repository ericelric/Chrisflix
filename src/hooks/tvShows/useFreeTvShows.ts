import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const useFreeTvShows = () =>
  useApi<TvShow>(
    'discover/tv?watch_region=US&with_watch_monetization_types=free'
  );

export default useFreeTvShows;
