import useApi from '../useApi';

const formatDate = (date) => date.toISOString().split('T')[0];

const useUpcomingMovies = () => {
  const today = new Date();
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(today.getMonth() + 6);

  const minDate = formatDate(today);
  const maxDate = formatDate(sixMonthsLater);

  const endpoint = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${minDate}&primary_release_date.lte=${maxDate}`;

  const { data, loading, error } = useApi(endpoint);

  return { data, loading, error };
};

export default useUpcomingMovies;
