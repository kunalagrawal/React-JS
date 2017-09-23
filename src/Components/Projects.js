import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
 
  deleteProject(id){
  	console.log(id);
  	this.props.onDelete(id);
  }
  render() {
  	let projectItems;
  	if(this.props.projects){
  		projectItems = this.props.projects.map(project => {
  			return (
  				<ProjectItem key={project.id} onDelete={this.deleteProject.bind(this)} project={project}/>
  				);
  		});
  	}
    return (
      <div className="Projects"> 
      <h3> Latest Projects </h3>
     	{projectItems}
      </div>
    );
  }
}

export default Projects;
