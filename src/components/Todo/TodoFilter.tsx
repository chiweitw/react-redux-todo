import React, { Component } from "react";

interface Props {
  completeAllTodo: () => void;
  uncompleteAllTodo: () => void;
  deleteAllTodo: () => void;
}

export default class TodoFilter extends Component<Props> {
  render() {
    return (
      <div>
        <button onClick={() => this.props.completeAllTodo()}>
          Complete All
        </button>
        <button onClick={() => this.props.uncompleteAllTodo()}>
          Uncomplete All
        </button>
        <button onClick={() => this.props.deleteAllTodo()}>Delete All</button>
      </div>
    );
  }
}
