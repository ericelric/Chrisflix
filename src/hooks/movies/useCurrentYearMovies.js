import useApi from '../useApi';

const useCurrentYearMovies = () => {
  const currentYear = new Date().getFullYear();
  const url = `/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&primary_release_year=${currentYear}`;

  return { ...useApi(url), currentYear };
};

export default useCurrentYearMovies;
