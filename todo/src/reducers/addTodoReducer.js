const addTodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { todo: action.payload, completed: false, id: Date.now() },
        ],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todoList: [
          ...state.todoList.map((item) => {
            if (item.id === action.payload) {
              return { ...item, completed: !item.completed };
            }
            return item;
          }),
        ],
      };

    case "DELETE_COMPLETED":
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((item) => {
            return !item.completed;
          }),
        ],
      };

    default:
      return state;
  }
};

export default addTodoReducer;
