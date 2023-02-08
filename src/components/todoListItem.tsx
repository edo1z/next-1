import { Todo as TodoType } from "@/API";
import { Text, Divider } from "@chakra-ui/react";
import { deleteTodo } from "@/graphql/mutations";
import { API } from "aws-amplify";

interface TodoProps {
  todo: TodoType;
}

export default function TodoListItem({ todo }: TodoProps) {
  const del = async (id: string) => {
    return await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: deleteTodo,
      variables: { input: { id } },
    });
  };
  return (
    <li>
      {todo.name}:{todo.description}
      <Text onClick={() => del(todo.id)}>delete</Text>
      <Divider />
    </li>
  );
}
