import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../apis/todos";

export const CreateTodo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <button onClick={() => mutation.mutate({ title: "New Todo" })}>
      Add Todo
    </button>
  );
};
