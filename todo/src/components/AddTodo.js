import React, { useState } from "react";
import actions from "../actions/addTodoActions";

export default function AddTodo(props) {
  const [todoInput, setTodoInput] = useState("");

  const handleChanges = (e) => {
    setTodoInput(e.target.value);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    props.dispatch(actions.addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <div>
      <form>
        <input
          className="todo-input"
          type="text"
          name="todoInput"
          value={todoInput}
          onChange={handleChanges}
        />
        <button type="submit" className="todo-button" onClick={addNewTodo}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="trash-btn">
          <i className="fas fa-trash"></i>
          &nbsp; &nbsp; Clear completed
        </button>
      </form>
    </div>
  );
}
