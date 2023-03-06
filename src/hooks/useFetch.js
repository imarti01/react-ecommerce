import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      setData(json);
    };
    fetchData().catch(console.error);
  }, [url]);

  return data;
};
