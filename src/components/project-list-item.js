import React from 'react';
import { NavLink } from 'reactstrap';

const ProjectListItem = () => {
  return (
    <tr>
      <td>1.</td>
      <td><NavLink href="#">akka-scala</NavLink></td>
      <td>This repository includes projects that attempt to explore Akka toolkit in Scala.</td>
      <td>Scala, Akka</td>
    </tr>
  );
};

export default ProjectListItem;
