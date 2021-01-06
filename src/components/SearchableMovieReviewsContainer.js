import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    handleQueryChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleInput = input => {
        const searchURL = URL + `&query=${input}`;
        fetch(searchURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.handleInput(this.state.searchTerm);
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form align="right" onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter a Search Term:</label>
                    <input type="text" onChange={event => this.handleQueryChange(event)} value={this.state.searchTerm} />
                    <input type="submit" />
                </form>

                <MovieReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;