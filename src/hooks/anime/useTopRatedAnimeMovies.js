import useApi from '../useApi';

const useTopRatedAnimeMovies = () =>
  useApi(
    '/discover/movie?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&vote_count.gte=100'
  );

export default useTopRatedAnimeMovies;
