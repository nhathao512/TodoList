import { useContext } from "react";
import { TodoContext } from "../../store/context";

export default function TodoList() {
  const todoStore = useContext(TodoContext);
  const { dispath, state } = todoStore;

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      dispath({ type: "ADD" });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={state.todoInput}
        onChange={(e) =>
          dispath({
            type: "ON_CHANGE",
            payload: e.target.value,
          })
        }
        onKeyDown={handleEnter}
      />
      <button
        onClick={() =>
          dispath({
            type: "ADD",
          })
        }
      >
        add
      </button>

      <div>
        <ul>
          {state.todos.map((todo, index) => {
            return (
              <div style={{ display: "flex", gap: "30px" }} key={index}>
                <li>{todo}</li>
                <div
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() =>
                    dispath({ type: "REMOVE_TODO", payload: index })
                  }
                >
                  x
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
