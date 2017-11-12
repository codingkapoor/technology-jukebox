import React, { Component } from 'react';

import Projects from '../../stack';
import SearchBar from './search-bar';
import ProjectList from './project-list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: Projects };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProjectList projects = { this.state.projects } />
      </div>
    );
  }
}
