import actionTypes from "../actionTypes";

export default {
  addTodo: (todo) => ({
    type: actionTypes.ADD_TODO,
    todo,
  }),
  updateTodo: (id, todo) => ({
    type: actionTypes.UPDATE_TODO,
    id,
    todo,
  }),
  deleteTodo: (id) => ({
    type: actionTypes.DELETE_TODO,
    id,
  }),
  setTodos: (todos) => ({
    type: actionTypes.SET_TODOS,
    todos,
  }),
  loadTodos: () => ({
    type: actionTypes.LOAD_TODOS,
  }),
};
