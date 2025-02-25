import { useReducer } from "react";
import { TodoContext } from "./context";
import { todoReducer } from "./reducer";
import { initialSate } from "./constants";

const TodoProvider = ({ children }) => {
  const [state, dispath] = useReducer(todoReducer, initialSate);

  console.log(state);

  return (
    <TodoContext.Provider value={{ state, dispath }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
