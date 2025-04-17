import { Movie } from "../types/Movie";
import { TvShow } from "../types/TvShow";
import useApi from "./useApi";
import { useMemo } from "react";

export type ReleaseType = "combined" | "movie" | "tv" | "anime";

interface TopRatedNewReleases {
  data: (Movie | TvShow)[];
  isLoading: boolean;
  error: string;
}

const useTopRatedNewReleases = (type: ReleaseType = "combined"): TopRatedNewReleases => {
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const lastMonthString = lastMonth.toISOString().split("T")[0];

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const sixMonthsAgoString = sixMonthsAgo.toISOString().split("T")[0];

  const movieEndpoint = `/discover/movie?language=en-US&sort_by=vote_average.desc&vote_count.gte=50&primary_release_date.gte=${lastMonthString}`;
  const tvEndpoint = `/discover/tv?language=en-US&sort_by=vote_average.desc&vote_count.gte=50&first_air_date.gte=${lastMonthString}`;
  const animeEndpoint = `/discover/tv?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&vote_count.gte=20&first_air_date.gte=${sixMonthsAgoString}`;

  const {
    data: movieData,
    isLoading: movieLoading,
    error: movieError,
  } = useApi<Movie>(type === "tv" || type === "anime" ? undefined : movieEndpoint);

  const {
    data: tvData,
    isLoading: tvLoading,
    error: tvError,
  } = useApi<TvShow>(type === "movie" || type === "anime" ? undefined : tvEndpoint);

  const {
    data: animeData,
    isLoading: animeLoading,
    error: animeError,
  } = useApi<TvShow>(type === "anime" ? animeEndpoint : undefined);

  const topRatedNewReleases = useMemo(() => {
    let result: (Movie | TvShow)[] = [];
    if (type === "combined" && movieData && tvData) {
      result = [...movieData.slice(0, 3), ...tvData.slice(0, 3)];
    } else if (type === "movie" && movieData) {
      result = movieData.slice(0, 6);
    } else if (type === "tv" && tvData) {
      result = tvData.slice(0, 6);
    } else if (type === "anime" && animeData) {
      result = animeData.slice(0, 6);
    }
    return result;
  }, [type, movieData, tvData, animeData]);

  return {
    data: topRatedNewReleases,
    isLoading: movieLoading || tvLoading || animeLoading,
    error: movieError || tvError || animeError,
  };
};

export default useTopRatedNewReleases;
