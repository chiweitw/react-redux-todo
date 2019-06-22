import React, { Component } from "react";
import { connect } from "react-redux";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";

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
      dispatch({
        type: "DELETE_TODO",
        id: id
      });
    },
    addTodo: todo => {
      dispatch({
        type: "ADD_TODO",
        todo: todo
      });
    },
    toggleTodo: id => {
      dispatch({
        type: "TOGGLE_TODO",
        id: id
      });
    },
    completeAllTodo: () => {
      dispatch({
        type: "COMPLETE_ALL_TODO"
      });
    },
    uncompleteAllTodo: () => {
      dispatch({
        type: "UNCOMPLETE_ALL_TODO"
      });
    },
    deleteAllTodo: () => {
      dispatch({
        type: "DELETE_ALL_TODO"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
