import React from "react";
import { useDispatch, useSelector } from "react-redux";
import inputActions from "../redux/actions/inputActions";
import todoActions from "../redux/actions/todoActions";

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const id = useSelector((state) => state.inputs.id);
  const dispatch = useDispatch();
  const onEditClicked = (item) => {
    dispatch(inputActions.setId(item.id));
    dispatch(inputActions.setInputContent(item.text));
  };
  const removeTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
    dispatch(inputActions.resetInputs());
  };
  if (todos.length === 0) dispatch(todoActions.loadTodos());
  if (id !== -1) {
    return <div className="Edit">Edit yout Todo</div>;
  }

  return todos.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div key={todo.id}>{todo.text}</div>
      <div>
        <button className="row-button" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
        <button className="row-button" onClick={() => onEditClicked(todo)}>
          Edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
