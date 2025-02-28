import useApi from './useApi';
import useMediaDetails from './useMediaDetails';

const useVideoUrl = (mediaType, id) => {
  // Fetch video data in English (default)
  const {
    data: enData,
    error,
    isLoading,
  } = useApi(`/${mediaType}/${id}/videos?language=en-US`);

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
  const { data: localData } = useApi(
    languageQuery
      ? `/${mediaType}/${id}/videos?language=${languageQuery}`
      : null
  );

  if (isLoading || error || (!enData && !localData)) {
    return { trailer: null, error, isLoading };
  }

  // Combine English & local videos
  const videos = [...(enData || []), ...(localData || [])];

  // Sort by published date (oldest first)
  const sortedVideos = videos.sort(
    (a, b) => new Date(a.published_at) - new Date(b.published_at)
  );

  // Helper function to find video by type
  const findVideo = (type) =>
    sortedVideos.find(
      (video) => video.site === 'YouTube' && (type ? video.type === type : true)
    );

  // Find Trailer > Teaser > any YouTube video
  const trailer = findVideo('Trailer') || findVideo('Teaser') || findVideo();

  return {
    trailer,
    backdrop: trailer
      ? null
      : mediaDetails?.backdrop_path || mediaDetails?.poster_path,
    error,
    isLoading,
  };
};

export default useVideoUrl;
