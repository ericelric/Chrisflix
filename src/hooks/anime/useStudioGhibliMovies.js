import useApi from '../useApi';

const useStudioGhibliMovies = () =>
  useApi(
    '/discover/movie?with_companies=10342&sort_by=release_date.desc&vote_count.gte=500'
  );

export default useStudioGhibliMovies;
