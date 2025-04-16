import { MediaType } from '../types/MediaType';
import useApi from './useApi';
import useMediaDetails from './useMediaDetails';

interface Video {
  id: string;
  iso_639_1: string; // language code e.g. 'en'
  iso_3166_1: string; // country code e.g. 'US'
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
}

interface VideoUrlResult {
  trailer: Video | null;
  backdrop: string | null;
  error: string;
  isLoading: boolean;
}

const useVideoUrl = (mediaType: MediaType, id: string): VideoUrlResult => {
  // Fetch video data in English (default)
  const {
    data: enData,
    error,
    isLoading,
  } = useApi<Video>(`/${mediaType}/${id}/videos?language=en-US`);

  // Fetch media details to determine release country & language
  const { data: mediaDetails } = useMediaDetails(mediaType, id);

  // Get release country & language
  const releaseCountry = mediaDetails?.production_countries?.[0]?.iso_3166_1;
  const releaseLanguage =
    mediaDetails?.spoken_languages?.[0]?.iso_639_1 || 'en'; // Fallback to 'en'

  // Construct language query if a release country exists
  const languageQuery = releaseCountry
    ? `${releaseLanguage.toLowerCase()}-${releaseCountry}`
    : null;

  // Fetch videos in the release country language (if possible)
  const { data: localData } = useApi<Video>(
    languageQuery
      ? `/${mediaType}/${id}/videos?language=${languageQuery}`
      : undefined
  );

  if (isLoading || error || (!enData && !localData)) {
    return { trailer: null, backdrop: null, error, isLoading };
  }

  // Combine English & local videos
  const videos: Video[] = [...(enData || []), ...(localData || [])];

  // Sort by published date (oldest first)
  const sortedVideos = videos.sort(
    (a, b) =>
      new Date(a.published_at).getTime() - new Date(b.published_at).getTime()
  );

  // Helper function to find video by type
  const findVideo = (type?: string): Video | undefined =>
    sortedVideos.find(
      (video) => video.site === 'YouTube' && (type ? video.type === type : true)
    );

  // Find Trailer > Teaser > any YouTube video
  const trailer = findVideo('Trailer') || findVideo('Teaser') || findVideo();

  return {
    trailer: trailer || null,
    backdrop: trailer
      ? null
      : mediaDetails?.backdrop_path ?? mediaDetails?.poster_path ?? null,
    error,
    isLoading,
  };
};

export default useVideoUrl;
