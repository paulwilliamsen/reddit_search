import React, { Component, Fragment } from 'react';
import './App.css';
import SearchResultList from './SearchResultList';
import SearchForm from './SearchForm';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      promptSearch: true
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchResults) {
    this.setState({
      results: searchResults,
      promptSearch: false
    })
  }


  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <SearchResultList></SearchResultList>
        <SearchForm></SearchForm>

      </Fragment>
    );
  }
}

export default App;
