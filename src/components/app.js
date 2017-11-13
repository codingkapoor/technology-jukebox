import React, { Component } from 'react';
import _ from 'lodash';

import Projects from '../../stack';
import SearchBar from './search-bar';
import ProjectList from './project-list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.technologies = getTechnologies();
    this.state = { projects: Projects };
  }

  projectSearch(term) {
    let filteredProjects = Projects;

    if(term) {
      filteredProjects = _.filter(Projects, (o) => { return o.stack.map(_.toUpper).includes(_.toUpper(term)) });
    }

    this.setState({
      projects: filteredProjects
    });
  }

  render() {
    return (
      <div>
        <h3 className = "jukebox-header col-lg-12">Technology Jukebox</h3>
        <SearchBar onSearchTermChange = { this.projectSearch.bind(this) } technologies = { this.technologies } />
        <ProjectList projects = { this.state.projects } />
      </div>
    );
  }
}

function getTechnologies() {
  var arr = Projects.map(x => { return x.stack });
  var flattenedArr = Array.from(new Set(_.flatten(arr)));

  return flattenedArr.map(x => { return { "name": x } });
}
