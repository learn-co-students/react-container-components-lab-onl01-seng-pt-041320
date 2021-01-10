import React from 'react'

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br></br>
        <span className="author">{byline}</span>
      </header>
      <h4>{summary_short}</h4>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>
  
export default MovieReviews;