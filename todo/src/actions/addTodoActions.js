// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addTodo: (todoInput) => {
    return { type: "ADD_TODO", payload: todoInput };
  },
  toggleCompleted: (id) => {
    return { type: "TOGGLE_COMPLETED", payload: id };
  },
  deleteCompleted: () => {
    return { type: "DELETE_COMPLETED" };
  },
};
