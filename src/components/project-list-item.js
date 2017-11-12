import React from 'react';
import { NavLink } from 'reactstrap';
import _ from 'lodash';

const ProjectListItem = ({ project, index }) => {
  return (
    <tr>
      <td>{ index + '.' }</td>
      <td><NavLink href={ project.url } target="_blank">{ project.name }</NavLink></td>
      <td>{ project.desc }</td>
      <td>{ _.join(project.stack, ', ') }</td>
    </tr>
  );
};

export default ProjectListItem;
