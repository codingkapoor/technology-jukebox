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

    const projectsPerPage = 10;
    const currentPage = 1;
    const projects = Projects;
    const totalPages = Math.ceil(Projects.length / projectsPerPage);

    const currentProjects = getCurrentProjects(currentPage, projectsPerPage, projects);

    this.state = {
      projects,
      currentProjects,
      projectsPerPage,
      currentPage,
      totalPages,
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

    const { projects, projectsPerPage } = this.state;
    const currentPage = 1;

    const currentProjects = getCurrentProjects(currentPage, projectsPerPage, projects);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    this.setState({
      projects: filteredProjects,
      totalPages,
      currentProjects,
      currentPage
    });
  }

  onPageChangeFromPagination(newPage) {
    const { projects, projectsPerPage } = this.state;
    const currentProjects = getCurrentProjects(newPage, projectsPerPage, projects);

    this.setState({
      currentPage: newPage,
      currentProjects
    });
  }

  render() {
    return (
      <div>
        <h3 className = "jukebox-header col-lg-12">Technology Jukebox</h3>
        <SearchBar onSearchTermChange = { this.projectSearch.bind(this) } technologiesSearchPool = { this.technologiesSearchPool } />
        <ProjectList projects = { this.state.currentProjects } />
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

function getCurrentProjects(currentPage, projectsPerPage, projects) {
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return currentProjects;
}
