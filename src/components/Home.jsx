import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsComponent from "./NewsComponent";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getNewsData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=apple&pageSize=9&page=${page}&apiKey=f6867a088db2469293980223e8c72944`
      );
      const data = await res.json();
      setArticles((prev) => [...prev, ...data.articles]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <NewsComponent newsInfo={articles} />
      {loading && <Loading />}
    </>
  );
};

export default Home;