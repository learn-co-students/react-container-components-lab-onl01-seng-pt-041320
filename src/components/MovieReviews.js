// Code MovieReviews Here

import React from 'react';

const Review = ({display_title, critics_pick, headline, summary_short}) => {
	return <div className="review">
	<h3>title:{display_title}</h3>
	<p>critics_pick: {critics_pick}</p>
	<p>{headline}</p>
	<p>{summary_short}</p>
	</div>
}

const MovieReviews = (props) => {
	const reviews = props.reviews.map(Review)
	
	return (
		<div className="review-list">
			{reviews}
		</div>
	)
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
