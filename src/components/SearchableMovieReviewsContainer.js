import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component
{
    state = 
    {
        reviews: [],
        searchTerm: ""
    }

    handleOnSubmit = event =>
    {
        event.preventDefault();

        const queryURL = URL + `${this.state.searchTerm}`;

        fetch(queryURL)
            .then(res => res.json())
            .then(data => this.setState({reviews: data.results}));
    }

    handleSearchInputOnChange = event =>
    {
        this.setState({searchTerm: event.target.value});
    }

    render()
    {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleOnSubmit}>
                    <label>Search Movie Reviews:</label>
                    <input type="text" id="search-input" onChange={this.handleSearchInputOnChange}/>
                    <button type="submit">Submit</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;