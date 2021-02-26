import React from "react";

export const Todo = (props) => {
  return (
    <div className="todo">
      <li className="todo-item">{props.list}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
