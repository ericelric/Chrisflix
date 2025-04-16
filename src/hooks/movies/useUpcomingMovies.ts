import useApi from '../useApi';
import { Movie } from '../../types/Movie';

const formatDate = (date: Date): string => date.toISOString().split('T')[0];

const useUpcomingMovies = () => {
  const today: Date = new Date();
  const sixMonthsLater: Date = new Date();
  sixMonthsLater.setMonth(today.getMonth() + 6);

  const minDate: string = formatDate(today);
  const maxDate: string = formatDate(sixMonthsLater);

  const endpoint = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${minDate}&primary_release_date.lte=${maxDate}`;

  const { data, isLoading, error } = useApi<Movie>(endpoint);

  return { data, isLoading, error };
};

export default useUpcomingMovies;
