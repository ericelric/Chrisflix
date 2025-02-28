import useApi from './useApi';

const useSimilarMedia = (media_type, id) =>
  useApi(`/${media_type}/${id}/similar`);

export default useSimilarMedia;
