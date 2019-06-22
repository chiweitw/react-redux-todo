import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <label>Add New Todo</label>
        <input onChange={this.handleChange} type="text" />
        <button>Add</button>
      </form>
    );
    return form;
  }
}
