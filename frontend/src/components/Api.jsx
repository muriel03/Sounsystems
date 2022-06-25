import { useEffect, useState } from "react";

export const Api = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data)
      });
  }, []);

  return(data);
};
