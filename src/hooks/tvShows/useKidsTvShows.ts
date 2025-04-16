import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const useKidsTvShows = () =>
  useApi<TvShow>(
    'discover/tv?with_genres=16,10751&certification_country=US&certification.lte=G'
  );

export default useKidsTvShows;
