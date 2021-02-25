import React from "react";

export default function AddTodo() {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}
