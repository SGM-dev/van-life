import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} ${response.statusText}`,
          );
        }
        const result = await response.json();
        setState((prevState) => ({
          ...prevState,
          data: result,
          loading: false,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error: error.message || "An error occurred during the fetch",
          loading: false,
        }));
      }
    };
    fetchData();
  }, [url, options]);

  return state;
};

export default useFetch;
