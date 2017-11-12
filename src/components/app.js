import React, { Component } from 'react';

import SearchBar from './search-bar';
import ProjectList from './project-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProjectList />
      </div>
    );
  }
}
