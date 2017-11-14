import React, { Component } from 'react';
import _ from 'lodash';
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4';

import Projects from '../../projects.json';

import SearchBar from './search-bar';
import ProjectList from './project-list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.technologiesSearchPool = getTechnologiesSearchPool();
    this.state = {
      projects: Projects,
      currentPage: 1,
      totalPages: 2,
      boundaryPagesRange: 1,
      siblingPagesRange: 1,
      hidePreviousAndNextPageLinks: false,
      hideFirstAndLastPageLinks: true,
      hideEllipsis: false
    };
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

  onPageChangeFromPagination(newPage) {
    this.setState({ currentPage: newPage });
    console.log(this.state.currentPage);
  }

  render() {
    return (
      <div>
        <h3 className = "jukebox-header col-lg-12">Technology Jukebox</h3>
        <SearchBar onSearchTermChange = { this.projectSearch.bind(this) } technologiesSearchPool = { this.technologiesSearchPool } />
        <ProjectList projects = { this.state.projects } />
        <div className = "col-lg-offset-5">
          <UltimatePagination
            currentPage = { this.state.currentPage }
            totalPages = { this.state.totalPages }
            boundaryPagesRange = { this.state.boundaryPagesRange }
            siblingPagesRange = { this.state.siblingPagesRange }
            hidePreviousAndNextPageLinks = { this.state.hidePreviousAndNextPageLinks }
            hideFirstAndLastPageLinks = { this.state.hideFirstAndLastPageLinks }
            hideEllipsis = { this.state.hideEllipsis }
            onChange = { this.onPageChangeFromPagination.bind(this) }
          />
        </div>
      </div>
    );
  }
}

function getTechnologiesSearchPool() {
  var arr = Projects.map(x => { return x.stack });
  var flattenedArr = Array.from(new Set(_.flatten(arr)));

  return flattenedArr.map(x => { return { "name": x } });
}
