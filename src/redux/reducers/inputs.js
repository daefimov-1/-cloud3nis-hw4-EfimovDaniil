import actionTypes from "../actionTypes";

const initialState = {
  id: -1,
  content: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_CONTENT: {
      const { content } = action;
      return {
        ...state,
        content,
      };
    }
    case actionTypes.SET_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      };
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
};
