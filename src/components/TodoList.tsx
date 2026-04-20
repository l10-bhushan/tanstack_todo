import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../apis/todos";

export default function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      {data.map((todo: any) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
