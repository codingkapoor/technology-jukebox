import React from 'react';
import { Table, NavLink } from 'reactstrap';

import ProjectListItem from './project-list-item';

const ProjectList = () => {
  const renderProjectListItem = () => {
    return (
      <ProjectListItem />
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
          {renderProjectListItem()}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectList;
