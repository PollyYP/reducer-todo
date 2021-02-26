import React from "react";
import actions from "../actions/addTodoActions";

export default function Todos(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          <div className="todo">
            <li
              id={Date.now()}
              key={index}
              className={`todo-item ${props.completed && "completed"}`}
            >
              {todo}
            </li>
            <button
              className="complete-btn"
              onClick={() => props.dispatch(actions.toggleCompleted())}
            >
              <i className="fas fa-check"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
