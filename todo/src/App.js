import React, { useReducer } from "react";
import addTodoReducer from "./reducers/addTodoReducer";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const initialState = {
    todoList: [
      {
        todo: "Learn about reducers",
        completed: false,
        id: 3892987589,
      },
    ],
  };

  const [state, dispatch] = useReducer(addTodoReducer, initialState);
  //console.log(state.todoList);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo dispatch={dispatch} />
      <Todos
        todoList={state.todoList}
        completed={state.todoList.completed}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
