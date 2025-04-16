import useApi from '../useApi';
import { TvShow } from '../../types/TvShow';

const useCurrentYearTvShows = () => {
  const currentYear: number = new Date().getFullYear();
  const url: string = `/discover/tv?first_air_date.gte=${currentYear}-01-01&first_air_date.lte=${currentYear}-12-31`;

  return { ...useApi<TvShow>(url), currentYear };
};

export default useCurrentYearTvShows;
