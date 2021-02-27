import React, { useReducer } from "react";
import addTodoReducer from "./reducers/addTodoReducer";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const initialState = {
    todoList: [],
  };

  const [state, dispatch] = useReducer(addTodoReducer, initialState);
  //console.log(state.todoList);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo completed={state.todoList.completed} dispatch={dispatch} />
      <Todos
        todoList={state.todoList}
        completed={state.todoList.completed}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
