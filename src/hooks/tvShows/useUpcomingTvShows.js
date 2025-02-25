import useApi from '../useApi';

const useUpcomingTvShows = () => {
  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1); // Move to next month

  const formatDate = (date) => date.toISOString().split('T')[0];

  const minDate = formatDate(today); // Today's date
  const maxDate = formatDate(nextMonth); // Next month's date

  const url = `/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&first_air_date.gte=${minDate}&first_air_date.lte=${maxDate}`;

  return useApi(url);
};

export default useUpcomingTvShows;
