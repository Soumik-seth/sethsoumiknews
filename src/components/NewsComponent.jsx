import React from "react";
import NewsCard from "./NewsCard";

const NewsComponent = ({ newsInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Latest News</h1>
        <div className="grid grid-three-column">
          {newsInfo.map((article, id) => {
            return <NewsCard key={id} newsData={article} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;