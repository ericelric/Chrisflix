import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const useTrendingTvShows = () =>
  useApi<TvShow>('/trending/tv/day?language=en-US');

export default useTrendingTvShows;
