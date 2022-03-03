import actionTypes from "../actionTypes";

export default {
  setInputContent: (content) => ({
    type: actionTypes.SET_INPUT_CONTENT,
    content,
  }),
  setId: (id) => ({
    type: actionTypes.SET_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  }),
};
