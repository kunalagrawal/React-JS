import React, { Component } from 'react';

class ProjectItem extends Component {
 //console.log(this.props);
  render() {
    return (
      <li className="Project"> 
       	<strong>{this.props.project.title}</strong> : {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
