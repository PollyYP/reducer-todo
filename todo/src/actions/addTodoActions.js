// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addTodo: (todoInput) => {
    return { type: "ADD_TODO", payload: todoInput };
  },
  toggleCompleted: () => {
    return { type: "TOGGLE_COMPLETED" };
  },
};
