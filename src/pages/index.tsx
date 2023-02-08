import Link from "next/link";
import { GetServerSideProps } from "next";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "@/aws-exports";
import { listTodos } from "@/graphql/queries";
import { useAuthenticator } from "@aws-amplify/ui-react";

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

export default function Hoge() {
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
    </div>
  );
}
