// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;

const Review = props =>
{
    return (
        <div className="review">
            Headline: {props.headline}
            <br />
            By: {props.byline}
            <br />
            Short Summary: {props.summary_short}
            <br />
            <br />
        </div>
    )
}

export default MovieReviews;