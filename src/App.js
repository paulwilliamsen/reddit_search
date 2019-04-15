import React, { Component, Fragment } from 'react';
import './App.css';
import SearchResultList from './SearchResultList';
import SearchForm from './SearchForm';


class App extends Component {
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
