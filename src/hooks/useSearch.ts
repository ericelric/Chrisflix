import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/apiClient';
import { SearchMultiResponse } from '../types/Search';

/**
 * Custom hook for fetching data from the TMDB search API.
 * Specifically designed for the /search/multi endpoint, which returns paginated results.
 * @param query The search query.  If empty, no request is made.
 * @returns An object containing the search results, any error, and the loading state.
 */
const useSearch = (query: string) => {
  const [data, setData] = useState<SearchMultiResponse | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setData(null);
      setIsLoading(false);
      setError('');
      return;
    }

    const endpoint = `/search/multi?query=${query}`;
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<SearchMultiResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [query]);

  return { data, error, isLoading };
};

export default useSearch;
