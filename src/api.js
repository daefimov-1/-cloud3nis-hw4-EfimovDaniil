export const getTodos = async () => {
  return fetch("http://localhost:3000/todos").then((res) => res.json());
};

export const postTodo = async (todo) => {
  console.log(todo);
  return fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json);
};

export const updateTodo = async (todo) => {
  console.log(todo);
  return fetch("http://localhost:3000/todos/" + todo.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json);
};

export const deleteTodo = async (index) => {
  return fetch("http://localhost:3000/todos/" + index, {
    method: "DELETE",
  }).then((res) => res.json);
};
