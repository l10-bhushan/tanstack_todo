import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../apis/todos";

export const DeleteTodo = (todo: any) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return <button onClick={() => deleteMutation.mutate(todo.id)}>Delete</button>;
};
