import useApi from '../useApi';

const useKidsTvShows = () =>
  useApi(
    'discover/tv?with_genres=16,10751&certification_country=US&certification.lte=G'
  );

export default useKidsTvShows;
