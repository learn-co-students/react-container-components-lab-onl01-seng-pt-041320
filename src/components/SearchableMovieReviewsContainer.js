import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  
  state = {
    searchTerm: "",
    reviews: []
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(data => this.setState({ reviews: data.results }))
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input"> FINDY BOX </label>
          <input id="search-input" type="text" style={{ width: 275 }} onChange={this.handleSearchChange} />
          <button type="Submit">Submitty</button>
        </form>
        {typeof this.state.reviews === "object" && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}
export default SearchableMovieReviewsContainer
