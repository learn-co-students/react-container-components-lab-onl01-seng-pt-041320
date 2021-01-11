// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(review => (
        <h1 className="review" key={review.display_title}>{ review.display_title } { review.opening_date }</h1>))}
        </div>
)
export default MovieReviews