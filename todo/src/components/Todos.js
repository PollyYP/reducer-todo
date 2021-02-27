import React from "react";
import actions from "../actions/addTodoActions";

export default function Todos(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todoList.map((item, index) => (
          <div className="todo">
            <li
              key={index}
              className={`todo-item ${item.completed && "completed"}`}
            >
              {item.todo}
            </li>
            <button
              className="complete-btn"
              onClick={() => props.dispatch(actions.toggleCompleted(item.id))}
            >
              <i className="fas fa-check"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
