import React, { Component } from "react";

export default class TodoFilter extends Component {
  handleClick = e => {
    this.props.deleteAllTodo();
  };
  render() {
    return (
      <div>
        <button>Complete All</button>
        <button>Uncomplete All</button>
        <button onClick={this.handleClick}>Delete All</button>
      </div>
    );
  }
}
