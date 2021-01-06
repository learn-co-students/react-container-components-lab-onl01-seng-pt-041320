// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => (
    <div className="review-list">
        <ul>
        {props.reviews.map((r, i) => (
            <div className="review">
                <li key={i}>{r.display_title}</li>
            </div>
        ))}
        </ul>
    </div>
)

export default MovieReviews;