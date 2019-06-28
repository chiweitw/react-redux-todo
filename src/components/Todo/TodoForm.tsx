import React, { Component } from "react";

interface Props {
  addTodo: (todo: string) => void;
}

export default class TodoForm extends Component<Props> {
  state = {
    todo: ""
  };

  handleChange = (e: any) => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <label>Add New Todo</label>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.todo}
        />
        <button>Add</button>
      </form>
    );
    return form;
  }
}
