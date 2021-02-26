const addTodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todoList, action.payload] };

    case "TOGGLE_COMPLETED":
      return { ...state, completed: !state.completed };

    default:
      return state;
  }
};

export default addTodoReducer;
