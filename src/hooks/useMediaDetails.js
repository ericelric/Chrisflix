import useApi from './useApi';

const useMediaDetails = (media_type, id) =>
  useApi(`/${media_type}/${id}?language=en-US`);

export default useMediaDetails;
