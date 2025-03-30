import { useContext, useState } from "react";
import { TodoContext } from "../../store/context";

export default function TodoList() {
  const todoStore = useContext(TodoContext);
  const { dispath, state } = todoStore;
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      dispath({ type: "ADD" });
    }
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    dispath({
      type: "EDIT_TODO",
      payload: { id, newText: editText },
    });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (deletingId === id) {
      dispath({ type: "REMOVE_TODO", payload: id });
      setDeletingId(null);
    } else {
      setDeletingId(id);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl shadow-gray-900/50 border border-gray-700">
      <h2 className="text-xl font-bold text-purple-400 mb-2 text-center">
        Your Tasks
      </h2>
      <p className="text-gray-500 text-sm mb-6 text-center">
        {state.todos.filter((t) => !t.completed).length} tasks remaining
      </p>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          className="flex-1 px-4 py-3 bg-gray-700 text-gray-100 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-500 text-lg"
          placeholder="✍️ Add a new task..."
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
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all active:scale-95"
          onClick={() => dispath({ type: "ADD" })}
        >
          Add +
        </button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {state.todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">🎉 No tasks yet!</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {state.todos.map((todo) => {
              // Xác định màu sắc theo trạng thái
              let itemColor = "bg-gray-700";
              if (todo.completed)
                itemColor = "bg-green-900/50 border-l-4 border-green-500";
              if (deletingId === todo.id)
                itemColor = "bg-red-900/50 border-l-4 border-red-500";

              return (
                <div
                  className={`group flex items-center justify-between p-4 rounded-lg transition-all ${itemColor}`}
                  key={todo.id}
                >
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => {
                        dispath({ type: "TOGGLE_COMPLETE", payload: todo.id });
                        if (deletingId === todo.id) setDeletingId(null); // Bỏ trạng thái xóa nếu tích hoàn thành
                      }}
                      className="h-6 w-6 rounded border-2 border-gray-500 checked:border-green-500 checked:bg-green-500 focus:ring-green-500 bg-gray-800 flex-shrink-0"
                    />

                    {editingId === todo.id ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={() => saveEdit(todo.id)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && saveEdit(todo.id)
                        }
                        className="flex-1 bg-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500 text-lg border border-gray-500"
                        autoFocus
                      />
                    ) : (
                      <span
                        className={`flex-1 text-lg truncate ${
                          todo.completed
                            ? "line-through text-gray-300"
                            : "text-gray-200"
                        }`}
                        onDoubleClick={() => {
                          startEditing(todo);
                          setDeletingId(null); // Bỏ trạng thái xóa nếu edit
                        }}
                      >
                        {todo.text}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {editingId !== todo.id && (
                      <button
                        onClick={() => {
                          startEditing(todo);
                          setDeletingId(null); // Bỏ trạng thái xóa nếu edit
                        }}
                        className="text-gray-400 hover:text-yellow-300 transition-colors p-1"
                        title="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(todo.id)}
                      className={`p-1 transition-colors ${
                        deletingId === todo.id
                          ? "text-white bg-red-500 rounded-full"
                          : "text-gray-400 hover:text-red-400"
                      }`}
                      title={
                        deletingId === todo.id ? "Confirm delete" : "Delete"
                      }
                    >
                      {deletingId === todo.id ? (
                        <span className="px-1">✓</span>
                      ) : (
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
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
