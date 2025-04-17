import useApi from "../useApi";
import { TvShow } from "../../types/TvShow";

const useUpcomingTvShows = () => {
  const today: Date = new Date();
  const nextMonth: Date = new Date();
  nextMonth.setMonth(today.getMonth() + 1); // Move to next month

  const formatDate = (date: Date): string => date.toISOString().split("T")[0];

  const minDate: string = formatDate(today); // Today's date
  const maxDate: string = formatDate(nextMonth); // Next month's date

  const url = `/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&first_air_date.gte=${minDate}&first_air_date.lte=${maxDate}`;

  return useApi<TvShow>(url);
};

export default useUpcomingTvShows;
