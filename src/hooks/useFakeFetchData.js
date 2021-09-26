import { useState, useEffect, useCallback } from "react";

const getRandomNumber = (url) => {
  return Math.floor(Math.random() * 10000);
};

const useFakeFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const fetchMyAPI = useCallback(() => {
    setIsLoading(true);

    const tempData = [];
    for (let i = 0; i < 3; i++) {
      const imgUrl = url + "&sig=" + getRandomNumber();
      tempData.push(imgUrl);
    }

    setTimeout(() => {
      setIsLoading(false);
      setData(tempData);
    }, 1000);
  }, [url]);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  console.log(data, isLoading, Date.now());

  return { data, isLoading };
};

export default useFakeFetchData;
