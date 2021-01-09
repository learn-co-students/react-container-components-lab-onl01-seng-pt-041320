import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
	constructor() {
	  super()
	  this.state = {
		reviews: [],
		searchTerm: ""
	  }
	} 
  
	componentDidMount() {
	  fetch(URL + `&query=${this.state.searchTerm}`)
		.then(res => res.json())
		.then(json => {
		  this.setState({
			reviews: json.results
		  })
		})
	}
	searchhandle = (input) => {
	  this.setState({
		searchTerm: input.target.value
	  })
	}
	render() {
	  return (
		<form onClick={this.handleSubmit}>
		  <input placeholder="Enter a Word"></input>
		  <button>Search Reviews</button>
		  <MovieReviews reviews={this.state.reviews}/>
		</form>
	  )
	}
  }
