import { CreateTodo } from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodoList />
      <CreateTodo />
    </div>
  );
};

export default App;
