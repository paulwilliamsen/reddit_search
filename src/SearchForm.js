import React, { Component } from 'react';
import superagent from 'superagent'
import './SearchForm.css'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFormBoard: '',
      page: 0,
      errorClass: '',
      searchFormLimit: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const url = `https://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`;

    superagent.get(url)
    .then(res => {
      this.setState({errorClass: ''})
      this.props.onSearch(res.body.data.children);
    })
    .catch(error => {
      console.error(error);
      this.setState({errorClass: 'search-error'})
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="reddit-search">
        <form className={this.state.errorClass} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchFormBoard"
            value={this.state.searchFormBoard}
            onChange={this.handleChange}
            />

          <input
            type="number"
            name="searchFormLimit"
            value={this.state.searchFormLimit}
            onChange={this.handleChange}
            min="0"
            max="100"
            />

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
  
export default SearchForm
