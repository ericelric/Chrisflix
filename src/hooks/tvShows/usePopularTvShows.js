import useApi from '../useApi';

const usePopularTvShows = () =>
  useApi(
    'discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc'
  );

export default usePopularTvShows;
