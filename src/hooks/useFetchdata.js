import { useState, useEffect } from "react";
import { getData } from "../utils/getData";

function useFetchdata() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getData("data.json", "json");
      const dataCopy = response?.data;
      setData(dataCopy);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, error, isLoading };
}

export default useFetchdata;
