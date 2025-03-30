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
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg shadow-gray-900/50">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">
        Todo List
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          placeholder="Add a new task..."
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
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
          onClick={() =>
            dispath({
              type: "ADD",
            })
          }
        >
          Add
        </button>
      </div>

      <div>
        {state.todos.length === 0 ? (
          <p className="text-gray-400 text-center py-4">
            No tasks yet. Add one above!
          </p>
        ) : (
          <ul className="space-y-2">
            {state.todos.map((todo, index) => (
              <div
                className="flex items-center justify-between bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                key={index}
              >
                <li className="text-gray-100">{todo}</li>
                <button
                  className="text-red-400 hover:text-red-300 focus:outline-none transition-colors"
                  onClick={() =>
                    dispath({ type: "REMOVE_TODO", payload: index })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
