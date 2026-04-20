import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  const { data } = await axios.get(API_URL);
  return data.slice(0, 5); // limiting the todo list to only 5
};

const addTodo = async (todo: { title: string }) => {
  const { data } = await axios.post(API_URL, todo);
  return data;
};

const deleteTodo = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

export { fetchTodos, addTodo, deleteTodo };
