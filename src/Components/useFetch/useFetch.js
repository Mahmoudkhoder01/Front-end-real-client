import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_URL}${url}`);
        setData(res.data.message);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  const reFetcth = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}${url}`);
      setData(res.data.message);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };
  return { data, isLoading, error, reFetcth };
};

export default useFetch;
