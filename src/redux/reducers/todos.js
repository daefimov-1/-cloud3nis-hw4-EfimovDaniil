import actionTypes from "../actionTypes";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const todos = [action.todo, ...state.todos];
      return {
        todos,
      };
    }
    case actionTypes.UPDATE_TODO: {
      const { id, todo } = action;
      const todos = [...state.todos].map((item) =>
        item.id === id ? todo : item
      );
      return {
        todos,
      };
    }
    case actionTypes.DELETE_TODO: {
      const { id } = action;
      const todos = [...state.todos].filter((item) => item.id !== id);
      return {
        todos,
      };
    }
    case actionTypes.SET_TODOS: {
      const todos = action.todos;
      return {
        todos,
      };
    }
    default:
      return state;
  }
};
