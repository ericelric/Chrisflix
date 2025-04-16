import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/apiClient';

/**
 * Interface defining the structure of the API response for single object endpoints.
 * @template T The type of the single object in the data.
 */

export interface SingleApiResponse<T extends object> {
  data: T | null;
  error: string;
  isLoading: boolean;
}

/**
 * Custom React hook for fetching data from an API endpoint that is expected to return a single object.
 * @template T The type of the single object expected in the API response. Must be an object.
 * @param endpoint The API endpoint to fetch data from (e.g., '/movie/123'). Can be undefined, in which case no API call is made.
 * @returns An object containing the fetched data (as a single object or null), any error message, and the loading state.
 */

const useSingleApi = <T extends object>(
  endpoint?: string
): SingleApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Prevent API call if no endpoint is provided (is undefined).
    if (!endpoint) return;

    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<T>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore errors caused by request cancellation.
        setError(err.message);
        setIsLoading(false);
      });

    // Cleanup function to abort the API request if the component unmounts.
    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useSingleApi;
