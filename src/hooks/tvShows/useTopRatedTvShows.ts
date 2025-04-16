import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const useTopRatedTvShows = () =>
  useApi<TvShow>('/tv/top_rated?language=en-US&page=1');

export default useTopRatedTvShows;
