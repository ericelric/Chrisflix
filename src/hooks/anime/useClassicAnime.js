import useApi from '../useApi';

const useClassicAnime = () => {
  const {
    data: movieData,
    isLoading: isMoviesLoading,
    error: moviesError,
  } = useApi(
    '/discover/movie?with_genres=16&with_origin_country=JP&release_date.lte=1999-12-31&sort_by=vote_average.desc&vote_count.gte=100'
  );

  const {
    data: showsData,
    isLoading: isShowsLoading,
    error: showsError,
  } = useApi(
    '/discover/tv?with_genres=16&with_origin_country=JP&first_air_date.lte=1999-12-31&sort_by=vote_average.desc&vote_count.gte=100'
  );

  const limitedMovies = movieData.slice(0, 10);
  const limitedShows = showsData.slice(0, 10);
  const combinedResults = [...limitedMovies, ...limitedShows];

  const isLoading = isMoviesLoading || isShowsLoading;
  const error = moviesError || showsError;

  return { data: combinedResults, isLoading, error };
};

export default useClassicAnime;
