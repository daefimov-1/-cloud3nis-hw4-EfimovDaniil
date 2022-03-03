import React from "react";
import { useDispatch, useSelector } from "react-redux";
import inputActions from "../redux/actions/inputActions";
import todoActions from "../redux/actions/todoActions";

const TodoForm = () => {
  const idx = useSelector((state) => state.inputs.id);
  const text = useSelector((state) => state.inputs.content);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const id = todos.length ? todos[todos.length - 1].id + 1 : 0;
  const addTodo = () => {
    if (!text || /^\s*$/.test(text)) {
      return;
    }
    dispatch(
      todoActions.addTodo({
        id,
        text,
      })
    );
    dispatch(inputActions.resetInputs());
  };

  const updateTodo = () => {
    if (!text || /^\s*$/.test(text)) {
      return;
    }
    const id = idx;
    dispatch(
      todoActions.updateTodo(id, {
        id,
        text,
      })
    );
    dispatch(inputActions.resetInputs());
  };

  const handleChange = (e) => {
    dispatch(inputActions.setInputContent(e.target.value));
  };

  return (
    <div className="todo-form">
      {idx !== -1 ? (
        <>
          <input
            placeholder="Update your item"
            value={text}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <button onClick={() => updateTodo()} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add To-Do"
            value={text}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <button onClick={() => addTodo()} className="todo-button">
            Add To-Do
          </button>
        </>
      )}
    </div>
  );
};

export default TodoForm;
