import { Todo as TodoType } from "@/API";

interface TodoProps {
  todo: TodoType;
}

export default function TodoListItem({ todo }: TodoProps) {
  return (
    <li>
      {todo.name}:{todo.description}
    </li>
  );
}
