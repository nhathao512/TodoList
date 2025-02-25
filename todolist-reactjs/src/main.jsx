import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { TodoProvider } from "../store/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
