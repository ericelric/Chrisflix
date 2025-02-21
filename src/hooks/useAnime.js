import useApi from './useApi';

const useAnime = () =>
  useApi(
    '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&with_origin_country=JP'
  );

export default useAnime;
