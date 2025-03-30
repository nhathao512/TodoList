import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-purple-400">My Todo App</h1>
          <p className="text-gray-400 text-sm">Stay organized and productive</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <TodoList />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} nhathao512.</p>
          <p className="mt-1">Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
