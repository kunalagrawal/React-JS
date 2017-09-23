import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    } 
  }
  static defaultProps = {
   categories: ['lifestyle', 'celebrity', 'technology']
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value===''){
      alert("Title is required");
    } else{
      this.setState({
        newProject:{
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }}, function(){
          this.props.addProject(this.state.newProject);
        });
    }
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option>
    });
    return (
      <div> 
        <h3> Add Project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title </label> <br/>
            <input type="text" ref="title" /><br/>
          </div>
          <div>
            <label> Category </label> <br/>
            <select ref="category">
              {categoryOptions}
            </select>
            <br/>
          </div>
          <br/>
          <input type="submit" value="Submit" />
          <br/>
        </form>
      </div>
    );
  }
}

export default AddProject;
