const todoReducer = (state, actions) => {
  switch (actions.type) {
    case "ON_CHANGE":
      return {
        ...state,
        todoInput: actions.payload,
      };
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== actions.payload),
      };
    default:
      return state;
  }
};

export { todoReducer };
