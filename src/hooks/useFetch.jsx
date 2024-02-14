import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState({
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
            `Network response was not ok: ${response.status} - ${response.statusText}`,
          );
        }
        const result = await response.json();
        if (result) {
          setData((prevState) => ({
            ...prevState,
            data: result,
            loading: false,
          }));
        } else {
          setData((prevState) => ({
            ...prevState,
            loading: false,
          }));
        }
      } catch (error) {
        setData((prevState) => ({
          ...prevState,
          error: error.message || "An error occurred during the fetch",
          loading: false,
        }));
      }
    };
    fetchData();
  }, [url, options]);
  return data;
}

export default useFetch;
