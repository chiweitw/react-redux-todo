import React, { Component } from "react";
import { connect } from "react-redux";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import {
  deleteTodo,
  addTodo,
  toggleTodo,
  completeAllTodo,
  uncompleteAllTodo,
  deleteAllTodo
} from "../../actions/todoActions";

class Todo extends Component {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoForm addTodo={todo => this.props.addTodo(todo)} />
        <TodoList
          todos={this.props.todos}
          deleteTodo={id => this.props.deleteTodo(id)}
          toggleTodo={id => this.props.toggleTodo(id)}
        />
        <TodoFilter
          completeAllTodo={() => this.props.completeAllTodo()}
          uncompleteAllTodo={() => this.props.uncompleteAllTodo()}
          deleteAllTodo={() => this.props.deleteAllTodo()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    },
    addTodo: todo => {
      dispatch(addTodo(todo));
    },
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    completeAllTodo: () => {
      dispatch(completeAllTodo());
    },
    uncompleteAllTodo: () => {
      dispatch(uncompleteAllTodo());
    },
    deleteAllTodo: () => {
      dispatch(deleteAllTodo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
