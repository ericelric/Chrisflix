import useApi from '../useApi';

const useTopRatedAnimeShows = () =>
  useApi(
    '/discover/tv?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&vote_count.gte=100'
  );

export default useTopRatedAnimeShows;
