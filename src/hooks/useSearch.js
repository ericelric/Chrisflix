import useApi from './useApi';

const useSearch = (query) => {
  const { data, isLoading, error } = useApi(
    query ? `/search/multi?query=${query}` : null
  );
  if (!query) return { data: [], isLoading: false, error: '' };
  return { data, isLoading, error };
};

export default useSearch;
