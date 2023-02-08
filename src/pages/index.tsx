import Link from "next/link";
import { GetServerSideProps } from "next";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "@/aws-exports";
import { listTodos } from "@/graphql/queries";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Divider, Box, Text } from "@chakra-ui/react";
import { Todo as TodoType } from "@/API";
import TodoListItem from "@/components/todoListItem";

Amplify.configure({ ...awsExports, ssr: true });

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log("server start");
  const SSR = withSSRContext({ req });
  try {
    const response = await SSR.API.graphql({ query: listTodos });
    console.log("response", response);
    return {
      props: {
        todos: response.data.listTodos.items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

interface Props {
  todos: Array<TodoType>;
}

export default function Index({ todos }: Props) {
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <div>
      <ul>
        <li>
          <Link href="/todos">Todo List</Link>
        </li>
        {user && (
          <li>
            <Link href="/todos/create">Create new todo</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link href="/login">LOGIN</Link>
          </li>
        )}
      </ul>
      <Divider mt={5} />
      <Box mt={5}>
        <Text>Todo</Text>
        <ul>
          {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </Box>
    </div>
  );
}
