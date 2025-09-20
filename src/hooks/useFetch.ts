import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = (await response.json()) as T;
        setState({ data: result, loading: false, error: null });
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setState({ data: null, loading: false, error: err.message });
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return state;
}
