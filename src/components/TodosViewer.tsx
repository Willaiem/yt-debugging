import { useEffect, useState } from "react";
import { TodosService } from "../service/TodosService";

export const TodosViewer = () => {
  const [todos, setTodos] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    TodosService.get(setTodos);
  }, []);

  return todos && <p>{JSON.stringify(todos)}</p>;
};
