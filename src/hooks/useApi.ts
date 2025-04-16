import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/apiClient';

/**
 * Interface defining the structure of the API response for list-based endpoints.
 * @template T The type of the items within the data array.
 */

export interface ApiResponse<T extends object> {
  data: T[] | null;
  error: string;
  isLoading: boolean;
}

/**
 * Custom React hook for fetching data from an API endpoint that is expected to return an array of objects
 * or a wrapper object containing a 'results' array.
 * @template T The type of the objects expected in the API response array. Must be an object.
 * @param endpoint The API endpoint to fetch data from (e.g., '/discover/movie'). Can be undefined, in which case no API call is made.
 * @returns An object containing the fetched data (as an array or null), any error message, and the loading state.
 */

const useApi = <T extends object>(endpoint?: string): ApiResponse<T> => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Prevent API call if no endpoint is provided (is undefined).
    if (!endpoint) return;

    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<T[] | { results: T[] }>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        if (
          res.data &&
          typeof res.data === 'object' &&
          'results' in res.data &&
          Array.isArray(res.data.results)
        ) {
          // If the response has a 'results' array, set data to that array.
          setData(res.data.results);
        } else if (Array.isArray(res.data)) {
          // If the response is directly an array, set data to that array.
          setData(res.data);
        } else {
          // If the response structure is unexpected, set data to null.
          setData(null);
        }
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

export default useApi;
