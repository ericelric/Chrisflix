import useApi from '../useApi';
import { Movie } from '../../types/Movie';
import { TvShow } from '../../types/TvShow';

const useClassicAnime = () => {
  const {
    data: movieData,
    isLoading: isMoviesLoading,
    error: moviesError,
  } = useApi<Movie>(
    '/discover/movie?with_genres=16&with_origin_country=JP&release_date.lte=1999-12-31&sort_by=vote_average.desc&vote_count.gte=100'
  );

  const {
    data: showsData,
    isLoading: isShowsLoading,
    error: showsError,
  } = useApi<TvShow>(
    '/discover/tv?with_genres=16&with_origin_country=JP&first_air_date.lte=1999-12-31&sort_by=vote_average.desc&vote_count.gte=100'
  );

  const limitedMovies: Movie[] | undefined = movieData?.slice(0, 10);
  const limitedShows: TvShow[] | undefined = showsData?.slice(0, 10);
  const combinedResults: (Movie | TvShow)[] = [
    ...(limitedMovies ?? []),
    ...(limitedShows ?? []),
  ];

  const isLoading: boolean = isMoviesLoading || isShowsLoading;
  const error: string = moviesError || showsError;

  return { data: combinedResults, isLoading, error };
};

export default useClassicAnime;
