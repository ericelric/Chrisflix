import useApi from '../useApi';

const useCurrentYearTvShows = () => {
  const currentYear = new Date().getFullYear();
  const url = `/discover/tv?first_air_date.gte=${currentYear}-01-01&first_air_date.lte=${currentYear}-12-31`;

  return { ...useApi(url), currentYear };
};

export default useCurrentYearTvShows;
