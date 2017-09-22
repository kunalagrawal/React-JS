import React, { Component } from 'react';
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
          title : "mom.me",
          category: "lifestyle"
        },
        {
          title : "howardstern.com",
          category: "celebrity"
        },
        {
          title : "purpleclover.com",
          category: "lifestyle"
        },
        {
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
  render() {
    return (
      <div className="App">
      My App
      <AddProject addProject = {this.handleAddProject.bind(this)} />
      <Projects projects = {this.state.projects} />
      </div>
    );
  }
}

export default App;
