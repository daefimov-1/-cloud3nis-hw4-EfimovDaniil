import { call, put, takeLatest } from "redux-saga/effects";
import { getTodos } from "../../api";
import todoActions from "../actions/todoActions";
import actionTypes from "../actionTypes";

export function* loadTodosWatcher() {
  yield takeLatest(actionTypes.LOAD_TODOS, loadTodosFlow);
}

function* loadTodosFlow() {
  const todos = yield call(getTodos);
  yield put(todoActions.setTodos(todos));
}
