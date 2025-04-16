import { MediaType } from '../types/MediaType';
import { Movie } from '../types/Movie';
import { TvShow } from '../types/TvShow';
import useApi from './useApi';

const useSimilarMedia = (mediaType: MediaType, id: string) =>
  useApi<Movie | TvShow>(`/${mediaType}/${id}/similar`);

export default useSimilarMedia;
