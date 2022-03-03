import { call, takeLatest } from "redux-saga/effects";
import { deleteTodo } from "../../api";
import actionTypes from "../actionTypes";

export function* deleteTodoWatcher() {
  yield takeLatest(actionTypes.DELETE_TODO, deleteTodoFlow);
}

function* deleteTodoFlow(action) {
  yield call(deleteTodo, action.id);
}
