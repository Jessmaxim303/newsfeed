import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE
class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}
	}

	updateValue = event => {
    this.setState({value: event.target.value})
	}

	submitSearch = event => {
    event.preventDefault();
    this.props.filterNewsSearch(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <form className='search_box'>
        <input
          type="text"
          placeholder="Search News"
          value={this.state.value}
          onChange={this.updateValue}
        />
        <button onClick={this.submitSearch} >Submit idea</button>
    </form>
    )
  }

}

export default SearchForm;