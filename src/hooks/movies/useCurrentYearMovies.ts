import useApi from "../useApi";
import { Movie } from "../../types/Movie";

const useCurrentYearMovies = () => {
  const currentYear: number = new Date().getFullYear();
  const url = `/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&primary_release_year=${currentYear}`;

  return { ...useApi<Movie>(url), currentYear };
};

export default useCurrentYearMovies;
