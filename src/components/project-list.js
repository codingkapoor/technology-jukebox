import React from 'react';
import { Table, NavLink } from 'reactstrap';

import ProjectListItem from './project-list-item';

const ProjectList = ({ projects }) => {
  const renderProjectListItem = (projects) => {
    return projects.map((project, index) => {
        return (
          <ProjectListItem project = { project } index = { index + 1 }/>
        );
      }
    );
  }

  return (
    <div className="project-list col-lg-12">
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Repository</th>
            <th>Project Description</th>
            <th>Technology Stack</th>
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
