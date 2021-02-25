import React, { useState } from "react";

export default function AddTodo(props) {
  const [todoInput, setTodoInput] = useState("");

  const handleChanges = (e) => {
    setTodoInput(e.target.value);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    props.setTodoList((newTodo) => {
      return [...newTodo, todoInput];
    });
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
      </form>
    </div>
  );
}
