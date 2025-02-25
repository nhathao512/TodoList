# 📝 Todo List App

A simple Todo List application built with **React.js** and **Context API + useReducer** for state management.

## 🚀 Features
- Add new todos by clicking the **Add** button or pressing **Enter**.
- Remove a todo by clicking the **❌ (delete)** button.
- Uses `useReducer` and `useContext` for global state management.

## 🛠️ Technologies Used
- **React.js** ⚛️
- **useContext & useReducer** (for state management)
- **CSS (optional, for styling)**

## 📂 Project Structure
```
/src
 ├── store/
 │   ├── context.js          # Creates TodoContext
 │   ├── reducer.js          # Defines reducer functions
 │   ├── constants.js        # Initial state
 ├── components/
 │   ├── TodoList.js         # Main component for managing todos
 ├── App.js                  # Root component
 ├── index.js                # Entry point
```

## 🏗️ Setup & Installation

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
   The app will start at **http://localhost:3000/**.

## 🎯 Usage
1. **Enter a todo** in the input field.
2. **Press Enter** or click the **Add** button to save the task.
3. **Click ❌** to remove a task from the list.

## 🎨 Screenshots
![Todo List Preview](https://via.placeholder.com/600x300)  
*(Replace with an actual screenshot of your app.)*

## 📌 Future Improvements
- [ ] Add local storage support.
- [ ] Implement edit functionality.
- [ ] Improve UI with better styling.

---

### 🔗 Connect with Me
💼 [LinkedIn](https://linkedin.com/in/your-profile) | 🐦 [Twitter](https://twitter.com/your-handle) | 🌎 [Portfolio](https://yourwebsite.com)

---

📌 *Feel free to contribute! Open a PR if you have any improvements.* 🚀
