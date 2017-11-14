import React from 'react';
import { NavLink } from 'reactstrap';
import _ from 'lodash';

const ProjectListItem = ({ project, index }) => {
  return (
    <tr>
      <td className = "col-project-index">{ index + '.' }</td>
      <td className = "col-project-name"><NavLink href={ project.url } target="_blank">{ project.name }</NavLink></td>
      <td className = "col-project-desc">{ project.desc }</td>
      <td className = "col-project-tstack">{ _.join(project.stack, ', ') }</td>
    </tr>
  );
};

export default ProjectListItem;
