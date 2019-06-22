export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    todo
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const completeAllTodo = () => {
  return {
    type: "COMPLETE_ALL_TODO"
  };
};

export const uncompleteAllTodo = () => {
  return {
    type: "UNCOMPLETE_ALL_TODO"
  };
};

export const deleteAllTodo = () => {
  return {
    type: "DELETE_ALL_TODO"
  };
};
