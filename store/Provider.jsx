import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "./context";
import { todoReducer } from "./reducer";
import { initialSate } from "./constants";

const TodoProvider = ({ children }) => {
  const [state, dispath] = useReducer(todoReducer, initialSate);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispath({ type: "LOAD_TODOS", payload: savedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispath }}>
      {children}
    </TodoContext.Provider>
  );
};

// Thêm propTypes validation
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoProvider };
