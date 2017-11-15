import React from 'react';
import { Table, NavLink } from 'reactstrap';

import ProjectListItem from './project-list-item';

const ProjectList = ({ projects, currentPage }) => {
  const renderProjectListItem = (projects) => {
    return projects.map((project, index) => {
        return (
          <ProjectListItem key = { project.url } project = { project } index = { (10 * (currentPage - 1)) + (index + 1) }/>
        );
      }
    );
  }

  return (
    <div className="project-list col-lg-12">
      <Table bordered striped>
        <thead>
          <tr>
            <th className = "col-project-index">#</th>
            <th className = "col-project-name">Repository</th>
            <th className = "col-project-desc">Project Description</th>
            <th className = "col-project-tstack">Technology Stack</th>
          </tr>
        </thead>
        <tbody>
          { renderProjectListItem(projects) }
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectList;
