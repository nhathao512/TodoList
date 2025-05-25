# Todo List App

A beautiful dark-mode todo list application built with React and Tailwind CSS, featuring state management with Context API and useReducer.

## Features

- Add new todos with Enter key or button
- Green highlight for completed tasks
- Red highlight for pending deletion
- Double-click to edit tasks
- Automatic local storage saving
- Dark mode interface

## Tech Stack

| Technology       | Purpose                   |
|------------------|---------------------------|
| React 18         | Frontend framework        |
| Vite             | Build tool                |
| Tailwind CSS     | Styling                   |
| Context API      | State management          |
| useReducer       | State logic               |

## Project Structure
```
/src
 ├── store/
 │   ├── context.js          # Creates TodoContext
 │   ├── reducer.js          # Defines reducer functions
 │   ├── constants.js        # Initial state
 │   ├── Provider.jsx        # Provider 

 ├── components/
 │   ├── TodoList.jsx         # Main component for managing todos
 ├── App.js                  # Root component
 ├── index.js                # Entry point
```

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/nhathao512/TodoList.git
   cd TodoList
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the project:**
   ```sh
   npm run dev
   ```
   The app will start at **http://localhost:5174/**.

## Usage
1. **Add Task** Type in the input field and press Enter or click "Add".
2. **Complete Task** Click the checkbox to mark as complete (turns green).
3. **Delete Task**
  - First click: Marks for deletion (turns red)
  - Second click: Confirms removal

4. **Edit Task** Double-click on any task to edit.



## Screenshots
![Todo List Preview](https://github.com/nhathao512/TodoList/blob/72cba8dea183264a0b4c5b098419460b9fe98b7f/todolist-reactjs/Screenshots.png)  

### Thanks for visting our project ❤️! 
