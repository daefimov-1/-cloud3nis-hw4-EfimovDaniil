import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <h1>To-Do List</h1>
        <TodoForm />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
