import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects:[]
    }

  }
  // lifestyle method called every time a component is renrendered
 componentWillMount(){
    this.setState({projects: [ 
        {
          id: uuid.v4(),
          title : "mom.me",
          category: "lifestyle"
        },
        {
          id: uuid.v4(),
          title : "howardstern.com",
          category: "celebrity"
        },
        {
          id: uuid.v4(),
          title : "purpleclover.com",
          category: "lifestyle"
        },
        {
          id: uuid.v4(),
          title : "kimkardashianwest.com",
          category: "celebrity"
        }
    ]});
 }

 handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects:projects
    })
 }
 handleDeleteProject(id){
   let projects = this.state.projects;
   let index = projects.findIndex(x => x.id === id);
   projects.splice(index,1);
   this.setState({
    projects: projects
   })

 }
  render() {
    return (
      <div className="App">
      My App
      <AddProject addProject = {this.handleAddProject.bind(this)} />
      <Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
