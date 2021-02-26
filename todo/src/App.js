import React, { useReducer } from "react";
import addTodoReducer from "./reducers/addTodoReducer";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const initialState = { todoList: [] };
  const [state, dispatch] = useReducer(addTodoReducer, initialState);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo setTodoList={dispatch} />
      <TodoList todoList={state.todoList} />
    </div>
  );
}

export default App;
