import useSingleApi, { SingleApiResponse } from "./useSingleApi";
import { MovieDetails } from "../types/MovieDetails";
import { TvShowDetails } from "../types/TvShowDetails";
import { MediaType } from "../types/MediaType";

const useMediaDetails = (
  mediaType: MediaType,
  id: string
): SingleApiResponse<MovieDetails | TvShowDetails> =>
  useSingleApi<MovieDetails | TvShowDetails>(`/${mediaType}/${id}?language=en-US`);

export default useMediaDetails;
