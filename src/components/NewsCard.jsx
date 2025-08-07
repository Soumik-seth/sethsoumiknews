import React from "react";

const NewsCard = ({ newsData }) => {
  const { title, description, urlToImage, url, publishedAt } = newsData;
  
  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="card">
      <div className="card-info">
        {urlToImage && (
          <figure>
            <img src={urlToImage} alt={title} />
          </figure>
        )}
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="date">{formattedDate}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;