const todoReducer = (state, actions) => {
  switch (actions.type) {
    case "ON_CHANGE":
      return {
        ...state,
        todoInput: actions.payload,
      };
    case "ADD":
      if (!state.todoInput.trim()) return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: state.todoInput,
            completed: false,
          },
        ],
        todoInput: "",
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === actions.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === actions.payload.id
            ? { ...todo, text: actions.payload.newText }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== actions.payload),
      };
    case "LOAD_TODOS":
      return {
        ...state,
        todos: actions.payload,
      };
    default:
      return state;
  }
};

export { todoReducer };
