import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    todo: {
      content: ""
    }
  };

  handleChange = e => {
    this.setState({
      todo: {
        content: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: {
        content: ""
      }
    });
  };

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <label>Add New Todo</label>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.todo.content}
        />
        <button>Add</button>
      </form>
    );
    return form;
  }
}
