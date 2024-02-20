import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} - ${response.statusText}`,
          );
        }
        const result = await response.json();
        if (isMounted) {
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
        }
      } catch (error) {
        if (isMounted) {
          setData((prevState) => ({
            ...prevState,
            error: error.message || "An error occurred during the fetch",
            loading: false,
          }));
        }
      }
    };
    fetchData();

    return () => (isMounted = false);
  }, [url, options]);
  return data;
}

export default useFetch;
