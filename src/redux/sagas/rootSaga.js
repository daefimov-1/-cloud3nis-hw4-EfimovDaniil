import { fork } from "redux-saga/effects";
import { deleteTodoWatcher } from "./deleteTodoSaga";
import { loadTodosWatcher } from "./loadTodosSaga";
import { postTodoWatcher } from "./postTodoSaga";
import { updateTodoWatcher } from "./updateTodoSaga";

export function* rootSaga() {
  yield fork(loadTodosWatcher);
  yield fork(postTodoWatcher);
  yield fork(updateTodoWatcher);
  yield fork(deleteTodoWatcher);
}
