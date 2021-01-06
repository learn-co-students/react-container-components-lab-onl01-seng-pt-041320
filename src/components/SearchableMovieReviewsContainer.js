import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZalFqAIVOVxA5sVvGtlA5Sz6sRBOHD4I';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        reviews: [],
        searchTerm: ''
      };
    }

    handleInputChange = event => {
        this.setState({
          [this.state.name]: event.target.value
        })
      }

    handleSubmit = (event) => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?${this.state.searchTerm}&api-key=ZalFqAIVOVxA5sVvGtlA5Sz6sRBOHD4I`)
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
        event.preventDefault()
    }
   
   
    render() {
       return (
       <div className="searchable-movie-reviews">
           <form onSubmit={this.handleSubmit}>
           <input id="searchTerm" name="searchTerm" type="text" onChange={event => this.handleInputChange(event)} value={this.state.searchTerm} />
           </form>
       <MovieReviews reviews={this.state.reviews} />
       </div>
       )}
  }
   
  export default SearchableMovieReviewsContainer;