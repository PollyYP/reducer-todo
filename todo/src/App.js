import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddTodo setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
