import React, { useReducer } from "react";
import addTodoReducer from "./reducers/addTodoReducer";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const initialState = { todos: [], completed: false };
  const [state, dispatch] = useReducer(addTodoReducer, initialState);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo dispatch={dispatch} />
      <Todos
        todos={state.todos}
        completed={state.completed}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
