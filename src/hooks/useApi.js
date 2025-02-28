import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/apiClient';

const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!endpoint) return;

    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results || res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useApi;
