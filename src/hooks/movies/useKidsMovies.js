import useApi from '../useApi';

const useKidsMovies = () =>
  useApi(
    '/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&certification_country=US&certification.lte=G&with_genres=16,10751'
  );

export default useKidsMovies;
