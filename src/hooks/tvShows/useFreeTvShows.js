import useApi from '../useApi';

const useFreeTvShows = () =>
  useApi('discover/tv?watch_region=US&with_watch_monetization_types=free');

export default useFreeTvShows;
