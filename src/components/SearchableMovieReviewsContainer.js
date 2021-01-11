import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'af20TGEVkgfqZCMWaARkaAlLG3oCGMNE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(reviewData => this.setState({reviews: reviewData.results}))
    }

    handleChange = (event) => {
        
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`) 
        .then(response => response.json())
        .then(reviewData => this.setState({reviews: reviewData.results}))
    }

   
   

    

    render() {
        return <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="SearchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
            <MovieReviews reviews={this.state.reviews} />
            </form>
            <input type="submit" value="Search" />
        </div>
       
    }

   
    
}