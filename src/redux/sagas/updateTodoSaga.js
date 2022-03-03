import { call, takeLatest } from "redux-saga/effects";
import { updateTodo } from "../../api";
import actionTypes from "../actionTypes";

export function* updateTodoWatcher() {
  yield takeLatest(actionTypes.UPDATE_TODO, updateTodoFlow);
}

function* updateTodoFlow(action) {
  yield call(updateTodo, action.todo);
}
