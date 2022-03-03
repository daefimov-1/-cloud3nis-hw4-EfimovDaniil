import { call, takeLatest } from "redux-saga/effects";
import { postTodo } from "../../api";
import actionTypes from "../actionTypes";

export function* postTodoWatcher() {
  yield takeLatest(actionTypes.ADD_TODO, postTodoFlow);
}

function* postTodoFlow(action) {
  yield call(postTodo, action.todo);
}
